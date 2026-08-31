'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const DAYS_SHORT_MAP = [
  { key: 'monday', label: 'Lun' },
  { key: 'tuesday', label: 'Mar' },
  { key: 'wednesday', label: 'Mer' },
  { key: 'thursday', label: 'Jeu' },
  { key: 'friday', label: 'Ven' },
  { key: 'saturday', label: 'Sam' },
  { key: 'sunday', label: 'Dim' },
];

export default function Footer() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    async function fetchSettings() {
      const { data } = await supabase.from('site_settings').select('*').eq('id', 1).single();
      if (data) setSettings(data);
    }
    fetchSettings();
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-congo-green">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Col 1: Marque */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-congo-green flex items-center justify-center font-black text-white text-lg">
              $
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">
              EXCHANGE<span className="text-congo-green">.CG</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Votre bureau de change de référence à Brazzaville. Achat, vente et réservation de devises au meilleur taux du marché.
          </p>
        </div>

        {/* Col 2: Liens rapides */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider border-b border-slate-800 pb-2">Navigation</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li><Link href="/" className="hover:text-congo-green transition">Accueil</Link></li>
            <li><Link href="/#taux" className="hover:text-congo-green transition">Taux de change</Link></li>
            <li><Link href="/#convertisseur" className="hover:text-congo-green transition">Convertisseur</Link></li>
            <li><Link href="/contact" className="hover:text-congo-green transition">Nous contacter</Link></li>
          </ul>
        </div>

        {/* Col 3: Heures d'ouverture dynamiques */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider border-b border-slate-800 pb-2">Horaires</h4>
          {settings?.opening_hours ? (
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
              {DAYS_SHORT_MAP.map(({ key, label }) => {
                const hourText = settings.opening_hours?.[key] || 'Fermé';
                const isClosed = hourText.toLowerCase().includes('fermé');
                return (
                  <li key={key} className="flex justify-between items-center">
                    <span className="font-semibold text-slate-400">{label} :</span>
                    <span className={isClosed ? 'text-red-400 font-bold' : 'text-white font-medium'}>
                      {hourText}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-xs text-slate-500 animate-pulse">Chargement des horaires...</p>
          )}
        </div>

        {/* Col 4: Contact rapide dynamique */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider border-b border-slate-800 pb-2">Agence</h4>
          <p className="text-sm text-slate-400 mb-2">
            📍 {settings?.address || 'Avenue Amilcar Cabral, Brazzaville'}
          </p>
          <p className="text-sm text-slate-400 mb-4">
            📞 {settings?.phone || '+242 06 000 00 00'}
          </p>
          {settings?.whatsapp && (
            <a
              href={`https://wa.me/${settings.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl transition shadow-sm"
            >
              Discuter sur WhatsApp
            </a>
          )}
        </div>

      </div>

      {/* Baseline */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Exchange.cg — Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link href="/dashboard" className="hover:text-slate-300 transition">Accès Administration</Link>
        </div>
      </div>
    </footer>
  );
}