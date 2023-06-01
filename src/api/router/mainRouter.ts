import homeRouter from "./homeRouter";
import loginRouter from "./loginRouter";
import profileUser from "./UserRouter";
import videoRouter from "./videoRouter";

function router(app: any) {
  app.use("/video", videoRouter);
  app.use("/user", profileUser);
  app.use("/login", loginRouter);
  app.use("/", homeRouter);
}
export default router;
