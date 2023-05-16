import dotenv from "dotenv";
dotenv.config();
import { connect } from "http2";
import mysql from "mysql2/promise";

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER1,
  password: process.env.PASSWORD1,
  database: process.env.DATABASES,
});

export default connection;