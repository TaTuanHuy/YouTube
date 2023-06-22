import jwt from "jsonwebtoken";
import { IUserInputDTO } from "../interfaces/IUsers";
import config from "../config/config";
function createToken(data: IUserInputDTO) {
  const privateKey = config.privateKey as string;
  const algorithm = config.algorithm as string;
  const token = jwt.sign(data, privateKey, {
    expiresIn: 60 * 60,
    algorithm: "HS512",
  });

  const refressToken = jwt.sign(data, privateKey, {
    expiresIn: 60 * 60 * 10,
    algorithm: "HS512",
  });
  return { token: token, refressToken: refressToken };
}

export default {
  createToken,
};
