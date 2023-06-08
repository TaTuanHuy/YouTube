"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const VideoController_1 = __importDefault(require("../controller/VideoController"));
const checkAuth_1 = __importDefault(require("../middleware/checkAuth"));
const checkAuthVideo_1 = __importDefault(require("../middleware/checkAuthVideo"));
router.delete("/delete/:id", checkAuthVideo_1.default.checkAuthVideo, VideoController_1.default.deleteVideo);
router.post("/upload", checkAuth_1.default.checkAuth, VideoController_1.default.uploadVideo);
router.put("/update/:id", checkAuthVideo_1.default.checkAuthVideo, VideoController_1.default.updateVideo);
router.post("/myVideo/:id", checkAuthVideo_1.default.checkAuthVideo, VideoController_1.default.profileVideo);
router.post("/myVideo", checkAuth_1.default.checkAuth, VideoController_1.default.myVideo);
exports.default = router;
