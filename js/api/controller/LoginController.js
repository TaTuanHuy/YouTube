"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginServices_1 = __importDefault(require("../../services/loginServices"));
async function signIn(req, res, next) {
    const userDTO = req.body;
    const token = await loginServices_1.default.login(userDTO);
    res.json(token);
}
exports.default = {
    signIn,
};
