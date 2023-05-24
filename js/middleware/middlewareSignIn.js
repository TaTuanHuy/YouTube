"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../models/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function checkSignIn(req, res, next) {
    const conn = await db_1.default;
    const { user_name, pass_word } = req.body;
    console.log(req.body);
    const userTable = process.env.USER_TABLE;
    const query = `SELECT * FROM ${userTable} WHERE user_name = '${user_name}' AND pass_word = '${pass_word}'`;
    const [rows, fields] = (await conn.execute(query));
    if (rows.length > 0) {
        next();
    }
    else {
        res.send("Bạn đã nhập sai tài khoản hoặc mật khẩu vui lòng thử lại!");
    }
}
exports.default = {
    checkSignIn,
};
