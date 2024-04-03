"use server";

import React from "react";
import { Resend } from "resend";
 import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);
type SendEmailResponse = { data?: any; error?: string };


export const sendEmail = async (formData: FormData): Promise<SendEmailResponse> => {
  try {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500) || !validateString(message, 5000)) {
      return { error: "Invalid sender email or message" };
    }

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "vaishalichaudhary011@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    return { data };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return { error: getErrorMessage(error) };
  }
};