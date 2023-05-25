import db from "../models/db";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

async function checkSignIn(req: Request, res: Response, next: NextFunction) {
  const conn = await db;
  const { user_name, pass_word } = req.body;
  if (user_name == undefined || pass_word == undefined) {
    console.log("Bạn đã nhập sai tài khoản hoặc mật khẩu vui lòng thử lại!");
  } else {
    const userTable = process.env.USER_TABLE;
    const query = `SELECT * FROM ${userTable} WHERE user_name = '${user_name}' AND pass_word = '${pass_word}'`;
    const [rows, fields] = (await conn.execute(query)) as any;
    if (rows.length > 0) {
      next();
    } else {
      console.log(req.body);
      console.log("Bạn đã đăng nhập sai");
    }
  }
}

export default {
  checkSignIn,
};