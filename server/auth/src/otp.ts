import { randomInt } from "crypto";
import { connectMongoose } from "./mongoose";
import { OtpModel, OtpDoc } from "./models";
import dotenv from "dotenv";

dotenv.config();

export async function issueOtp(phone: string) {
  await connectMongoose();
  const code = String(randomInt(100000, 999999));
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  await OtpModel.findOneAndUpdate(
    { phone },
    { $set: { code, expiresAt } },
    { upsert: true }
  );
  // Send SMS via Twilio if configured
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  if (sid && token && from) {
    try {
      const twilio = require("twilio")(sid, token);
      await twilio.messages.create({
        to: phone,
        from,
        body: `Your Zip Chat code is ${code}`,
      });
    } catch {}
  }
  return { code, expiresAt };
}

export async function verifyOtp(phone: string, code: string) {
  await connectMongoose();
  const rec = (await OtpModel.findOne({ phone }).lean()) as OtpDoc | null;
  if (!rec) return false;
  if (rec.code !== code) return false;
  if (new Date(rec.expiresAt).getTime() < Date.now()) return false;
  await OtpModel.deleteOne({ phone });
  return true;
}
