"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function checkAuth(req, res, next) {
    try {
        const { token } = req.body;
        if (token) {
            try {
                var decoded = jsonwebtoken_1.default.verify(token, "HS256");
                req.data = decoded;
                next();
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
exports.default = { checkAuth };
