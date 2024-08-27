import express from "express";
import PriceCtrl from "../controllers/priceCtrl.js";

const priceRouter = express.Router();

// serviceRouter.get("/:title", PriceCtrl.getServiceByTitle); // Отримання одного запису за title
priceRouter.get("/", PriceCtrl.getAllPrices); // Отримання всіх записів
priceRouter.post("/", PriceCtrl.createPrice); // Створення нового запису
// serviceRouter.get("/:id", ServiceCtrl.getServiceById); // Отримання одного запису за ID
// serviceRouter.put("/:id", ServiceCtrl.updateService); // Оновлення запису за ID
// serviceRouter.delete("/:id", ServiceCtrl.deleteService); // Видалення запису за ID

export default priceRouter;
