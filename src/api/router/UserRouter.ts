import express from "express";
const router = express.Router();
import profileUser from "../controller/UserController";
import checkAuth from "../middleware/checkAuth";

router.post("/create", profileUser.createUser);

router.post("/profile", checkAuth.checkAuth, profileUser.getProfileUser);

router.put("/update", checkAuth.checkAuth, profileUser.updateUser);

export default router;
