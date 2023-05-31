"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userServices_1 = __importDefault(require("../../services/userServices"));
async function getProfileUser(req, res, next) {
    const { user_name } = req.data;
    const value = await userServices_1.default.getProfileUser(user_name);
    res.json(value);
}
async function createUser(req, res, next) {
    const reqBody = req.body;
    const result = await userServices_1.default.createUser(reqBody);
    res.json(result);
}
async function updateUser(req, res, next) {
    const { user_name } = req.data;
    const { token, ...data } = req.body;
    const result = await userServices_1.default.updateUser(user_name, data);
    res.json(result);
}
exports.default = { getProfileUser, createUser, updateUser };
