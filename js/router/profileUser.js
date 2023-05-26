"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const CheckAuth_1 = __importDefault(require("../middleware/CheckAuth"));
const profileUser_1 = __importDefault(require("../controller/profileUser"));
router.post("/", CheckAuth_1.default, profileUser_1.default.getProfileUser);
router.post("/update", CheckAuth_1.default, profileUser_1.default.getProfileUser);
exports.default = router;
