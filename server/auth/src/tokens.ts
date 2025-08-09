import jwt from "jsonwebtoken";

const ACCESS_TTL = "15m";
const REFRESH_TTL = "30d";

export function signAccessToken(payload: object) {
  const secret = process.env.AUTH_JWT_SECRET || "dev-secret";
  return jwt.sign(payload, secret, { expiresIn: ACCESS_TTL });
}

export function signRefreshToken(payload: object) {
  const secret =
    process.env.AUTH_REFRESH_SECRET ||
    process.env.AUTH_JWT_SECRET ||
    "dev-secret";
  return jwt.sign(payload, secret, { expiresIn: REFRESH_TTL });
}

export function verifyAccessToken<T = any>(token: string): T | null {
  try {
    const secret = process.env.AUTH_JWT_SECRET || "dev-secret";
    return jwt.verify(token, secret) as T;
  } catch {
    return null;
  }
}

export function verifyRefreshToken<T = any>(token: string): T | null {
  try {
    const secret =
      process.env.AUTH_REFRESH_SECRET ||
      process.env.AUTH_JWT_SECRET ||
      "dev-secret";
    return jwt.verify(token, secret) as T;
  } catch {
    return null;
  }
}
