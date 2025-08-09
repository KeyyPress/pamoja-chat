import mongoose, { Schema, InferSchemaType } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    index: true,
    unique: true,
  },
  passwordHash: { type: String, required: [true, "Password is required"] },
  displayName: { type: String, required: [true, "Display name is required"] },
  publicKeyBase64: { type: String, required: [true, "Public key is required"] },
  createdAt: { type: Date, default: () => new Date() },
});

const SessionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, "User ID is required"],
    index: true,
  },
  tokenId: { type: String, index: true },
  createdAt: { type: Date, default: () => new Date(), index: true },
  lastSeenAt: { type: Date, default: () => new Date(), index: true },
  revokedAt: { type: Date },
  ip: { type: String },
  ua: {
    browser: String,
    os: String,
    device: String,
  },
});

const MessageSchema = new Schema({
  id: {
    type: String,
    required: [true, "ID is required"],
    index: true,
    unique: true,
  },
  chatId: {
    type: String,
    required: [true, "Chat ID is required"],
    index: true,
  },
  senderId: { type: String, required: [true, "Sender ID is required"] },
  recipientId: { type: String, required: [true, "Recipient ID is required"] },
  recipientGroupId: {
    type: String,
    required: [true, "Recipient group ID is required"],
  },
  sentAtIso: {
    type: String,
    required: [true, "Sent at is required"],
    index: true,
  },
  encrypted: {
    algorithm: String,
    ciphertextBase64: String,
    nonceBase64: String,
    ephPubBase64: String,
  },
  createdAt: { type: Date, default: () => new Date() },
});

export type OtpDoc = { phone: string; code: string; expiresAt: Date } & {
  _id: any;
};
const OtpSchema = new Schema<OtpDoc>({
  phone: { type: String, required: [true, "Phone is required"], index: true },
  code: { type: String, required: [true, "Code is required"] },
  expiresAt: {
    type: Date,
    required: [true, "Expires at is required"],
    index: true,
  },
});

export type UserDoc = InferSchemaType<typeof UserSchema> & { _id: any };
export type SessionDoc = InferSchemaType<typeof SessionSchema> & { _id: any };
export type MessageDoc = InferSchemaType<typeof MessageSchema> & { _id: any };

export const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);
export const SessionModel =
  mongoose.models.Session || mongoose.model("Session", SessionSchema);
export const MessageModel =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);
export const OtpModel = mongoose.models.Otp || mongoose.model("Otp", OtpSchema);
