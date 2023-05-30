import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
async function checkAuth(req: any, res: Response, next: NextFunction) {
  const { token } = req.body;
  try {
    var decoded = jwt.verify(token, "HS256");
    req.data = decoded;
    next();
  } catch (err) {
    console.log("Bạn chưa đăng nhập");
  }
}

export default { checkAuth };
