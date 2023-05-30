"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config/config"));
const app = (0, express_1.default)();
const port = config_1.default.port;
const mainRouter_1 = __importDefault(require("../api/router/mainRouter"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
exports.default = ({ app }) => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)());
    app.use(express_1.default.static("../src/public"));
    (0, mainRouter_1.default)(app);
    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`);
    });
};
