'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const DAYS_MAP = [
  { key: 'monday', label: 'Lundi' },
  { key: 'tuesday', label: 'Mardi' },
  { key: 'wednesday', label: 'Mercredi' },
  { key: 'thursday', label: 'Jeudi' },
  { key: 'friday', label: 'Vendredi' },
  { key: 'saturday', label: 'Samedi' },
  { key: 'sunday', label: 'Dimanche' },
];

export default function ContactInfoDisplay() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const { data: info } = await supabase.from('site_settings').select('*').eq('id', 1).single();
      if (info) setData(info);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return <div className="p-12 text-center text-slate-400 font-bold">Chargement des informations...</div>;
  }

  if (!data) return null;

  return (
    <section className="bg-white rounded-3xl lg:rounded-[2.5rem] shadow-xl border border-slate-200/80 p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Colonne Gauche : Adresse & Contacts */}
        <div className="space-y-8">
          <div>
            <span className="text-congo-green text-xs lg:text-sm font-black uppercase tracking-widest bg-emerald-100/80 px-4 py-1.5 rounded-full inline-block mb-3">
              Nos Coordonnées
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Rendez-nous visite en agence
            </h2>
          </div>

          <div className="space-y-6">
            {/* Adresse */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                📍
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-lg">Localisation</h4>
                <p className="text-slate-600 font-semibold">{data.address}</p>
                <p className="text-slate-400 text-sm font-medium">{data.city}</p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                📞
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-lg">Téléphone</h4>
                <a href={`tel:${data.phone}`} className="text-slate-600 font-semibold hover:text-emerald-600 transition block">
                  {data.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            {data.whatsapp && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  💬
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg">WhatsApp</h4>
                  <a
                    href={`https://wa.me/${data.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Discuter sur WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Colonne Droite : Tableau des Horaires */}
        <div className="bg-slate-50 p-6 lg:p-8 rounded-3xl border border-slate-200">
          <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span>🕒</span> Horaires d'ouverture
          </h3>

          <ul className="space-y-3">
            {DAYS_MAP.map(({ key, label }) => {
              const hourText = data.opening_hours?.[key] || 'Fermé';
              const isClosed = hourText.toLowerCase().includes('fermé');

              return (
                <li key={key} className="flex justify-between items-center border-b border-slate-200/60 pb-2.5">
                  <span className="font-bold text-slate-700">{label}</span>
                  <span className={`font-black text-sm lg:text-base px-3 py-1 rounded-xl ${
                    isClosed ? 'bg-red-100 text-red-600' : 'bg-white text-slate-900 border border-slate-200'
                  }`}>
                    {hourText}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}