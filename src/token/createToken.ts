import jwt, { TokenExpiredError, VerifyOptions, decode } from "jsonwebtoken";
import config from "../config/config";

function createToken(data: {}): string {
  const token = jwt.sign(data, "HS256", {
    expiresIn: 60 * 60 * 24,
    algorithm: "HS512",
  });

  const refressToken = jwt.sign(data, "HS256", {
    expiresIn: "10d",
    algorithm: "HS512",
  });
  return token;
}
function verify(token: string) {
  const data = undefined;
  const result = jwt.verify(token, "HS256", (err: any, decoded: any) => {
    if (err) {
      return data;
    }
    return decoded;
  });
  return result;
}

export default {
  createToken,
};
