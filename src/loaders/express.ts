import express from "express";
import config from "../config/config";
const app = express();
const port = config.port;
import router from "../api/router/mainRouter";
import cookieParser from "cookie-parser";
import cors from "cors";
// import fetch from "node-fetch";
// import redis from "redis";
import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

export default async ({ app }: { app: express.Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors());
  app.use(express.static("../src/public"));

  let redisClient: RedisClientType;

  (async () => {
    redisClient = createClient({
      // url: "redis://alice:foobared@awesome.redis.server:6380",
      socket: {
        host: "127.0.0.1",
        port: 6379,
      },
    });

    redisClient.on("error", (error) => console.error(`Error : ${error}`));

    redisClient.on("connect", () => {
      console.log("Connected!");
    });

    await redisClient.connect();
  })();

  //Getdata to set cache
  async function getData() {
    const result = await axios.get(`http://localhost:8000`);
    console.log(result.data);
    return result.data;
  }

  async function getSpeciesData(req: Request, res: Response) {
    let isCached = false;
    let results;
    try {
      const cacheResults = await redisClient.get("test");
      if (cacheResults) {
        isCached = true;
        results = JSON.parse(cacheResults);
      } else {
        results = await getData();
        if (results.length === 0) {
          throw "API returned an empty array";
        }
        await redisClient.set("test", JSON.stringify(results));
      }
      return res.json(results.length);
    } catch (error) {
      console.error(error);
    }
  }

  app.get("/testRedis", getSpeciesData);

  router(app);
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });
};
