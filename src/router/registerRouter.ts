import express from 'express';
const router = express.Router();
import register from "../controller/registerController"

router.get('/', register.getFormRegister)

export default router
