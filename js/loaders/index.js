"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
exports.default = async ({ expressApp }) => {
    // const mySqlConnect = mySqlLoader;
    await (0, dependencyInjector_1.default)();
    await (0, express_1.default)({ app: expressApp });
};
