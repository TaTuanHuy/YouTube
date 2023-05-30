"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const HomeController_1 = __importDefault(require("../controller/HomeController"));
router.get("/:id", HomeController_1.default.profileVideo);
router.get("/", HomeController_1.default.getListVideo);
exports.default = router;
