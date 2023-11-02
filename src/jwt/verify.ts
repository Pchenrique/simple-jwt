import { gererateSignature } from "./generateSignature";

interface IverifyOptions {
  token: string;
  secret: string;
}

export function verify({ token, secret }: IverifyOptions) {
  const [headerSent, payloadSent, signatureSent] = token.split(".");

  const signature = gererateSignature({
    header: headerSent,
    payload: payloadSent,
    secret,
  });

  if (signature !== signatureSent) {
    throw new Error("Invalid token!");
  }

  const decodedPayload = JSON.parse(
    Buffer.from(payloadSent, "base64url").toString("utf-8")
  );

  if (decodedPayload.exp < Date.now()) {
    throw new Error("Expired token!");
  }

  return decodedPayload;
}
