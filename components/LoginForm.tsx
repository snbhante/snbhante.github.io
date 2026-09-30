'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem('snbhante-auth','1');
    setMessage('Local demo session created.');
    router.push('/dashboard/');
  }
  return (
    <form className="login-form" onSubmit={submit}>
      <input aria-label="Username" name="username" placeholder="Username" autoComplete="username" required />
      <input aria-label="Password" name="password" type="password" placeholder="Password" autoComplete="current-password" required />
      <button type="submit">LOGIN</button>
      {message && <p className="success">{message}</p>}
    </form>
  );
}
