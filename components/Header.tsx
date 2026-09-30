'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigation, person } from '@/config';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <button
        className={`menu-btn ${open ? 'close' : ''}`}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
      <div className={`menu ${open ? 'show' : ''}`}>
        <div className="menu-branding">
          <div className="portrait">
            <img src="/assets/snbhante.png" alt={person.name} />
          </div>
        </div>
        <nav className="menu-nav" aria-label="Primary navigation">
          {navigation.items.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
