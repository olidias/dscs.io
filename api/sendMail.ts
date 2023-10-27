import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SMTPClient } from "emailjs";

export const prerender = false;

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const contactFormData = JSON.parse(request.body);
  console.log(contactFormData);
  const firstName = contactFormData.firstName;
  const lastName = contactFormData.lastName;
  const email = contactFormData.email;
  const mobile = contactFormData.mobile;
  const subject = contactFormData.subject;
  const message = contactFormData.message;

  const client = createMailClient();
  await client.sendAsync(
    {
      text:  `Subject: ${subject}\n\nContact Data: \nName: ${firstName} ${lastName}\nMobile: ${mobile}\nE-Mail: ${email}\n\n${message}`,
      from: 'dscs.io website <info@dscs.io>',
      to: 'info@dscs.io',
      subject: `New Contact Request from ${firstName} ${lastName}`
    }).then(_ => response.status(200).json({ message: `contact request for ${firstName} ${lastName} successfully sent` })
    ).catch(err => response.status(400).json({ message: `contact request failed. Reason: ${err}` }));
}



function createMailClient(){
    return new SMTPClient({
        user: process.env.VITE_SMTP_USER,
        password: process.env.VITE_SMTP_TOKEN,
        host: process.env.VITE_SMTP_HOST,
        port: 587,
        tls: true,
    })
}