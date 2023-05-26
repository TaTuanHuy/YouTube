import homeRouter from "./homeRouter";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouter";
import profileUser from "./profileUser";

function router(app: any) {
  app.use("/profileUser", profileUser);
  app.use("/register", registerRouter);
  app.use("/login", loginRouter);
  app.use("/", homeRouter);
}
export default router;
