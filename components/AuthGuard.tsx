'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem('snbhante-auth') !== '1') router.replace('/login/');
    else setReady(true);
  }, [router]);
  if (!ready) return <main className="login"><p>Checking access…</p></main>;
  return <>{children}</>;
}
