import express from "express";
import serviceRouter from "./routes/serviceRouter.js";
import HttpError from "./helpers/httpError.js";
import mailRouter from "./routes/mailRouter.js";

const app = express();
app.use(express.json());
app.use("/services", serviceRouter);
app.use("/sendEmail", mailRouter);

app.use((req, res, next) => {
  next(HttpError(404, "Route not found"));
});

export default app;
