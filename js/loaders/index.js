"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
// import mySqlLoader from "./dependenciJector";
const connect_1 = __importDefault(require("./connect"));
const typedi_1 = require("typedi");
exports.default = async ({ expressApp }) => {
    const mySqlConnect = await connect_1.default;
    typedi_1.Container.set("connectMySql", connect_1.default);
    await (0, express_1.default)({ app: expressApp });
};
