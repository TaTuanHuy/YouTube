import db from "../models/db";
import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";
import jwt from "../token/createToken";
import { Response, Request, NextFunction } from "express";

function getFormSignIn(req: Request, res: Response, next: NextFunction) {
  res.render("login");
}

async function signIn(req: Request, res: Response, next: NextFunction) {
  // const { user_name, password } = req.body;
  // const conn = await db;
  // const userTable = process.env.USER_TABLE;
  // const videoTable = process.env.VIDEO_TABLE;
  const token = jwt.createToken(req.body);
  res.json(token);
}

export default {
  getFormSignIn,
  signIn,
};
