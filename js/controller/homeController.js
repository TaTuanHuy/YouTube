"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../models/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function getListVideo(req, res, next) {
    const conn = await db_1.default;
    const query = `SELECT * FROM ${process.env.VIDEOTABLE}`;
    const [rows, fields] = await conn.query(query);
    res.render("home", { rows });
}
async function profileVideo(req, res, next) {
    const id = req.params.id;
    const conn = await db_1.default;
    const query = `SELECT * FROM ${process.env.VIDEOTABLE} WHERE video_id = '${id}'`;
    const [rows, fields] = await conn.query(query);
    res.render("profileVideo", { rows });
}
exports.default = {
    getListVideo,
    profileVideo,
};