import { Request, Response, NextFunction } from "express";
import myVideoService from "../../services/videoServices";
import { IVideo } from "../../interfaces/IVideo";
async function myVideo(req: Request | any, res: Response) {
  const { user_name } = req.data;
  const result = await myVideoService.GetListVideo(user_name);
  res.json(result);
}

async function profileVideo(req: Request | any, res: Response) {
  const { user_name } = req.data;
  const videoId = req.params.id;
  const result = await myVideoService.GetProfileVideo(user_name, videoId);
  res.json(result);
}

async function updateVideo(req: Request | any, res: Response) {
  const videoId: string = req.params.id;
  const result = await myVideoService.updateVideo(videoId, req.body);
  res.json(result);
}

async function uploadVideo(req: Request | any, res: Response) {
  const { token, ...data } = req.body;
  const result = await myVideoService.uploadVideo(data);
  res.json(result);
}

async function deleteVideo(req: Request | any, res: Response) {
  const videoId = req.params.id;
  const result = await myVideoService.deleteVideo(videoId);
  res.json(result);
}

export default {
  myVideo,
  profileVideo,
  updateVideo,
  uploadVideo,
  deleteVideo,
};
