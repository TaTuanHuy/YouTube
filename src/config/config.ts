import dotenv from "dotenv";
dotenv.config();
export default {
  host: process.env.HOST,
  user: process.env.USER1,
  passWord: process.env.PASSWORD,
  database: process.env.DATABASE,
  tbUser: process.env.USER_TABLE,
  tbVideo: process.env.VIDEO_TABLE,
  port: process.env.PORT,

  privateKey: process.env.PRIVATE_KEY,
  algorithm: process.env.ALGORITHM,
};
