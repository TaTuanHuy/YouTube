import { Response, Request, NextFunction } from "express";
import Token from "../token/createToken";

function checkAuth(req: any, res: Response, next: NextFunction) {
  const { token } = req.body;
  const result = Token.verify(token);
  if (result == undefined) {
    console.log("Bạn chưa đăng nhập vào chúng tôi");
  } else {
    req.data = result;
    
    next();
  }
}

export default checkAuth;
