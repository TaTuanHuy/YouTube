"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../models/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function getProfileUser(req, res, next) {
    const data = req.data;
    const conn = await db_1.default;
    const query = `Select * from ${process.env.USER_TABLE} where user_name ='${data.user_name}'`;
    const [rows, fields] = (await conn.execute(query));
    res.json(rows[0]);
}
exports.default = { getProfileUser };
