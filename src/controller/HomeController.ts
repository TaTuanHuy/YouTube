import { Request, Response, NextFunction } from "express";
import homeServices from "../services/homeServices";
import { IVideo } from "../interfaces/IVideo";

async function getListVideo(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<[IVideo] | void> {
  const listVideo = await homeServices.getAllVideo();
  res.json(listVideo);
}

async function profileVideo(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<[IVideo] | void> {
  const id = req.params.id;
  const profileVideo = await homeServices.getProfileVideo(id);
  res.json(profileVideo);
}

export default {
  getListVideo,
  profileVideo,
};
