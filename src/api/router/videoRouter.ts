import express from "express";
const router = express.Router();
import VideoController from "../controller/VideoController";
import checkAuth from "../middleware/checkAuth";
import checkAuthVideo from "../middleware/checkAuthVideo";

router.delete(
  "/delete/:id",
  checkAuthVideo.checkAuthVideo,
  VideoController.deleteVideo
);
router.post("/upload", checkAuth.checkAuth, VideoController.uploadVideo);
router.put(
  "/update/:id",
  checkAuthVideo.checkAuthVideo,
  VideoController.updateVideo
);
router.post(
  "/myVideo/:id",
  checkAuthVideo.checkAuthVideo,
  VideoController.profileVideo
);
router.post("/myVideo", checkAuth.checkAuth, VideoController.myVideo);
export default router;
