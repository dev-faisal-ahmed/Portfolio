'use server';

import { mailOptions, transporter } from '@/app/_config/node-mailer-config';
import { emailTemplate } from '@/app/_template/email-template';

type TSendEmailPayload = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

export const sendEmail = async ({
  email,
  name,
  subject,
  message,
}: TSendEmailPayload) => {
  try {
    const response = await transporter.sendMail({
      ...mailOptions,
      subject,
      text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message:
      ${message}
      `,
      html: emailTemplate({ name, email, subject, message }),
    });

    if (!response.accepted) throw new Error('');

    return { message: 'Mail has been sent successfully', ok: true };
  } catch (err) {
    console.log(err);
    return { message: 'Failed to send email', ok: false };
  }
};
