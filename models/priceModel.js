import { Schema, model } from "mongoose";

// Схема для окремої послуги
const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

// Схема для запису з категорією послуг
const categorySchema = new Schema({
  title: {
    type: String, // Наприклад, "bariatricSurgery"
    required: true,
  },
  services: {
    type: [serviceSchema], // Масив послуг у цій категорії
    required: true,
  },
});

export default model("Price", categorySchema);
