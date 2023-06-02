import express from "express";
import expressLoader from "./express";
// import mySqlLoader from "./dependenciJector";
import mySqlLoader from "./connect";
import { Container, Service } from "typedi";
// import dependencyInjector from "./dependencyInjector";
import config from "../config/config";
import { CONNREFUSED } from "dns";

export default async ({ expressApp }: { expressApp: express.Application }) => {
  const mySqlConnect = await mySqlLoader;
  // Container.set("connectMySql", mySqlLoader);
  Container.set("connectMySql", mySqlLoader);
  Container.set("config", config);
  // const { agenda } = await dependencyInjector({
  //   mySqlLoader,
  // });
  await expressLoader({ app: expressApp });
};
