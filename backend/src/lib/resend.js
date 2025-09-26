import { Resend } from "resend";
import { ENV } from "../lib/env.js";

export const resendClient = new Resend(ENV.RESEND_API_KEY); // initialize Resend client with API key to send emails

// sender information
export const sender = {
    email: ENV.EMAIL_FROM,
    name: ENV.EMAIL_FROM_NAME,
}