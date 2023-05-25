"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createToken_1 = __importDefault(require("../token/createToken"));
function getFormSignIn(req, res, next) {
    res.render("login");
}
async function signIn(req, res, next) {
    // const { user_name, password } = req.body;
    // const conn = await db;
    // const userTable = process.env.USER_TABLE;
    // const videoTable = process.env.VIDEO_TABLE;
    const token = createToken_1.default.createToken(req.body);
    res.json(token);
}
exports.default = {
    getFormSignIn,
    signIn,
};
