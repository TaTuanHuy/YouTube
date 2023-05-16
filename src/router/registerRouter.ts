import express from 'express';
const router = express.Router();
import register from "../controller/registerController"

router.post('/', register.createUser)

router.get('/', register.getFormRegister)

export default router
