import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Debug logging (check if env vars are loaded)
console.log('Checking configuration...');
if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
  console.error('CRITICAL ERROR: GMAIL_USER or GMAIL_PASS is missing in .env!');
} else {
  console.log('Credentials loaded for:', process.env.GMAIL_USER);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Basic health check
app.get('/', (req, res) => {
  res.send('Nodemailer server is running. Use POST /api/send to send emails.');
});

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields.' });
  }

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: ` Portfolio Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #111; color: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #333;">
        <div style="background: linear-gradient(135deg, #e85d04 0%, #f48c06 100%); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">NEW PORTFOLIO MESSAGE</h1>
        </div>
        <div style="padding: 40px; line-height: 1.6;">
          <div style="margin-bottom: 30px;">
            <p style="color: #888; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-bottom: 5px;">From</p>
            <h2 style="margin: 0; font-size: 20px; color: #fff;">${name}</h2>
            <p style="margin: 0; color: #e85d04;">${email}</p>
          </div>
          <div style="background-color: #1a1a1a; padding: 25px; border-radius: 12px; border-left: 4px solid #e85d04;">
            <p style="color: #888; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-bottom: 10px;">Message</p>
            <p style="margin: 0; color: #ddd; font-style: italic;">"${message}"</p>
          </div>
          <div style="margin-top: 40px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; padding: 14px 30px; background-color: #e85d04; color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Reply to ${name}</a>
          </div>
        </div>
        <div style="background-color: #0c0c0c; padding: 20px; text-align: center; color: #555; font-size: 12px; border-top: 1px solid #222;">
          Sent from your React Portfolio Contact Form
        </div>
      </div>
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 'success', message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
