import { SMTPClient } from "emailjs";

export function createMailClient(){
    return new SMTPClient({
        user: process.env.VITE_SMTP_USER,
        password: process.env.VITE_SMTP_TOKEN,
        host: process.env.VITE_SMTP_HOST,
        port: process.env.VITE_SMTP_PORT,
        tls: true,
    })
}