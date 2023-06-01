"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../config/config"));
class VideoService {
    contructor() { }
    async GetListVideo(user_name) {
        try {
            const conn = (await typedi_1.Container.get("connectMySql"));
            const query = `Select video_name, full_name, video_id, video_description from ${config_1.default.tbUser} inner join ${config_1.default.tbVideo} on ${config_1.default.tbUser}.user_id = ${config_1.default.tbVideo}.author_video where user_name = '${user_name}'`;
            const [rows, fields] = (await conn.execute(query));
            if (rows.length > 0) {
                return rows;
            }
            else {
                return "Bạn chưa đăng Video nào";
            }
        }
        catch (error) {
            return error;
        }
    }
    async GetProfileVideo(user_name, videoId) {
        const conn = (await typedi_1.Container.get("connectMySql"));
        const query = `SELECT video_name, full_name, video_id, video_description from ${config_1.default.tbUser} inner join ${config_1.default.tbVideo} on ${config_1.default.tbUser}.user_id = ${config_1.default.tbVideo}.author_video where user_name = '${user_name}' and video_id = "${videoId}";`;
        const [rows, fields] = (await conn.execute(query));
        if (rows.length > 0) {
            return rows;
        }
        else {
            return "Bạn kh có quyền truy cập";
        }
    }
    async updateVideo(videoId, reqBody) {
        try {
            const conn = (await typedi_1.Container.get("connectMySql"));
            const { video_name, video_id, video_description, author_video } = reqBody;
            const query = `update ${config_1.default.tbVideo} set video_name = '${video_name}', video_id="${video_id}", video_description="${video_description}", author_video="${author_video}" where video_id = "${videoId}"`;
            await conn.execute(query);
            return "Success";
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = new VideoService();
