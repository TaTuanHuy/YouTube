"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loaders_1 = __importDefault(require("./loaders"));
require("reflect-metadata");
async function StartServer() {
    const app = (0, express_1.default)();
    (0, loaders_1.default)({ expressApp: app });
}
StartServer();
