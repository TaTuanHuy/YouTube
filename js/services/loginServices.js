"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createToken_1 = __importDefault(require("../token/createToken"));
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../config/config"));
require("reflect-metadata");
class AuthSignIn {
    contructor() { }
    async login(reqBody) {
        const conn = (await typedi_1.Container.get("connectMySql"));
        const { user_name, pass_word } = reqBody;
        if (user_name == undefined || pass_word == undefined) {
            console.log("Bạn đã nhập sai tài khoản hoặc mật khẩu vui lòng thử lại!");
        }
        else {
            const userTable = config_1.default.tbUser;
            const query = `SELECT * FROM ${userTable} WHERE user_name = '${user_name}' AND pass_word = '${pass_word}'`;
            const [rows, fields] = (await conn.execute(query));
            if (rows.length > 0) {
                const token = createToken_1.default.createToken(reqBody);
                return token;
            }
            else {
                console.log("Bạn đã đăng nhập sai");
            }
        }
    }
}
exports.default = new AuthSignIn();
