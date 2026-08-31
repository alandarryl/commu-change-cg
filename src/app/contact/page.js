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

export default function Contact() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSettings() {
      const { data } = await supabase.from('site_settings').select('*').eq('id', 1).single();
      if (data) setSettings(data);
      setLoading(false);
    }
    fetchSettings();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Titre de la page */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Nous trouver & Nous contacter</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Une question sur nos taux ? Besoin de réserver des devises ? Contactez-nous directement par téléphone, WhatsApp ou rendez-nous visite.
          </p>
          <div className="w-16 h-1 bg-congo-yellow mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Bloc Coordonnées & Horaires */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4">
              Informations Agence
            </h2>

            <div className="space-y-6">
              {/* Localisation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-congo-green/10 text-congo-green rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Adresse du Bureau</h3>
                  <p className="text-slate-600 text-sm font-semibold">
                    {loading ? 'Chargement...' : settings?.address || 'Avenue Amilcar Cabral, Brazzaville'}
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-congo-green/10 text-congo-green rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Téléphone Direct</h3>
                  {loading ? (
                    <p className="text-slate-400 text-sm">Chargement...</p>
                  ) : (
                    <a
                      href={`tel:${settings?.phone}`}
                      className="text-slate-900 font-extrabold text-lg hover:text-emerald-600 transition block"
                    >
                      {settings?.phone || '+242 06 000 00 00'}
                    </a>
                  )}
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-congo-green/10 text-congo-green rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
                  🕒
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-slate-800 mb-2">Heures d'ouverture</h3>
                  {loading ? (
                    <p className="text-slate-400 text-sm">Chargement des horaires...</p>
                  ) : (
                    <ul className="space-y-1.5 text-sm bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {DAYS_MAP.map(({ key, label }) => {
                        const hourText = settings?.opening_hours?.[key] || 'Fermé';
                        const isClosed = hourText.toLowerCase().includes('fermé');
                        return (
                          <li key={key} className="flex justify-between items-center py-0.5">
                            <span className="text-slate-600 font-medium">{label}</span>
                            <span className={isClosed ? 'text-red-500 font-bold' : 'text-slate-900 font-semibold'}>
                              {hourText}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Boutons d'accès rapide WhatsApp & Facebook */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${settings?.whatsapp || '242000000000'}?text=Bonjour,%20j'aimerais%20avoir%20des%20informations%20sur%20les%20taux`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-4 rounded-2xl transition shadow-md"
              >
                <span className="text-xl">💬</span>
                <span>Discuter sur WhatsApp</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition shadow-md"
              >
                <span className="text-xl">📘</span>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="bg-white p-3 rounded-3xl shadow-sm border border-slate-200 overflow-hidden h-[460px] relative">
            <iframe
              title="Localisation du bureau"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.978135891395!2d15.2750!3d-4.2633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTUnNDcuOSJTIDE1wrAxNiczMC4wIkU!5e0!3m2!1sfr!2scg!4v1600000000000!5m2!1sfr!2scg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </div>

        </div>
      </div>
    </main>
  );
}