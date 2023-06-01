import jwt, { TokenExpiredError, VerifyOptions, decode } from "jsonwebtoken";
import config from "../config/config";

function createToken(data: {}): { token: string; refressToken: string } {
  const token = jwt.sign(data, "HS256", {
    expiresIn: 60 * 60,
    algorithm: "HS512",
  });

  const refressToken = jwt.sign(data, "HS256", {
    expiresIn: "10d",
    algorithm: "HS512",
  });
  return { token, refressToken };
}

export default {
  createToken,
};
