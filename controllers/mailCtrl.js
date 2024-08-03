import nodemailer from "nodemailer";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

const sendEmail = async (req, res) => {
  const { name, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "inadaradar@gmail.com",
    subject: "Нова заявка на зворотний дзвінок",
    text: `Ім'я: ${name}\nТелефон: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
};

export default {
  sendEmail: ctrlWrapper(sendEmail),
};
