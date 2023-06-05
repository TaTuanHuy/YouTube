"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
require("reflect-metadata");
class Home {
    contructor() { }
    async getAllVideo() {
        try {
            const conn = (await typedi_1.Container.get("connectMySql"));
            const query = `SELECT * FROM ${process.env.VIDEO_TABLE}`;
            const [rows, fields] = await conn.execute(query);
            return [rows];
        }
        catch (error) {
            throw error;
        }
    }
    async getProfileVideo(reqParams) {
        try {
            const id = reqParams;
            const conn = (await typedi_1.Container.get("connectMySql"));
            const query = `SELECT * FROM ${process.env.VIDEO_TABLE} WHERE video_id = '${id}'`;
            const [rows, fields] = await conn.execute(query);
            let result = Object.values(JSON.parse(JSON.stringify(rows)));
            return result;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new Home();
