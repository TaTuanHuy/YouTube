import jwt, { TokenExpiredError, VerifyOptions, decode } from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

function createToken(data: {}) {
  const token = jwt.sign(data, "HS256", {
    expiresIn: 60 * 60,
    algorithm: "HS512",
  });

  const refressToken = jwt.sign(data, "HS256", {
    expiresIn: "10d",
    algorithm: "HS512",
  });
  return token;
}
function verify(token: string) {
  let data: any = null;
  jwt.verify(token, "HS256", (err: any, decoded: any) => {
    if (err) {
      console.log("chuỗi token của bạn đã sai");
      return data;
    }
    return decoded;
  });
}

export default {
  createToken,
  verify,
};
