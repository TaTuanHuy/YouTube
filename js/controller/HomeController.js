"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homeServices_1 = __importDefault(require("../services/homeServices"));
async function getListVideo(req, res, next) {
    const listVideo = await homeServices_1.default.getAllVideo();
    res.json(listVideo);
}
async function profileVideo(req, res, next) {
    const id = req.params.id;
    const profileVideo = await homeServices_1.default.getProfileVideo(id);
    res.json(profileVideo);
}
exports.default = {
    getListVideo,
    profileVideo,
};
