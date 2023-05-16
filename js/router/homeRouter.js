"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const homeController_1 = __importDefault(require("../controller/homeController"));
router.get("/:id", homeController_1.default.profileVideo);
router.get("/", homeController_1.default.getListVideo);
exports.default = router;
