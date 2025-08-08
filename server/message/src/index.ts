import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Kafka } from "kafkajs";
import { KAFKA_TOPICS } from "../../../packages/shared/src/kafka";
import { WebSocketServer } from "ws";
import type { WebSocket } from "ws";
import { getDb } from "./db";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const server = app.listen(
  process.env.PORT ? Number(process.env.PORT) : 4003,
  () => {
    console.log(`[message] listening on :${process.env.PORT || 4003}`);
  }
);

const wss = new WebSocketServer({ server });
const userIdToSockets = new Map<string, Set<WebSocket>>();

wss.on("connection", (socket, request) => {
  const url = new URL(request.url || "", `http://${request.headers.host}`);
  const userId = url.searchParams.get("userId");
  if (userId) {
    if (!userIdToSockets.has(userId)) userIdToSockets.set(userId, new Set());
    userIdToSockets.get(userId)!.add(socket as any);
    socket.on("close", () =>
      userIdToSockets.get(userId)!.delete(socket as any)
    );
  }
});

const kafka = new Kafka({
  clientId: "message-service",
  brokers: (process.env.KAFKA_BROKERS || "localhost:9092").split(","),
});
const consumer = kafka.consumer({ groupId: "message-dispatchers" });

async function runConsumer() {
  await consumer.connect();
  await consumer.subscribe({
    topic: KAFKA_TOPICS.chatMessages,
    fromBeginning: false,
  });
  await consumer.run({
    eachMessage: async ({ message }) => {
      const value = message.value?.toString();
      if (!value) return;
      const payload = JSON.parse(value);
      const recipientId: string | undefined = payload.recipientId;
      if (recipientId && userIdToSockets.has(recipientId)) {
        for (const ws of userIdToSockets.get(recipientId)!) {
          try {
            (ws as any).send(value);
          } catch {}
        }
        try {
          const db = await getDb();
          await db
            .collection("receipts")
            .updateOne(
              { messageId: payload.id, userId: recipientId },
              { $set: { deliveredAt: new Date() } },
              { upsert: true }
            );
        } catch {}
      }
    },
  });
}
runConsumer().catch(console.error);

app.get("/health", (_req, res) =>
  res.json({ status: "ok", service: "message" })
);
