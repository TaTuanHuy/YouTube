import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
async function checkAuth(req: any, res: Response, next: NextFunction) {
  try {
    const { token } = req.body;
    if (token) {
      try {
        var decoded = jwt.verify(token, "HS256");
        req.data = decoded;
        next();
      } catch (error) {
        throw error;
      }
    } else {
      res.status(403).send("No token provided");
    }
  } catch (error) {
    throw error;
  }
}

export default { checkAuth };
