import nodeMailer from "nodemailer";
require("dotenv").config();

export const sendMail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { email, subject, data } = options;
  const mailOptions = {
    from: email,
    to: process.env.SMTP_MAIL,
    subject,
    text: data,
  };

  await transporter.sendMail(mailOptions);
};
