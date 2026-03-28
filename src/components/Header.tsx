'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
  { href: '/builder', label: 'Builder' },
  { href: '/simulator', label: 'Simulator' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-cyan">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
            <rect x="2" y="2" width="24" height="24" rx="4" stroke="#06B6D4" strokeWidth="2" />
            <circle cx="9" cy="9" r="2" fill="#06B6D4" />
            <circle cx="19" cy="9" r="2" fill="#06B6D4" />
            <circle cx="9" cy="19" r="2" fill="#06B6D4" />
            <circle cx="19" cy="19" r="2" fill="#06B6D4" />
            <line x1="9" y1="9" x2="19" y2="19" stroke="#06B6D4" strokeWidth="1.5" />
            <line x1="19" y1="9" x2="9" y2="19" stroke="#06B6D4" strokeWidth="1.5" />
          </svg>
          SensorGrid Hub
        </Link>

        <nav className="hidden gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-cyan"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-slate-300 hover:bg-slate-800 lg:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-700 px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
