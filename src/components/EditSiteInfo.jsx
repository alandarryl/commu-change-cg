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

export default function EditSiteInfo() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  
  const [info, setInfo] = useState({
    phone: '',
    whatsapp: '',
    address: '',
    city: '',
    opening_hours: {
      monday: '08h00 - 18h00',
      tuesday: '08h00 - 18h00',
      wednesday: '08h00 - 18h00',
      thursday: '08h00 - 18h00',
      friday: '08h00 - 18h00',
      saturday: '08h00 - 15h00',
      sunday: 'Fermé',
    },
  });

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    setLoading(true);
    const { data } = await supabase.from('site_settings').select('*').eq('id', 1).single();
    if (data) {
      setInfo({
        phone: data.phone || '',
        whatsapp: data.whatsapp || '',
        address: data.address || '',
        city: data.city || '',
        opening_hours: data.opening_hours || info.opening_hours,
      });
    }
    setLoading(false);
  };

  const handleHourChange = (dayKey, value) => {
    setInfo((prev) => ({
      ...prev,
      opening_hours: {
        ...prev.opening_hours,
        [dayKey]: value,
      },
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    const { error } = await supabase
      .from('site_settings')
      .update({
        phone: info.phone,
        whatsapp: info.whatsapp,
        address: info.address,
        city: info.city,
        opening_hours: info.opening_hours,
        updated_at: new Date().toISOString(),
      })
      .eq('id', 1);

    setSaving(false);

    if (!error) {
      setMessage('✅ Informations et horaires mis à jour !');
      setTimeout(() => setMessage(''), 4000);
    } else {
      alert('Erreur lors de la sauvegarde : ' + error.message);
    }
  };

  if (loading) {
    return <div className="p-8 text-center font-bold text-slate-400">Chargement des paramètres...</div>;
  }

  return (
    <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-lg border border-slate-200">
      <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Coordonnées & Horaires</h2>
          <p className="text-slate-500 font-medium">Modifiez le lieu, les téléphones et les heures d'ouverture du bureau</p>
        </div>
        <span className="text-4xl">📍</span>
      </div>

      {message && (
        <div className="mb-6 p-4 bg-emerald-500 text-white font-black text-lg rounded-2xl text-center shadow-md animate-fade-in">
          {message}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        {/* Section Localisation & Contact */}
        <div>
          <h3 className="text-xl font-extrabold text-slate-800 mb-4">1. Lieu et Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-black text-slate-700 uppercase tracking-wider mb-2">
                Adresse physique
              </label>
              <input
                type="text"
                value={info.address}
                onChange={(e) => setInfo({ ...info, address: e.target.value })}
                placeholder="Ex: Avenue Amilcar Cabral"
                className="w-full p-4 font-bold bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none focus:border-congo-green focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-slate-700 uppercase tracking-wider mb-2">
                Ville / Région
              </label>
              <input
                type="text"
                value={info.city}
                onChange={(e) => setInfo({ ...info, city: e.target.value })}
                placeholder="Ex: Brazzaville, Congo"
                className="w-full p-4 font-bold bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none focus:border-congo-green focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-slate-700 uppercase tracking-wider mb-2">
                Téléphone principal
              </label>
              <input
                type="text"
                value={info.phone}
                onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                placeholder="Ex: +242 06 000 0000"
                className="w-full p-4 font-bold bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none focus:border-congo-green focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-slate-700 uppercase tracking-wider mb-2">
                Numéro WhatsApp (sans +)
              </label>
              <input
                type="text"
                value={info.whatsapp}
                onChange={(e) => setInfo({ ...info, whatsapp: e.target.value })}
                placeholder="Ex: 242060000000"
                className="w-full p-4 font-bold bg-slate-50 border-2 border-slate-200 rounded-2xl outline-none focus:border-congo-green focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Section Horaires par Jour */}
        <div>
          <h3 className="text-xl font-extrabold text-slate-800 mb-4">2. Horaires par jour</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DAYS_MAP.map((day) => (
              <div key={day.key} className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <label className="block text-sm font-black text-slate-700 uppercase tracking-wide mb-2">
                  {day.label}
                </label>
                <input
                  type="text"
                  value={info.opening_hours?.[day.key] || ''}
                  onChange={(e) => handleHourChange(day.key, e.target.value)}
                  placeholder="08h00 - 18h00 ou Fermé"
                  className="w-full p-3 font-bold bg-white border border-slate-300 rounded-xl text-slate-900 outline-none focus:border-congo-green"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bouton de Sauvegarde */}
        <button
          type="submit"
          disabled={saving}
          className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-black text-xl py-5 rounded-2xl transition shadow-xl disabled:opacity-50"
        >
          {saving ? 'Sauvegarde en cours...' : 'Enregistrer les Modifications'}
        </button>
      </form>
    </section>
  );
}