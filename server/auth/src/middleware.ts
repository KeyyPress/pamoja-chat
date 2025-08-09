import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "./tokens";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization || "";
  const token = auth.replace(/^Bearer\s+/i, "");
  if (!token) return res.status(401).json({ error: "unauthorized" });
  const payload = verifyAccessToken<any>(token);
  if (!payload) return res.status(401).json({ error: "unauthorized" });
  (req as any).user = payload;
  next();
}
