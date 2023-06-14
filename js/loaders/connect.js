"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const promise_1 = __importDefault(require("mysql2/promise"));
const connection = promise_1.default.createConnection({
    host: config_1.default.host,
    user: config_1.default.user,
    password: config_1.default.passWord,
    database: config_1.default.database,
});
exports.default = connection;
