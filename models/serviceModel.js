import { Schema, model } from "mongoose";

const linkSchema = new Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  href: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const serviceSchema = new Schema(
  {
    title: { type: String, required: false },
    link: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    details: { type: String, required: true },
    afterWords: { type: String, required: true },
    links: [linkSchema],
  },
  { versionKey: false, timestamps: true }
);

export default model("Service", serviceSchema);
