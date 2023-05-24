import db from "../models/db";
import mysql from "mysql2";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

async function getListVideo(req: Request, res: Response, next: NextFunction) {
  const conn = await db;
  const query = `SELECT * FROM ${process.env.VIDEO_TABLE}`;
  const [rows, fields] = await conn.query(query);
  // res.render("home", { rows });
  res.json(rows);
}

async function profileVideo(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const conn = await db;
  const query = `SELECT * FROM ${process.env.VIDEO_TABLE} WHERE video_id = '${id}'`;
  const [rows, fields] = await conn.query(query);
  let result = Object.values(JSON.parse(JSON.stringify(rows)));
  res.send(result[0]);
}

export default {
  getListVideo,
  profileVideo,
};
