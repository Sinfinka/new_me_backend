import express from "express";
import serviceRouter from "./routes/serviceRouter.js";
import pricesRouter from "./routes/pricesRouter.js";
import HttpError from "./helpers/httpError.js";
import mailRouter from "./routes/mailRouter.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/services", serviceRouter);
app.use("/sendEmail", mailRouter);
app.use("/prices", pricesRouter);

app.use((req, res, next) => {
  next(HttpError(404, "Route not found"));
});

export default app;
