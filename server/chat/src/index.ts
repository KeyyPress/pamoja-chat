import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Kafka } from "kafkajs";
import { KAFKA_TOPICS } from "../../../packages/shared/src/kafka";
import { connectMongoose } from "./mongoose";
import { MessageModel } from "./models";
import { EncryptedMessageSchema } from "./validation";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const kafka = new Kafka({
  clientId: "chat-service",
  brokers: (process.env.KAFKA_BROKERS || "localhost:9092").split(","),
});
const producer = kafka.producer();

async function ensureProducer() {
  await producer.connect();
}
ensureProducer().catch(console.error);

app.get("/health", (_req, res) => res.json({ status: "ok", service: "chat" }));

app.post("/messages", async (req, res) => {
  const message = req.body; // already encrypted payload
  const parsed = EncryptedMessageSchema.safeParse(message);
  if (!parsed.success)
    return res
      .status(400)
      .json({ error: "invalid payload", issues: parsed.error.issues });

  try {
    await connectMongoose();
    await MessageModel.create({ ...message });
  } catch (e) {
    console.error("mongo insert failed", e);
  }

  await producer.send({
    topic: KAFKA_TOPICS.chatMessages,
    messages: [{ value: JSON.stringify(message) }],
  });
  res.status(202).json({ accepted: true });
});

const port = process.env.PORT ? Number(process.env.PORT) : 4002;
app.listen(port, () => {
  console.log(`[chat] listening on :${port}`);
});
