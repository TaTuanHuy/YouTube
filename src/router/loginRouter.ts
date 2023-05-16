import express from 'express';
const router = express.Router();
import loginController from "../controller/loginController";

router.get('/', loginController.getFormSignIn)


export default router;