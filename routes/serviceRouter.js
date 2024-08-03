import express from "express";
import ServiceCtrl from "../controllers/serviceCtrl.js";

const serviceRouter = express.Router();

serviceRouter.get("/:title", ServiceCtrl.getServiceByTitle); // Отримання одного запису за title
serviceRouter.get("/", ServiceCtrl.getAllServices); // Отримання всіх записів
serviceRouter.post("/", ServiceCtrl.createService); // Створення нового запису
serviceRouter.get("/:id", ServiceCtrl.getServiceById); // Отримання одного запису за ID
serviceRouter.put("/:id", ServiceCtrl.updateService); // Оновлення запису за ID
serviceRouter.delete("/:id", ServiceCtrl.deleteService); // Видалення запису за ID

export default serviceRouter;
