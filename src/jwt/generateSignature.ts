import { createHmac } from "node:crypto";

interface IGenerateSignatureOptions {
  header: string;
  payload: string;
  secret: string;
}

export function gererateSignature({
  header,
  payload,
  secret,
}: IGenerateSignatureOptions) {
  const hmac = createHmac("SHA256", secret);

  const signature = hmac.update(`${header}.${payload}`).digest("base64url");

  return signature;
}
