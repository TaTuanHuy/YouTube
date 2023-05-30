import jwt from "../token/createToken";
import { IUserInputDTO } from "../interfaces/IUsers";
import { Container } from "typedi";
import config from "../config/config";
class AuthSignIn {
  contructor() {}

  public async login(reqBody: IUserInputDTO): Promise<string | void> {
    const conn = (await Container.get("connectMySql")) as any;
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

  public async SignUp(reqBody: IUserInputDTO): Promise<string | void> {}
}

export default new AuthSignIn();
