"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const connect_1 = __importDefault(require("./connect"));
const config_1 = __importDefault(require("../config/config"));
exports.default = async () => {
    try {
        const conn = await connect_1.default;
        typedi_1.Container.set("connectMySql", conn);
        typedi_1.Container.set("config", config_1.default);
    }
    catch (error) {
        throw error;
    }
};
