"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const typedi_1 = require("typedi");
require("reflect-metadata");
class userService {
    contructor() { }
    async getProfileUser(user_name) {
        try {
            const conn = (await typedi_1.Container.get("connectMySql"));
            const query = `Select * from ${config_1.default.tbUser} where user_name ='${user_name}'`;
            const [rows, fields] = (await conn.execute(query));
            return rows[0];
        }
        catch (error) {
            return error;
        }
    }
    async createUser(reqBody) {
        try {
            {
                const { user_name, pass_word, full_name, user_id } = reqBody;
                const conn = (await typedi_1.Container.get("connectMySql"));
                const query = `INSERT INTO ${config_1.default.tbUser} (user_name, pass_word, full_name, user_id)
                                           VALUES ('${user_name}', '${pass_word}', '${full_name}', '${user_id}');`;
                await conn.execute(query);
                return "Success";
            }
        }
        catch (error) {
            return error;
        }
    }
    async updateUser(user, reqBody) {
        try {
            const { user_name, pass_word, full_name } = reqBody;
            const conn = (await typedi_1.Container.get("connectMySql"));
            const query = `UPDATE ${config_1.default.tbUser}
                        SET user_name = '${user_name}', pass_word = '${pass_word}', full_name = '${full_name}'
                        WHERE user_name = "${user}" `;
            await conn.execute(query);
            return "Update Success";
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = new userService();
