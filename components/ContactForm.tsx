'use client';

import { FormEvent } from 'react';
import { social } from '@/config';

export default function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const phone = String(form.get('phone') ?? '');
    const email = String(form.get('email') ?? '');
    const subject = String(form.get('subject') || 'Portfolio contact');
    const message = String(form.get('message') ?? '');
    const body = `Hello, my name is ${name}. My contact number is ${phone} and my email is ${email}. ${message}`;
    const mailto = `mailto:${social.contactEmail}?cc=sarbanandachakma@gmail.com,sarbanandadev@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }
  return (
    <form onSubmit={submit}>
      <div className="row">
        <label><span>Name</span><input name="name" required /></label>
        <label><span>Phone</span><input name="phone" required /></label>
      </div>
      <label><span>Email</span><input name="email" type="email" required /></label>
      <label><span>Subject</span><input name="subject" /></label>
      <label><span>Message</span><textarea name="message" rows={8} required /></label>
      <button type="submit"><span aria-hidden>✈</span> SUBMIT</button>
    </form>
  );
}
