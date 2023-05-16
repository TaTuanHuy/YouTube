"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const loginController_1 = __importDefault(require("../controller/loginController"));
router.get('/', loginController_1.default.getFormSignIn);
exports.default = router;
