import { z } from "zod";
export const EncryptedMessageSchema = z.object({
  id: z.string(),
  chatId: z.string(),
  senderId: z.string(),
  recipientId: z.string().optional(),
  recipientGroupId: z.string().optional(),
  sentAtIso: z.string(),
  encrypted: z.object({
    algorithm: z.string(),
    ciphertextBase64: z.string(),
    nonceBase64: z.string(),
    ephPubBase64: z.string().optional(),
  }),
});
