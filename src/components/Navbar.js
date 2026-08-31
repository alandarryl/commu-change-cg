'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Adaptation de la hauteur (h-20 -> 2xl:h-32 -> 3xl:h-40) et suppression du max-w-7xl étriqué */}
      <div className="w-full max-w-[95vw] mx-auto px-6 h-20 2xl:h-32 3xl:h-40 flex items-center justify-between transition-all">
        
        {/* Logo XL / Énorme sur très grand écran */}
        <Link href="/" className="flex items-center gap-3 2xl:gap-6">
          <div className="w-10 h-10 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 rounded-xl 2xl:rounded-3xl bg-congo-green flex items-center justify-center font-black text-white text-xl 2xl:text-4xl 3xl:text-5xl shadow-md shrink-0">
            $
          </div>
          <div>
            <span className="font-extrabold text-xl 2xl:text-4xl 3xl:text-5xl text-slate-900 tracking-tight block leading-none">
              COMI CHANGE CONGO
            </span>
            <span className="text-[10px] 2xl:text-base 3xl:text-xl text-slate-400 font-semibold tracking-wider uppercase block mt-1 2xl:mt-2">
              Brazzaville
            </span>
          </div>
        </Link>

        {/* Navigation Desktop agrandie */}
        <nav className="hidden md:flex items-center gap-8 2xl:gap-12 font-semibold text-sm 2xl:text-2xl text-slate-600">
          <Link href="/#taux" className="hover:text-congo-green transition">Taux du jour</Link>
          <Link href="/#Services" className="hover:text-congo-green transition">Services</Link>
          <Link href="/contact" className="hover:text-congo-green transition">Contact</Link>
        </nav>

        {/* Boutons d'action Desktop agrandis */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/242000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm 2xl:text-xl px-5 2xl:px-8 py-2.5 2xl:py-4 rounded-xl 2xl:rounded-2xl transition shadow-sm flex items-center gap-2"
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