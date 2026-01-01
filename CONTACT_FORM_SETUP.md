# Contact Form Auto-Send Integration Guide

## Overview
The contact form now has auto-send functionality that:
1. **Stores messages in Supabase database** - All contact messages are saved for reference
2. **Sends automatic email notifications** - Admin receives email when form is submitted
3. **Sends confirmation emails** - Users receive confirmation their message was received
4. **Auto-clears form** - Form resets after successful submission

## Setup Steps

### 1. Supabase Database Setup
1. Go to your Supabase dashboard
2. Create a new table called `contact_messages` OR run the migration file:
   - File: `supabase/migrations/001_create_contact_messages.sql`
   - Copy the SQL and run it in your Supabase SQL editor

3. The table structure:
   - `id`: Auto-increment primary key
   - `name`: Contact person's name
   - `email`: Contact person's email
   - `phone`: Contact person's phone
   - `message`: The message content
   - `created_at`: Timestamp of submission
   - `status`: Message status (new, read, replied)

### 2. Environment Variables Setup
1. Copy `.env.example` to `.env` in the project root
2. Add your configuration values:

```env
# From Supabase Dashboard
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# For Gmail (recommended)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

### 3. Gmail App Password Setup (if using Gmail)
1. Go to your Google Account: https://myaccount.google.com/
2. Enable 2-Factor Authentication (if not already enabled)
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer"
5. Copy the 16-character password and use it as `EMAIL_PASSWORD` in `.env`

### 4. Install Dependencies
```bash
npm install
```

This will install:
- `@vercel/node` - For Vercel serverless functions
- `nodemailer` - For sending emails

### 5. Deploy to Vercel
1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`

4. Deploy will automatically build and deploy the serverless function at `/api/send-email`

## How It Works

### Frontend Flow (ContactPage.tsx)
1. User fills out the form with Name, Email, Phone, and Message
2. User clicks "Send Message" button
3. Form validates all fields are filled
4. Form data is sent to Supabase to be stored
5. Email notification is triggered to admin

### Backend Flow (api/send-email.ts)
1. Receives POST request with form data
2. Sends admin notification email to `bhupalsingh@devbhoomiwings.com`
3. Sends confirmation email to user
4. Returns success response

### Automatic Actions
- ✅ Message stored in database
- ✅ Admin notification sent immediately
- ✅ User confirmation email sent
- ✅ Form clears after 5 seconds
- ✅ Success message displays for 5 seconds

## Testing Locally

If you want to test the email functionality locally:

1. Install dependencies:
```bash
npm install
```

2. Create `.env` with your email credentials

3. For local development, the API won't work through `localhost`. You can:
   - Deploy to Vercel and test from there
   - Use Ngrok to expose localhost: `npx ngrok http 3000`
   - Mock the API call for testing

## Troubleshooting

### Emails not sending
- ✗ Check `EMAIL_USER` and `EMAIL_PASSWORD` are correct
- ✗ For Gmail, make sure you used an App Password (not your regular password)
- ✗ Verify 2-FA is enabled on your Gmail account

### Messages not storing in database
- ✗ Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are correct
- ✗ Check that `contact_messages` table exists in Supabase
- ✗ Check Supabase RLS policies allow inserts

### Form not submitting
- ✗ Check browser console for errors
- ✗ Verify all form fields are filled
- ✗ Check Network tab to see API response

## Email Recipients

- **Admin Email**: `bhupalsingh@devbhoomiwings.com` (receives all contact submissions)
- **User Email**: User's email from form (receives confirmation)

To change the admin email, edit the `sendEmailNotification` function in `ContactPage.tsx` and change:
```typescript
to: 'bhupalsingh@devbhoomiwings.com',
```

## Alternative Email Services

If you want to use SendGrid instead of Gmail:

1. Install SendGrid: `npm install @sendgrid/mail`
2. Update `api/send-email.ts` to use SendGrid SDK
3. Add `SENDGRID_API_KEY` to environment variables

## Files Modified/Created

- ✅ [src/app/pages/ContactPage.tsx](src/app/pages/ContactPage.tsx) - Added Supabase integration
- ✅ [api/send-email.ts](api/send-email.ts) - Serverless email function
- ✅ [supabase/migrations/001_create_contact_messages.sql](supabase/migrations/001_create_contact_messages.sql) - Database schema
- ✅ [.env.example](.env.example) - Environment variables template
- ✅ [package.json](package.json) - Added dependencies

## Next Steps

1. Add the environment variables to your `.env` file
2. Run `npm install` to install dependencies
3. Deploy to Vercel
4. Test the contact form
5. Check Supabase dashboard to see stored messages
6. Check your email for admin notifications

For questions or issues, check the troubleshooting section above.
