import homeRouter from "./homeRouter";

function router(app: any) {
  app.use("/", homeRouter);
}
export default router;
