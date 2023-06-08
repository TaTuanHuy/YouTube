import express from "express";
import expressLoader from "./express";
import dependencyInjector from "./dependencyInjector";

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await dependencyInjector();
  await expressLoader({ app: expressApp });
};
