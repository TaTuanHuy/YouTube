"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    host: process.env.HOST,
    user: process.env.USER1,
    passWord: process.env.PASSWORD,
    database: process.env.DATABASE,
    tbUser: process.env.USER_TABLE,
    tbVideo: process.env.VIDEO_TABLE,
    port: process.env.PORT,
    privateKey: process.env.PRIVATE_KEY,
    algorithm: process.env.ALGORITHM,
};
