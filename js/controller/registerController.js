"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../models/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getFormRegister(req, res, next) {
    res.render("register");
}
async function createUser(req, res, next) {
    const conn = await db_1.default;
    const table = process.env.USER_TABLE;
    const { user_name, pass_word, full_name, user_id } = req.body;
    // const query = `INSERT INTO ${table} (user_name, pass_word, full_name, user_id)
    //                                  VALUES ('${user_name}', '${pass_word}', '${full_name}', '${user_id}');`;
    // await conn.execute(query);
    console.log(req.body);
    // res.redirect("http://localhost:3000");
}
exports.default = {
    getFormRegister,
    createUser,
};
