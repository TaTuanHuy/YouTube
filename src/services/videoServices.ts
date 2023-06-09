import { Container, Service } from "typedi";
import config from "../config/config";
import { IVideo } from "../interfaces/IVideo";
import "reflect-metadata";
class VideoService {
  contructor() {}
  async GetListVideo(user_name: string): Promise<IVideo[] | string | any> {
    try {
      const conn = (await Container.get("connectMySql")) as any;
      const query = `Select video_name, full_name, video_id, video_description from ${config.tbUser} inner join ${config.tbVideo} on ${config.tbUser}.user_id = ${config.tbVideo}.author_video where user_name = '${user_name}'`;
      const [rows, fields] = (await conn.execute(query)) as any;
      if (rows.length > 0) {
        return rows;
      } else {
        return "Bạn chưa đăng Video nào";
      }
    } catch (error) {
      return error;
    }
  }

  async GetProfileVideo(
    user_name: string,
    videoId: string
  ): Promise<IVideo | string | any> {
    try {
      const conn = (await Container.get("connectMySql")) as any;
      const query = `SELECT video_name, full_name, video_id, video_description 
                      from ${config.tbUser} 
                      inner join ${config.tbVideo} on ${config.tbUser}.user_id = ${config.tbVideo}.author_video 
                      where user_name = '${user_name}' and video_id = "${videoId}";`;
      const [rows, fields] = (await conn.execute(query)) as any;

      if (rows.length > 0) {
        return rows[0];
      } else {
        return "Bạn không có quyền truy cập";
      }
    } catch (error) {
      return error;
    }
  }

  async updateVideo(videoId: string, reqBody: IVideo): Promise<string | any> {
    try {
      const conn = (await Container.get("connectMySql")) as any;
      const { video_name, video_id, video_description, author_video } = reqBody;
      const query = `update ${config.tbVideo} 
                      set video_name = '${video_name}', video_id="${video_id}", video_description="${video_description}", author_video="${author_video}" 
                      where video_id = "${videoId}"`;
      await conn.execute(query);
      return "Success";
    } catch (error) {
      return error;
    }
  }

  async uploadVideo(reqBody: IVideo): Promise<string | any> {
    try {
      const conn = (await Container.get("connectMySql")) as any;
      const { video_name, video_id, video_description, author_video } = reqBody;
      const query = `INSERT INTO ${config.tbVideo} (video_name, video_id, video_description, author_video) 
                      VALUES ('${video_name}', '${video_id}', '${video_description}', '${author_video}')`;
      await conn.execute(query);
      return "Success";
    } catch (error) {
      return error;
    }
  }

  async deleteVideo(video_id: string): Promise<string | any> {
    try {
      const conn = (await Container.get("connectMySql")) as any;
      const query = `DELETE FROM ${config.tbVideo} WHERE video_id= '${video_id}'`;
      await conn.execute(query);
      return "Success";
    } catch (error) {
      return error;
    }
  }
}
export default new VideoService();
