"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const videoServices_1 = __importDefault(require("../../services/videoServices"));
async function myVideo(req, res) {
    const { user_name } = req.data;
    const result = await videoServices_1.default.GetListVideo(user_name);
    res.json(result);
}
async function profileVideo(req, res) {
    const { user_name } = req.data;
    const videoId = req.params.id;
    const result = await videoServices_1.default.GetProfileVideo(user_name, videoId);
    res.json(result);
}
async function updateVideo(req, res) {
    const videoId = req.params.id;
    const { token, ...data } = req.body;
    const result = await videoServices_1.default.updateVideo(videoId, req.body);
    res.json(result);
}
exports.default = {
    myVideo,
    profileVideo,
    updateVideo,
};
