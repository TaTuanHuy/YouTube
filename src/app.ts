import express from "express";
import loader from "./loaders";

async function StartServer() {
  const app = express();
  loader({ expressApp: app });
}
StartServer();
