import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getAuthDb } from "./db";
import { ObjectId } from "mongodb";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok", service: "auth" }));

// register: { email, password, displayName, publicKeyBase64 }
app.post("/register", async (req, res) => {
  const { email, password, displayName, publicKeyBase64 } = req.body || {};
  if (!email || !password || !displayName || !publicKeyBase64) {
    return res.status(400).json({ error: "missing fields" });
  }
  const db = await getAuthDb();
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const result = await db
      .collection("users")
      .insertOne({ email, passwordHash, displayName, publicKeyBase64, createdAt: new Date() });
    return res.status(201).json({ id: String(result.insertedId), email, displayName });
  } catch (e: any) {
    if (e.code === 11000) return res.status(409).json({ error: "email in use" });
    console.error(e);
    return res.status(500).json({ error: "server error" });
  }
});

// login: { email, password }
app.post("/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "missing fields" });
  const db = await getAuthDb();
  const user = await db.collection("users").findOne({ email });
  if (!user) return res.status(401).json({ error: "invalid credentials" });
  const ok = await bcrypt.compare(password, (user as any).passwordHash);
  if (!ok) return res.status(401).json({ error: "invalid credentials" });
  const token = jwt.sign(
    { sub: String((user as any)._id), email },
    process.env.AUTH_JWT_SECRET || "dev-secret",
    { expiresIn: "7d" }
  );
  return res.json({
    token,
    user: {
      id: String((user as any)._id),
      email: (user as any).email,
      displayName: (user as any).displayName,
    },
  });
});

// get public key by user id or email
app.get("/public-key", async (req, res) => {
  const { email, userId } = req.query as any;
  const db = await getAuthDb();
  const query: any = email ? { email } : userId ? { _id: new ObjectId(String(userId)) } : null;
  if (!query) return res.status(400).json({ error: "email or userId required" });
  const user = await db
    .collection("users")
    .findOne(query, { projection: { publicKeyBase64: 1 } });
  if (!user) return res.status(404).json({ error: "not found" });
  return res.json({ publicKeyBase64: (user as any).publicKeyBase64 });
});

const port = process.env.PORT ? Number(process.env.PORT) : 4001;
app.listen(port, () => {
  console.log(`[auth] listening on :${port}`);
});
