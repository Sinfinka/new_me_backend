import ctrlWrapper from "../helpers/ctrlWrapper.js";
import Service from "../models/serviceModel.js";

// Отримання всіх записів
const getAllServices = async (req, res) => {
  const services = await Service.find();
  res.status(200).json(services);
};

// Створення нового запису
const createService = async (req, res) => {
  const newService = new Service(req.body);
  const savedService = await newService.save();
  res.status(201).json(savedService);
};

// Отримання одного запису за ID
export const getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);
  console.log(service);

  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }
  res.status(200).json(service);
};

// Отримання одного запису за title
export const getServiceByTitle = async (req, res) => {
  try {
    const service = await Service.findOne({ title: req.params.title });
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Оновлення запису за ID
export const updateService = async (req, res) => {
  const updatedService = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!updatedService) {
    return res.status(404).json({ message: "Service not found" });
  }
  res.status(200).json(updatedService);
};

// Видалення запису за ID
export const deleteService = async (req, res) => {
  const deletedService = await Service.findByIdAndDelete(req.params.id);
  if (!deletedService) {
    return res.status(404).json({ message: "Service not found" });
  }
  res.status(200).json({ message: "Service deleted" });
};

export default {
  getAllServices: ctrlWrapper(getAllServices),
  createService: ctrlWrapper(createService),
  getServiceById: ctrlWrapper(getServiceById),
  getServiceByTitle: ctrlWrapper(getServiceByTitle),
  updateService: ctrlWrapper(updateService),
  deleteService: ctrlWrapper(deleteService),
};
