import nodemailer from "nodemailer";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

const sendEmail = async (req, res) => {
  const { name, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: "Нова заявка на зворотний дзвінок",
    html: `
      <html>
        <body>
          <h2>Нова заявка на зворотний дзвінок</h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><em>Заявка була залишена: ${new Date().toLocaleString()}</em></p>
        </body>
      </html>
    `,
    text: `
      Нова заявка на зворотний дзвінок
  
      Ім'я: ${name}
      Телефон: ${phone}
  
      Заявка була залишена: ${new Date().toLocaleString()}
    `,
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
