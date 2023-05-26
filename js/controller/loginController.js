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
    const token = createToken_1.default.createToken(req.body);
    res.json(token);
}
exports.default = {
    getFormSignIn,
    signIn,
};
