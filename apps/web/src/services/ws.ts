import { WS_URL } from "../config";

export function connect(userId: string): WebSocket {
  const url = new URL(WS_URL);
  url.searchParams.set("userId", userId);
  return new WebSocket(url.toString());
}
