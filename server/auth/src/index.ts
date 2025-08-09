import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { v4 as uuidv4 } from "uuid";
import { sendWelcomeEmail, sendSecurityAlert } from "./email";
import { recordSession, detectAnomaly } from "./sessions";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "./tokens";
import { getAuthDb } from "./db";
import { ObjectId } from "mongodb";
import { connectMongoose } from "./mongoose";
import { UserModel, SessionModel } from "./models";
import { issueOtp, verifyOtp } from "./otp";
import { requireAuth } from "./middleware";
import { handleGoogleCallback, handleGithubCallback } from "./oauth";

dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", true);

const limiter = rateLimit({ windowMs: 60_000, max: 100 });
app.use(limiter);

app.get("/health", (_req, res) => res.json({ status: "ok", service: "auth" }));

// phone OTP
app.post("/otp/issue", async (req, res) => {
  const { phone } = req.body || {};
  if (!phone) return res.status(400).json({ error: "missing phone" });
  const { code, expiresAt } = await issueOtp(phone);
  // TODO: integrate SMS provider; for now, return code for dev
  return res.json({ sent: true, expiresAt, devCode: code });
});

app.post("/otp/verify", async (req, res) => {
  const { phone, code, displayName, publicKeyBase64 } = req.body || {};
  if (!phone || !code) return res.status(400).json({ error: "missing fields" });
  const ok = await verifyOtp(phone, code);
  if (!ok) return res.status(400).json({ error: "invalid code" });
  await connectMongoose();
  let user = await UserModel.findOne({ email: phone }).lean();
  if (!user) {
    const created = await UserModel.create({
      email: phone,
      passwordHash: "",
      displayName: displayName || phone,
      publicKeyBase64: publicKeyBase64 || "",
    });
    user = created.toObject();
  }
  const userId = String((user as any)._id);
  const tokenId = uuidv4();
  const access = signAccessToken({ sub: userId, email: phone });
  const refresh = signRefreshToken({ sub: userId, email: phone, tokenId });
  const cookieName = process.env.AUTH_COOKIE_NAME || "pa_refresh";
  const cookieDomain = process.env.AUTH_COOKIE_DOMAIN || "localhost";
  const cookieSecure =
    String(process.env.AUTH_COOKIE_SECURE || "false").toLowerCase() === "true";
  res.cookie(cookieName, refresh, {
    httpOnly: true,
    sameSite: "lax",
    secure: cookieSecure,
    domain: cookieDomain,
    path: "/",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  await SessionModel.updateOne(
    { userId, tokenId },
    {
      $set: {
        userId,
        tokenId,
        createdAt: new Date(),
        lastSeenAt: new Date(),
        ip: req.ip || null,
      },
    },
    { upsert: true }
  );
  return res.json({
    accessToken: access,
    user: { id: userId, email: phone, displayName: (user as any).displayName },
  });
});

// OAuth: Google
app.get("/oauth/google/callback", async (req, res) => {
  const code = String((req.query as any).code || "");
  if (!code) return res.status(400).json({ error: "missing code" });
  const { email, name } = await handleGoogleCallback(code);
  await connectMongoose();
  let user = await UserModel.findOne({ email }).lean();
  if (!user) {
    const created = await UserModel.create({
      email,
      passwordHash: "",
      displayName: name || email,
      publicKeyBase64: "",
    });
    user = created.toObject();
  }
  const userId = String((user as any)._id);
  const tokenId = uuidv4();
  const access = signAccessToken({ sub: userId, email });
  const refresh = signRefreshToken({ sub: userId, email, tokenId });
  const cookieName = process.env.AUTH_COOKIE_NAME || "pa_refresh";
  const cookieDomain = process.env.AUTH_COOKIE_DOMAIN || "localhost";
  const cookieSecure =
    String(process.env.AUTH_COOKIE_SECURE || "false").toLowerCase() === "true";
  res.cookie(cookieName, refresh, {
    httpOnly: true,
    sameSite: "lax",
    secure: cookieSecure,
    domain: cookieDomain,
    path: "/",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  await SessionModel.updateOne(
    { userId, tokenId },
    {
      $set: {
        userId,
        tokenId,
        createdAt: new Date(),
        lastSeenAt: new Date(),
        ip: req.ip || null,
      },
    },
    { upsert: true }
  );
  return res.json({
    accessToken: access,
    user: { id: userId, email, displayName: (user as any).displayName },
  });
});

// OAuth: GitHub
app.get("/oauth/github/callback", async (req, res) => {
  const code = String((req.query as any).code || "");
  if (!code) return res.status(400).json({ error: "missing code" });
  const { email, name } = await handleGithubCallback(code);
  await connectMongoose();
  let user = await UserModel.findOne({ email }).lean();
  if (!user) {
    const created = await UserModel.create({
      email,
      passwordHash: "",
      displayName: name || email,
      publicKeyBase64: "",
    });
    user = created.toObject();
  }
  const userId = String((user as any)._id);
  const tokenId = uuidv4();
  const access = signAccessToken({ sub: userId, email });
  const refresh = signRefreshToken({ sub: userId, email, tokenId });
  const cookieName = process.env.AUTH_COOKIE_NAME || "pa_refresh";
  const cookieDomain = process.env.AUTH_COOKIE_DOMAIN || "localhost";
  const cookieSecure =
    String(process.env.AUTH_COOKIE_SECURE || "false").toLowerCase() === "true";
  res.cookie(cookieName, refresh, {
    httpOnly: true,
    sameSite: "lax",
    secure: cookieSecure,
    domain: cookieDomain,
    path: "/",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  await SessionModel.updateOne(
    { userId, tokenId },
    {
      $set: {
        userId,
        tokenId,
        createdAt: new Date(),
        lastSeenAt: new Date(),
        ip: req.ip || null,
      },
    },
    { upsert: true }
  );
  return res.json({
    accessToken: access,
    user: { id: userId, email, displayName: (user as any).displayName },
  });
});

// register: { email, password, displayName, publicKeyBase64 }
app.post("/register", async (req, res) => {
  const { email, password, displayName, publicKeyBase64 } = req.body || {};
  if (!email || !password || !displayName || !publicKeyBase64) {
    return res.status(400).json({ error: "missing fields" });
  }
  await connectMongoose();
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const created = await UserModel.create({
      email,
      passwordHash,
      displayName,
      publicKeyBase64,
    });
    try {
      await sendWelcomeEmail(email, displayName);
    } catch {}
    return res
      .status(201)
      .json({ id: String(created._id), email, displayName });
  } catch (e: any) {
    if (e.code === 11000)
      return res.status(409).json({ error: "email in use" });
    console.error(e);
    return res.status(500).json({ error: "server error" });
  }
});

// login: { email, password }
app.post("/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ error: "missing fields" });
  await connectMongoose();
  const user = await UserModel.findOne({ email }).lean();
  if (!user) return res.status(401).json({ error: "invalid credentials" });
  const ok = await bcrypt.compare(password, (user as any).passwordHash);
  if (!ok) return res.status(401).json({ error: "invalid credentials" });
  const userId = String((user as any)._id);
  const access = signAccessToken({ sub: userId, email });
  const tokenId = uuidv4();
  const refresh = signRefreshToken({ sub: userId, email, tokenId });
  const cookieName = process.env.AUTH_COOKIE_NAME || "pa_refresh";
  const cookieDomain = process.env.AUTH_COOKIE_DOMAIN || "localhost";
  const cookieSecure =
    String(process.env.AUTH_COOKIE_SECURE || "false").toLowerCase() === "true";
  res.cookie(cookieName, refresh, {
    httpOnly: true,
    sameSite: "lax",
    secure: cookieSecure,
    domain: cookieDomain,
    path: "/",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  const session = await recordSession({} as any, userId, {
    ip: req.ip,
    headers: req.headers,
  });
  await SessionModel.updateOne(
    { userId, tokenId },
    {
      $set: {
        userId,
        tokenId,
        createdAt: new Date(),
        lastSeenAt: new Date(),
        ip: session.ip,
        ua: session.ua,
      },
    },
    { upsert: true }
  );
  const anomaly = await detectAnomaly({} as any, userId, req.ip);
  if (anomaly) {
    try {
      await sendSecurityAlert(email, `New login from IP ${anomaly.ip}`);
    } catch {}
  }

  return res.json({
    accessToken: access,
    user: {
      id: userId,
      email: (user as any).email,
      displayName: (user as any).displayName,
    },
    session,
  });
});

// get public key by user id or email
app.get("/public-key", async (req, res) => {
  const { email, userId } = req.query as any;
  const db = await getAuthDb();
  const query: any = email
    ? { email }
    : userId
    ? { _id: new ObjectId(String(userId)) }
    : null;
  if (!query)
    return res.status(400).json({ error: "email or userId required" });
  const user = await db
    .collection("users")
    .findOne(query, { projection: { publicKeyBase64: 1 } });
  if (!user) return res.status(404).json({ error: "not found" });
  return res.json({ publicKeyBase64: (user as any).publicKeyBase64 });
});

// refresh token endpoint
app.post("/refresh", async (req, res) => {
  const cookieName = process.env.AUTH_COOKIE_NAME || "pa_refresh";
  const token = (req.cookies || {})[cookieName];
  if (!token) return res.status(401).json({ error: "missing refresh" });
  const payload = verifyRefreshToken<any>(token);
  if (!payload) return res.status(401).json({ error: "invalid refresh" });
  const access = signAccessToken({ sub: payload.sub, email: payload.email });
  await SessionModel.updateOne(
    { userId: new ObjectId(String(payload.sub)), tokenId: payload.tokenId },
    { $set: { lastSeenAt: new Date() } }
  );
  return res.json({ accessToken: access });
});

// logout current session (invalidate refresh token via tokenId)
app.post("/logout", async (req, res) => {
  const cookieName = process.env.AUTH_COOKIE_NAME || "pa_refresh";
  const token = (req.cookies || {})[cookieName];
  if (!token) return res.status(200).json({ ok: true });
  const payload = verifyRefreshToken<any>(token);
  res.clearCookie(cookieName, { path: "/" });
  if (!payload) return res.status(200).json({ ok: true });
  await connectMongoose();
  await SessionModel.updateOne(
    { userId: new ObjectId(String(payload.sub)), tokenId: payload.tokenId },
    { $set: { revokedAt: new Date() } }
  );
  return res.json({ ok: true });
});

// logout all sessions for user
app.post("/logout-all", async (req, res) => {
  const auth = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  const p = auth
    ? ((): any => {
        try {
          return jwt.decode(auth) as any;
        } catch {
          return null;
        }
      })()
    : null;
  if (!p?.sub) return res.status(401).json({ error: "unauthorized" });
  await connectMongoose();
  await SessionModel.updateMany(
    { userId: new ObjectId(String(p.sub)) },
    { $set: { revokedAt: new Date() } }
  );
  return res.json({ ok: true });
});

// Sessions: list and revoke
app.get("/sessions", requireAuth, async (req, res) => {
  await connectMongoose();
  const userId = new ObjectId(String((req as any).user.sub));
  const sessions = await SessionModel.find({ userId })
    .sort({ createdAt: -1 })
    .lean();
  return res.json({ sessions });
});

app.post("/sessions/:id/revoke", requireAuth, async (req, res) => {
  await connectMongoose();
  const userId = new ObjectId(String((req as any).user.sub));
  const id = String(req.params.id);
  await SessionModel.updateOne(
    { _id: new ObjectId(id), userId },
    { $set: { revokedAt: new Date() } }
  );
  return res.json({ ok: true });
});

const port = process.env.PORT ? Number(process.env.PORT) : 4001;
app.listen(port, () => {
  console.log(`[auth] listening on :${port}`);
});
