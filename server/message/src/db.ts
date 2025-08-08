import { MongoClient, Db } from "mongodb";

let cached: { client: MongoClient; db: Db } | null = null;

export async function getDb(uri = process.env.MONGO_URI!): Promise<Db> {
  if (cached) return cached.db;
  if (!uri) throw new Error("MONGO_URI not set");
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  cached = { client, db };
  return db;
}
