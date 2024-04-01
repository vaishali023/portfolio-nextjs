"use server";

import { Resend } from "resend";
 import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import ContactFormEmail from "@/email/contact-form-email";
const resend = new Resend(process.env.RESEND_API_KEY);
type SendEmailResponse = { data?: any; error?: string };

export const sendEmail = async (formData: FormData): Promise<SendEmailResponse> => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "vaishalichaudhary011@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string, // assert senderEmail as string
      react: React.createElement(ContactFormEmail, {
        message: message as string, // assert message as string
        senderEmail: senderEmail as string, // assert senderEmail as string
      }),
    });
    return { data };
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error sending email:", error);
    return {
      error: "An error occurred while sending the email. Please try again later.",
    };
  }
}