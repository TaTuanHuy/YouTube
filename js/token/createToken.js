"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
function createToken(data) {
    const privateKey = config_1.default.privateKey;
    const algorithm = config_1.default.algorithm;
    const token = jsonwebtoken_1.default.sign(data, privateKey, {
        expiresIn: 60 * 60,
        algorithm: "HS512",
    });
    const refressToken = jsonwebtoken_1.default.sign(data, privateKey, {
        expiresIn: 60 * 60 * 10,
        algorithm: "HS512",
    });
    return { token: token, refressToken: refressToken };
}
exports.default = {
    createToken,
};
