"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function checkAuth(req, res, next) {
    const { token } = req.body;
    try {
        var decoded = jsonwebtoken_1.default.verify(token, "HS256");
        req.data = decoded;
        next();
    }
    catch (err) {
        console.log("Bạn chưa đăng nhập");
    }
}
exports.default = { checkAuth };
