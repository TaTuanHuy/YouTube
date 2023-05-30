"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const UserController_1 = __importDefault(require("../controller/UserController"));
const checkAuth_1 = __importDefault(require("../middleware/checkAuth"));
router.post("/create", UserController_1.default.createUser);
router.post("/profile", checkAuth_1.default.checkAuth, UserController_1.default.getProfileUser);
router.put("/update", checkAuth_1.default.checkAuth, UserController_1.default.updateUser);
exports.default = router;
