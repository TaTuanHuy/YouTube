import { Container } from "typedi";
import "reflect-metadata";
class Home {
  contructor() {}
  async getAllVideo() {
    const conn = (await Container.get("connectMySql")) as any;
    const query = `SELECT * FROM ${process.env.VIDEO_TABLE}`;
    const [rows, fields] = await conn.execute(query);
    return [rows];
  }
  async getProfileVideo(reqParams: string) {
    const id = reqParams;
    const conn = (await Container.get("connectMySql")) as any;
    const query = `SELECT * FROM ${process.env.VIDEO_TABLE} WHERE video_id = '${id}'`;
    const [rows, fields] = await conn.execute(query);
    let result = Object.values(JSON.parse(JSON.stringify(rows)));
    return result;
  }
}

export default new Home();
