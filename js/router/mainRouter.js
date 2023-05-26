"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homeRouter_1 = __importDefault(require("./homeRouter"));
const loginRouter_1 = __importDefault(require("./loginRouter"));
const registerRouter_1 = __importDefault(require("./registerRouter"));
const profileUser_1 = __importDefault(require("./profileUser"));
function router(app) {
    app.use("/profileUser", profileUser_1.default);
    app.use("/register", registerRouter_1.default);
    app.use("/login", loginRouter_1.default);
    app.use("/", homeRouter_1.default);
}
exports.default = router;
