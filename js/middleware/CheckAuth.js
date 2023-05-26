"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createToken_1 = __importDefault(require("../token/createToken"));
function checkAuth(req, res, next) {
    const { token } = req.body;
    const result = createToken_1.default.verify(token);
    if (result == undefined) {
        console.log("Bạn chưa đăng nhập vào chúng tôi");
    }
    else {
        req.data = result;
        next();
    }
}
exports.default = checkAuth;
