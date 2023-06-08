import config from "../config/config";
import { Container } from "typedi";
import { IUserInputUpdate } from "../interfaces/IUsers";
import "reflect-metadata";
class userService {
  contructor() {}
  async getProfileUser(user_name: string): Promise<IUserInputUpdate | any> {
    try {
      const conn = (await Container.get("connectMySql")) as any;
      const query = `Select * from ${config.tbUser} where user_name ='${user_name}'`;
      const [rows, fields] = (await conn.execute(query)) as any;
      return rows[0];
    } catch (error) {
      return error;
    }
  }

  async createUser(reqBody: IUserInputUpdate) {
    try {
      {
        const { user_name, pass_word, full_name, user_id } = reqBody;
        const conn = (await Container.get("connectMySql")) as any;
        const query = `INSERT INTO ${config.tbUser} (user_name, pass_word, full_name, user_id)
                                           VALUES ('${user_name}', '${pass_word}', '${full_name}', '${user_id}');`;
        await conn.execute(query);
        return "Success";
      }
    } catch (error) {
      return error;
    }
  }

  async updateUser(user: string, reqBody: IUserInputUpdate) {
    try {
      const { user_name, pass_word, full_name } = reqBody;
      const conn = (await Container.get("connectMySql")) as any;
      const query = `UPDATE ${config.tbUser}
                        SET user_name = '${user_name}', pass_word = '${pass_word}', full_name = '${full_name}'
                        WHERE user_name = "${user}" `;
      await conn.execute(query);
      return "Update Success";
    } catch (error) {
      return error;
    }
  }
}

export default new userService();
