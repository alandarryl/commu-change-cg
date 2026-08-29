'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-congo-green flex items-center justify-center font-black text-white text-xl shadow-md">
            $
          </div>
          <div>
            <span className="font-extrabold text-xl text-slate-900 tracking-tight block leading-none">
              commu change congo
            </span>
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
              Brazzaville
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
          <Link href="/" className="hover:text-congo-green transition">Accueil</Link>
          <Link href="/#taux" className="hover:text-congo-green transition">Taux du jour</Link>
          <Link href="/#convertisseur" className="hover:text-congo-green transition">Calculateur</Link>
          <Link href="/contact" className="hover:text-congo-green transition">Contact</Link>
        </nav>

        {/* Boutons d'action Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/dashboard"
            className="text-xs font-bold text-slate-500 hover:text-slate-800 transition px-3 py-2"
          >
            Admin
          </Link>
          <a
            href="https://wa.me/242000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2"
          >
            <span>💬 WhatsApp</span>
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-congo-green"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4 font-semibold text-slate-700">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-congo-green">Accueil</Link>
          <Link href="/#taux" onClick={() => setIsOpen(false)} className="block hover:text-congo-green">Taux du jour</Link>
          <Link href="/#convertisseur" onClick={() => setIsOpen(false)} className="block hover:text-congo-green">Calculateur</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-congo-green">Contact</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block text-xs text-slate-400">Espace Admin</Link>
          <a
            href="https://wa.me/242000000000"
            target="_blank"
            className="block text-center bg-emerald-600 text-white font-bold py-3 rounded-xl"
          >
            💬 Contacter sur WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}