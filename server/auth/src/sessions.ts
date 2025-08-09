import { UAParser } from "ua-parser-js";
import { SessionModel } from "./models";

export async function recordSession(
  _db: unknown,
  userId: string,
  req: { ip?: string | null; headers: any }
) {
  const ua = new UAParser(req.headers["user-agent"] || "").getResult();
  const session = {
    userId,
    createdAt: new Date(),
    ip: req.ip || null,
    ua: {
      browser: ua.browser.name || null,
      os: ua.os.name || null,
      device: ua.device.type || "desktop",
    },
  };
  await SessionModel.create({
    userId,
    createdAt: session.createdAt,
    ip: session.ip,
    ua: session.ua,
  });
  return session;
}

export async function detectAnomaly(
  _db: unknown,
  userId: string,
  currentIp?: string | null
) {
  const last = await SessionModel.find({ userId })
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();
  const knownIps = new Set((last as any[]).map((s) => s.ip).filter(Boolean));
  if (currentIp && !knownIps.has(currentIp)) {
    return { type: "new_ip", ip: currentIp } as const;
  }
  return null;
}
