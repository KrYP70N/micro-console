import { type ReactNode } from "react";
import { Resend } from "resend";

const RESEND_KEY = process.env.AUTH_RESEND_KEY!;
const resend = new Resend(RESEND_KEY);

interface EmailProps {
  from: string;
  to: string;
  subject: string;
  template: ReactNode;
}

const sendEmail = async ({from, to, subject, template}: EmailProps) => {
  try {
    await resend.emails.send({
      from,
      to,
      subject,
      react: template,
    });
  } catch (error) {
    return error;
  }
};

export default sendEmail;
