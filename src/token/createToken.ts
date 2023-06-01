import jwt from "jsonwebtoken";
import { IUserInputDTO } from "../interfaces/IUsers";

function createToken(data: IUserInputDTO) {
  const token = jwt.sign(data, "HS256", {
    expiresIn: 60 * 60,
    algorithm: "HS512",
  });

  const refressToken = jwt.sign(data, "HS256", {
    expiresIn: 60 * 60 * 10,
    algorithm: "HS512",
  });
  return { token: token, refressToken: refressToken };
}

export default {
  createToken,
};
