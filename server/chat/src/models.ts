import mongoose, { Schema, InferSchemaType } from "mongoose";

const MessageSchema = new Schema({
  id: { type: String, required: true, unique: true, index: true },
  chatId: { type: String, required: true, index: true },
  senderId: { type: String, required: true },
  recipientId: { type: String },
  recipientGroupId: { type: String },
  sentAtIso: { type: String, required: true, index: true },
  encrypted: {
    algorithm: String,
    ciphertextBase64: String,
    nonceBase64: String,
    ephPubBase64: String,
  },
  createdAt: { type: Date, default: () => new Date() },
});

export type MessageDoc = InferSchemaType<typeof MessageSchema> & { _id: any };
export const MessageModel =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);
