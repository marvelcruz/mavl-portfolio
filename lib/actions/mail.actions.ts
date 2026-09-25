'use server';

import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { z } from 'zod';
import { contactFormSchema } from '@/components/src/lib/schemas/contact.schema';

const { EMAIL: email, PASSWORD: password } = process.env;

export const sendMail = async ({
  name: userName,
  email: userEmail,
  message: userMessage,
}: z.infer<typeof contactFormSchema>) => {
  if (!email || !password) {
    return { sent: false };
  }
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: email,
    // cc: userEmail, // send carbon copy
    subject: `Message from ${userName} - ${userEmail}`,
    text: userMessage,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { sent: true };
  } catch (error) {
    console.error('Portfolio contact delivery failed', error);
    return { sent: false };
  }
};
