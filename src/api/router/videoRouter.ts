import express from "express";
const router = express.Router();
import VideoController from "../controller/VideoController";
import checkAuth from "../middleware/checkAuth";

router.delete("/delete/:id", checkAuth.checkAuth, VideoController.deleteVideo);
router.post("/upload", checkAuth.checkAuth, VideoController.uploadVideo);
router.put("/update/:id", checkAuth.checkAuth, VideoController.updateVideo);
router.post("/myVideo/:id", checkAuth.checkAuth, VideoController.profileVideo);
router.post("/myVideo", checkAuth.checkAuth, VideoController.myVideo);
export default router;
