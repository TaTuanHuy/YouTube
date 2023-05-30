import { Response, Request, NextFunction } from "express";
import { IUserInputDTO } from "../interfaces/IUsers";
import loginService from "../services/loginServices";

async function signIn(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<string | void> {
  const userDTO: IUserInputDTO = req.body;
  const token = await loginService.login(userDTO);
  res.json(token);
}

export default {
  signIn,
};
