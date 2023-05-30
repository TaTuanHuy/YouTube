import express from "express";
const router = express.Router();
import homeController from "../controller/HomeController";

router.get("/:id", homeController.profileVideo);

router.get("/", homeController.getListVideo);

export default router;
