import { resendClient, sender } from "../lib/resend.js"; // import Resend client and sender info
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js"; // import email template

export const sendWelcomeEmail = async (email, name, clientURL) => {
    // email content
    const { data, error } = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to Chatty!",
        html: createWelcomeEmailTemplate(name, clientURL),
    });

    if (error) {
        console.error("Error Sending Welcome Email:", error);
        throw new Error("Failed to Send Welcome Email");
    }

    console.log("Welcome Email Sent Successfully:", data);
}