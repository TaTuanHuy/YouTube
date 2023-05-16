import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;
import router from "./router/mainRouter";
import { engine } from "express-handlebars";
import path from "path";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../src/views"));

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
