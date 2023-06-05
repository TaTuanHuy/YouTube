import jwt from "../token/createToken";
import { IUserInputDTO } from "../interfaces/IUsers";
import { Container, Service, Inject } from "typedi";
import config from "../config/config";
import connection from "../loaders/connect";
import "reflect-metadata";
class AuthSignIn {
  contructor() {}
  // const conn = Container.get("connectMySql") as any;
  // conn: Container.get("connectMySql") as any ;
  public async login(reqBody: IUserInputDTO): Promise<{} | void> {
    const conn = (await Container.get("connectMySql")) as any;
    // const conn = (await connection) as any;
    // // const conn = (await Container.get("agendaInstance")) as any;
    const { user_name, pass_word } = reqBody;
    if (user_name == undefined || pass_word == undefined) {
      console.log("Bạn đã nhập sai tài khoản hoặc mật khẩu vui lòng thử lại!");
    } else {
      const userTable = config.tbUser;
      const query = `SELECT * FROM ${userTable} WHERE user_name = '${user_name}' AND pass_word = '${pass_word}'`;
      const [rows, fields] = (await conn.execute(query)) as any;
      if (rows.length > 0) {
        const token = jwt.createToken(reqBody);
        return token;
      } else {
        console.log("Bạn đã đăng nhập sai");
      }
    }
  }
}

export default new AuthSignIn();
