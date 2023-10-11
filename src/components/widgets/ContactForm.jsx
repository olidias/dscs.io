import { FormEvent, useState } from 'react';
import { SMTPClient } from 'emailjs';
import * as React from 'react';
export default function ContactForm({ lang }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [disableSend, setDisableSend] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "mobile": mobile,
      "subject": subject,
      "message": message,
    };
    setDisableSend(true);
    fetch("/api/sendMessage", {
      method: "POST",
      body: JSON.stringify(body)
    }).then(response => {
      setDisableSend(false);
      location.href = `/`
    });
  }

  return (
    <div className="w-full mr-auto">
      <div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            value={firstName}
            id="firstName"
            onChange={e => { setFirstName(e.target.value) }}
            placeholder={lang === 'en' ? 'First Name*' : 'Vorname*'}
            required={true}
          />

          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            onChange={e => { setLastName(e.target.value) }}
            placeholder={lang === 'en' ? 'Last Name*' : 'Nachname*'}
            required={true}
          />

          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email*"
            required={true}
          />

          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            id="mobile"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            placeholder="Mobile*"
          />
          
          <div className="sm:col-span-2">
            <textarea
              placeholder={lang === 'en' ? 'Message*' : 'Nachricht*'}
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="message"
              onChange={e => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <button type="submit" value={lang === 'en' ? 'Send Message' : 'Nachricht senden'}
              disabled={disableSend}
              className={`uppercase justify-center font-medium rounded-xl mb-9 mt-5 focus-visible:outline-mainGreen focus:outline-none inline-flex bg-mainGreen border-2 border-accentBeigeSub duration-200 focus-visible:ring-mainGreen hover:bg-transparent
           hover:border-mainGreen hover:text-mainGreen px-5 py-3 text-center min-w-[159px] text-accentBeige hover:cursor-pointer ${disableSend ? 'disabled animate-pulse hover:cursor-default cursor-default' : ''}`}
            >
              {disableSend ? (lang === 'en' ? 'Sending message' : 'Nachricht wird gesendet') : (lang === 'en' ? 'Send Message' : 'Nachricht senden')}
            </button>
          </div>
        </form >
      </div>
    </div>
  );
}