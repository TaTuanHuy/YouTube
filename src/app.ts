import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
import router from "./router/mainRouter";
import { engine } from "express-handlebars";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../src/views"));
app.use(express.static("../src/public"));

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
