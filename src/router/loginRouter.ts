import express from "express";
const router = express.Router();
import loginController from "../controller/loginController";
import middleWareSignIn from "../middleware/middlewareSignIn";

router.post("/", middleWareSignIn.checkSignIn, loginController.signIn);

router.get("/", loginController.getFormSignIn);

export default router;
