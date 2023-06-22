import { Response, Request, NextFunction } from "express";
import { IUserInputDTO } from "../../interfaces/IUsers";
import loginService from "../../services/loginServices";
import jwt from "jsonwebtoken";

async function signIn(
  req: Request,
  res: Response
): Promise<{ token: string; refressToken: string } | void> {
  const userDTO: IUserInputDTO = req.body;
  // const tokenHeader = req.headers.token as string;
  // if (!(tokenHeader === "")) {
  //   var decoded = jwt.verify(tokenHeader, "HS256");
  //   console.log(decoded);
  // }
  const token = await loginService.login(userDTO);

  res.json(token);
}

export default {
  signIn,
};
