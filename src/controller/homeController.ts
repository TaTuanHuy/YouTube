import db from "../models/db";
import mysql from "mysql2";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

async function getListVideo(req: Request, res: Response, next: NextFunction) {
  const conn = await db;
  const query = `SELECT * FROM ${process.env.VIDEOTABLE}`;
  const [rows, fields] = await conn.query(query);
  res.render("home", { rows });
}

async function profileVideo(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const conn = await db;
  const query = `SELECT * FROM ${process.env.VIDEOTABLE} WHERE video_id = '${id}'`;
  const [rows, fields] = await conn.query(query);
  res.render("profileVideo", { rows });
}

export default {
  getListVideo,
  profileVideo,
};
