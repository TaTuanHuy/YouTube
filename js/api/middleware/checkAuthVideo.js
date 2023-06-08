"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../config/config"));
async function checkAuthVideo(req, res, next) {
    try {
        const { token } = req.body;
        if (token) {
            try {
                var decoded = jsonwebtoken_1.default.verify(token, "HS256");
                req.data = decoded;
                const { user_name } = req.data;
                const conn = (await typedi_1.Container.get("connectMySql"));
                const query = `Select * from ${config_1.default.tbUser} inner join ${config_1.default.tbVideo} on ${config_1.default.tbUser}.user_id = ${config_1.default.tbVideo}.author_video where ${config_1.default.tbUser}.user_name = "${user_name}" and ${config_1.default.tbVideo}.video_id="${req.params.id}"`;
                const [rows, fields] = (await conn.execute(query));
                if (rows.length > 0) {
                    next();
                    console.log(rows);
                }
                else {
                    res.json("Bạn kh có quyền chỉnh sửa mục này");
                }
            }
            catch (error) {
                return error;
            }
        }
        else {
            res.status(403).send("No token provided");
        }
    }
    catch (error) {
        throw error;
    }
}
exports.default = {
    checkAuthVideo,
};
