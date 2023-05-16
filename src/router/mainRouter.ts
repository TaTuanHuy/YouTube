import homeRouter from "./homeRouter";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouter";

function router(app: any) {
  app.use("/register", registerRouter)
  app.use("/login", loginRouter);
  app.use("/", homeRouter);
}
export default router;
