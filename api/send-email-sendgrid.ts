import { VercelRequest, VercelResponse } from '@vercel/node';

// This is an alternative implementation using SendGrid
// To use this, install @sendgrid/mail: npm install @sendgrid/mail

interface SendEmailRequest {
  to: string;
  subject: string;
  message: string;
  replyTo?: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { to, subject, message, replyTo } = req.body as SendEmailRequest;

    // Validate input
    if (!to || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Use SendGrid API (you need to install @sendgrid/mail)
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Send admin notification email (always to devbhoomiwings@gmail.com)
    const adminEmail = {
      to: 'devbhoomiwings@gmail.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@devbhoomiwings.com',
      subject,
      html: message,
      replyTo: replyTo || 'support@devbhoomiwings.com',
    };

    await sgMail.send(adminEmail);

    // Send confirmation email to user
    if (replyTo) {
      const userEmail = {
        to: replyTo,
        from: process.env.SENDGRID_FROM_EMAIL || 'noreply@devbhoomiwings.com',
        subject: 'We received your message - Devbhoomi',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #14b8a6;">Thank You for Contacting Devbhoomi</h2>
            <p>We have received your message and will get back to you shortly.</p>
            <p>Our team typically responds within 24 hours.</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px;">
              Best regards,<br/>
              Devbhoomi Team<br/>
              Travel with trust
            </p>
          </div>
        `,
      };

      await sgMail.send(userEmail);
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
