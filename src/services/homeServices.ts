import { Container } from "typedi";
import "reflect-metadata";
import { IVideo } from "../interfaces/IVideo";
class Home {
  contructor() {}
  async getAllVideo(): Promise<IVideo[]> {
    try {
      const conn = (await Container.get("connectMySql")) as any;
      const query = `SELECT * FROM ${process.env.VIDEO_TABLE}`;
      const [rows, fields] = await conn.execute(query);
      return [rows];
    } catch (error) {
      throw error;
    }
  }
  async getProfileVideo(reqParams: string) {
    try {
      const id = reqParams;
      const conn = (await Container.get("connectMySql")) as any;
      const query = `SELECT * FROM ${process.env.VIDEO_TABLE} WHERE video_id = '${id}'`;
      const [rows, fields] = await conn.execute(query);
      let result = Object.values(JSON.parse(JSON.stringify(rows)));
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default new Home();
