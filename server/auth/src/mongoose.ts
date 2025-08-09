import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectMongoose(
  uri = process.env.MONGO_URI!
): Promise<typeof mongoose> {
  if (!uri) throw new Error("MONGO_URI not set");
  if (mongoose.connection.readyState === 1) return mongoose;
  await mongoose.connect(uri, {
    dbName: undefined, // this tells mongoose to use db from URI
  });
  return mongoose;
}
