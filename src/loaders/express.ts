import express from "express";
import config from "../config/config";
const app = express();
const port = config.port;
import router from "../api/router/mainRouter";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

export default ({ app }: { app: express.Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors());

  app.use(express.static("../src/public"));

  router(app);

  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });
};
