'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  return <button className="btn btn-light" onClick={() => { window.localStorage.removeItem('snbhante-auth'); router.push('/login/'); }}>Log out</button>;
}
