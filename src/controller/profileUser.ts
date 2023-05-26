import { Request, Response, NextFunction } from "express";
import connection from "../models/db";
import dotenv from "dotenv";
dotenv.config();

async function getProfileUser(req: any, res: Response, next: NextFunction) {
  const data = req.data;
  const conn = await connection;
  const query = `Select * from ${process.env.USER_TABLE} where user_name ='${data.user_name}'`;
  const [rows, fields] = (await conn.execute(query)) as any;
  res.json(rows[0]);
}

async function updateUser(req: any, res: Response, next: NextFunction) {
  const data = req.data;
  const conn = await connection;
  const query = `Select * from ${process.env.USER_TABLE} where user_name ='${data.user_name}'`;
  const [rows, fields] = (await conn.execute(query)) as any;
  res.json(rows[0]);
}

export default { getProfileUser };
