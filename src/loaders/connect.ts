import config from "../config/config";
import mysql from "mysql2/promise";

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.passWord,
  database: config.database,
});
export default connection;
