import express from "express";
const router = express.Router();
import checkAuth from "../middleware/CheckAuth";
import profileUser from "../controller/profileUser";

router.post("/", checkAuth, profileUser.getProfileUser);

router.post("/update", checkAuth, profileUser.getProfileUser);

export default router;
