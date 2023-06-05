import { Container } from "typedi";
import connection from "./connect";
import config from "../config/config";
export default async () => {
  try {
    const conn = await connection;
    Container.set("connectMySql", conn);
    Container.set("config", config);
  } catch (error) {
    throw error;
  }
};
