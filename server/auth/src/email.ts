import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : undefined;
  const secure =
    String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port) {
    return nodemailer.createTransport({ jsonTransport: true });
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
  });
}

const transporter = createTransport();
const fromAddress = process.env.SMTP_FROM || "Zip Chat <no-reply@zip.local>";

export async function sendWelcomeEmail(toEmail: string, displayName: string) {
  await transporter.sendMail({
    from: fromAddress,
    to: toEmail,
    subject: "Welcome to Zip Chat",
    text: `Hi ${displayName},\n\nWelcome to Zip Chat. Your account has been created successfully.`,
  });
}

export async function sendSecurityAlert(toEmail: string, details: string) {
  await transporter.sendMail({
    from: fromAddress,
    to: toEmail,
    subject: "New login detected",
    text: `We noticed a new login to your account. Details: ${details}`,
  });
}
