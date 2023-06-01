import express from "express";
const router = express.Router();
import VideoController from "../controller/VideoController";
import checkAuth from "../middleware/checkAuth";

router.put("/update/:id", checkAuth.checkAuth, VideoController.updateVideo);
router.post("/myVideo/:id", checkAuth.checkAuth, VideoController.profileVideo);
router.post("/myVideo", checkAuth.checkAuth, VideoController.myVideo);
export default router;
