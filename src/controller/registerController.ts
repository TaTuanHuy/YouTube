import db from "../models/db";
import dotenv from "dotenv";
dotenv.config();
import { Response, Request, NextFunction } from "express";
function getFormRegister(req: Request, res: Response, next: NextFunction) {
  res.render("register");
}

async function createUser(req: Request, res: Response, next: NextFunction) {
  const conn = await db;
  const table = process.env.USER_TABLE;
  const { user_name, pass_word, full_name, user_id } = req.body;
  const query = `INSERT INTO ${table} (user_name, pass_word, full_name, user_id)
                                   VALUES ('${user_name}', '${pass_word}', '${full_name}', '${user_id}');`;
  await conn.execute(query);
  res.redirect("http://localhost:3000");
}

export default {
  getFormRegister,
  createUser,
};
