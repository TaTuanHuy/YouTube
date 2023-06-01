import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { StringifyOptions } from "querystring";
async function checkAuth(req: any, res: Response, next: NextFunction) {
  const { token } = req.body;
  if (token) {
    try {
      var decoded = jwt.verify(token, "HS256");
      req.data = decoded;
      next();
    } catch (error) {
      return error;
    }
  } else {
    res.status(403).send("No token provided");
  }
}

export default { checkAuth };
