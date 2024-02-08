import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {

  const { messageBody } = req.body;

  // dados do e-mail para serem enviados
  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
  });

  try {
    const message = await client.sendAsync({
      text: messageBody,
      from: 'felipestudent2024@gmail.com',
      to: 'felipestudent2024@gmail.com',
      subject: 'Lead - Landingpage',
    });
    console.log(message);
  } catch (err) {
    console.error(err);
  }

  res.status(200).json({ message: "send mail" });
}