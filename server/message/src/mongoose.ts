import mongoose from "mongoose";

export async function connectMongoose(
  uri = process.env.MONGO_URI!
): Promise<typeof mongoose> {
  if (!uri) throw new Error("MONGO_URI not set");
  if (mongoose.connection.readyState === 1) return mongoose;
  await mongoose.connect(uri, { dbName: undefined });
  return mongoose;
}
