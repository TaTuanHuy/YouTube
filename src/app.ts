import express from "express";
import loader from "./loaders";

import request from "supertest";
import "reflect-metadata";

async function StartServer() {
  const app = express();
  loader({ expressApp: app });
}
StartServer();
