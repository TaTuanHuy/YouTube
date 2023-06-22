"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginServices_1 = __importDefault(require("../../services/loginServices"));
async function signIn(req, res) {
    const userDTO = req.body;
    // const tokenHeader = req.headers.token as string;
    // if (!(tokenHeader === "")) {
    //   var decoded = jwt.verify(tokenHeader, "HS256");
    //   console.log(decoded);
    // }
    const token = await loginServices_1.default.login(userDTO);
    res.json(token);
}
exports.default = {
    signIn,
};
