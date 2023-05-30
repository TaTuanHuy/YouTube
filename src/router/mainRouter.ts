import homeRouter from "./homeRouter";
import loginRouter from "./loginRouter";
import profileUser from "./UserRouter";

function router(app: any) {
  app.use("/user", profileUser);
  app.use("/login", loginRouter);
  app.use("/", homeRouter);
}
export default router;
