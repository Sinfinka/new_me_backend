import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone } = req.body;

    const transporter = nodemailer.createTransport({
      service: "meta",
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
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
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
