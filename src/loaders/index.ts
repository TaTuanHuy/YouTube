import express from "express";
import expressLoader from "./express";
// import mySqlLoader from "./dependenciJector";
import mySqlLoader from "./connect";
import { Container, Service } from "typedi";

export default async ({ expressApp }: { expressApp: express.Application }) => {
  const mySqlConnect = await mySqlLoader;
  Container.set("connectMySql", mySqlLoader);
  await expressLoader({ app: expressApp });
};
