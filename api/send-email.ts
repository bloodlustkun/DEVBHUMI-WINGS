import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Configure your email service (Gmail, SendGrid, etc.)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
  },
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { to, subject, message, replyTo } = req.body;

    // Validate input
    if (!to || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: message,
      replyTo: replyTo || process.env.EMAIL_USER,
    };

    const info = await transporter.sendMail(mailOptions);

    // Also send confirmation email to user
    if (replyTo) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: replyTo,
        subject: 'We received your message - Devbhoomi',
        html: `
          <h2>Thank You for Contacting Devbhoomi</h2>
          <p>We have received your message and will get back to you shortly.</p>
          <p>Our team typically responds within 24 hours.</p>
          <p>Best regards,<br/>Devbhoomi Team</p>
        `,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
