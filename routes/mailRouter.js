import express from "express";
import mailCtrl from "../controllers/mailCtrl.js";

const mailRouter = express.Router();

mailRouter.post("/", mailCtrl.sendEmail); // Відправка листа

export default mailRouter;
