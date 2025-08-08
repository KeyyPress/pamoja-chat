import sodium from "libsodium-wrappers";

export type KeyPair = { publicKeyBase64: string; privateKeyBase64: string };
export async function initCrypto() {
  if (!sodium.ready) {
    await sodium.ready;
  }
  return sodium;
}
export async function generateKeyPair(): Promise<KeyPair> {
  await initCrypto();
  const { publicKey, privateKey } = sodium.crypto_box_keypair();
  return {
    publicKeyBase64: sodium.to_base64(publicKey),
    privateKeyBase64: sodium.to_base64(privateKey),
  };
}
export async function encryptFor(
  recipientPublicKeyBase64: string,
  message: Uint8Array
) {
  await initCrypto();
  const publicKey = sodium.from_base64(recipientPublicKeyBase64);
  const { publicKey: ephPub, privateKey: ephPriv } =
    sodium.crypto_box_keypair();
  const nonce = sodium.randombytes_buf(sodium.crypto_box_NONCEBYTES);
  const cipher = sodium.crypto_box_easy(message, nonce, publicKey, ephPriv);
  return {
    algorithm: "x25519-xsalsa20-poly1305",
    ciphertextBase64: sodium.to_base64(cipher),
    nonceBase64: sodium.to_base64(nonce),
    ephPubBase64: sodium.to_base64(ephPub),
  };
}
export async function decryptWith(
  privateKeyBase64: string,
  ephPubBase64: string,
  nonceBase64: string,
  ciphertextBase64: string
) {
  await initCrypto();
  const ephPub = sodium.from_base64(ephPubBase64);
  const nonce = sodium.from_base64(nonceBase64);
  const cipher = sodium.from_base64(ciphertextBase64);
  const priv = sodium.from_base64(privateKeyBase64);
  const opened = sodium.crypto_box_open_easy(cipher, nonce, ephPub, priv);
  return opened;
}
