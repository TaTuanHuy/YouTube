import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import config from "../../config/config";
async function checkAuthVideo(req: any, res: Response, next: NextFunction) {
  try {
    const { token } = req.body;
    if (token) {
      try {
        var decoded = jwt.verify(token, "HS256");
        req.data = decoded;
        const { user_name } = req.data;
        const conn = (await Container.get("connectMySql")) as any;
        const query = `Select * from ${config.tbUser} inner join ${config.tbVideo} on ${config.tbUser}.user_id = ${config.tbVideo}.author_video where ${config.tbUser}.user_name = "${user_name}" and ${config.tbVideo}.video_id="${req.params.id}"`;
        const [rows, fields] = (await conn.execute(query)) as any;
        if (rows.length > 0) {
          next();
        } else {
          res.json("Bạn kh có quyền chỉnh sửa mục này hoặc VideoId đã sai");
        }
      } catch (error) {
        return error;
      }
    } else {
      res.status(403).send("No token provided");
    }
  } catch (error) {
    throw error;
  }
}
export default {
  checkAuthVideo,
};
