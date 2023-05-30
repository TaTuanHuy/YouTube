import express from "express";
const router = express.Router();
import loginController from "../controller/LoginController";

router.post("/", loginController.signIn);

export default router;
