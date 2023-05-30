"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createToken(data) {
    const token = jsonwebtoken_1.default.sign(data, "HS256", {
        expiresIn: 60 * 60 * 24,
        algorithm: "HS512",
    });
    const refressToken = jsonwebtoken_1.default.sign(data, "HS256", {
        expiresIn: "10d",
        algorithm: "HS512",
    });
    return token;
}
function verify(token) {
    const data = undefined;
    const result = jsonwebtoken_1.default.verify(token, "HS256", (err, decoded) => {
        if (err) {
            return data;
        }
        return decoded;
    });
    return result;
}
exports.default = {
    createToken,
};
