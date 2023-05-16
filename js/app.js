"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
const mainRouter_1 = __importDefault(require("./router/mainRouter"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.engine("handlebars", (0, express_handlebars_1.engine)());
app.set("view engine", "handlebars");
app.set("views", path_1.default.join(__dirname, "../src/views"));
app.use(express_1.default.static('../src/public'));
(0, mainRouter_1.default)(app);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
