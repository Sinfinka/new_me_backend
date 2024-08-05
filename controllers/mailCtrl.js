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

  const options = {
    timeZone: "Europe/Kiev",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const date = new Date().toLocaleString("uk-UA", options);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: [process.env.GMAIL_USER, process.env.GMAIL_USER_RESERV],
    subject: "Нова заявка на зворотний дзвінок",
    html: `
      <html>
        <body>
          <h2>Нова заявка на зворотній дзвінок</h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><em>Заявка була залишена: ${date}</em></p>
        </body>
      </html>
    `,
    text: `
      Нова заявка на зворотний дзвінок

      Ім'я: ${name}
      Телефон: ${phone}

      Заявка була залишена: ${date}
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
