import { Request, Response, NextFunction } from "express";
import userServices from "../../services/userServices";

async function getProfileUser(req: any, res: Response, next: NextFunction) {
  const { user_name } = req.data;
  const value = await userServices.getProfileUser(user_name);
  res.json(value);
}

async function createUser(req: Request, res: Response, next: NextFunction) {
  const reqBody = req.body;
  const result = await userServices.createUser(reqBody);
  res.json(result);
}

async function updateUser(req: any, res: Response, next: NextFunction) {
  const { user_name } = req.data;
  const { token, ...data } = req.body;
  const result = await userServices.updateUser(user_name, data);
  res.send(result);
}

export default { getProfileUser, createUser, updateUser };
