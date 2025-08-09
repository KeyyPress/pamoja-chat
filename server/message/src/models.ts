import mongoose, { Schema } from "mongoose";

const ReceiptSchema = new Schema({
  messageId: { type: String, required: true, index: true },
  userId: { type: String, required: true, index: true },
  deliveredAt: { type: Date },
  readAt: { type: Date },
});

export const ReceiptModel =
  mongoose.models.Receipt || mongoose.model("Receipt", ReceiptSchema);
