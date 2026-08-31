'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function DashboardAdmin() {
  const [rates, setRates] = useState([]);
  const [savingId, setSavingId] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('exchange_rates').select('*').order('code');
    if (data) setRates(data);
    if (error) alert('Erreur lors du chargement : ' + error.message);
    setLoading(false);
  };

  const handleRateChange = (id, field, value) => {
    setRates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const saveRate = async (rate) => {
    setSavingId(rate.id);
    setMessage('');

    const { error } = await supabase
      .from('exchange_rates')
      .update({
        buy_rate: parseFloat(rate.buy_rate),
        sell_rate: parseFloat(rate.sell_rate),
        updated_at: new Date().toISOString(),
      })
      .eq('id', rate.id);

    setSavingId(null);
    if (!error) {
      setMessage(`✅ ${rate.code} mis à jour avec succès !`);
      setTimeout(() => setMessage(''), 3000);
    } else {
      alert('Erreur lors de la sauvegarde : ' + error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center font-black text-2xl text-slate-500">
        Chargement des taux...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6 sm:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* En-tête XL pour Grand Écran */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {/* Logo / Badge XL */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-900 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl shadow-lg shrink-0">
              💱
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Gestion des Taux
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 font-semibold mt-2">
                Panneau d'affichage et de configuration
              </p>
            </div>
          </div>
        </div>

        {/* Alerte Message XL */}
        {message && (
          <div className="p-6 bg-emerald-500 text-white font-black text-xl sm:text-2xl rounded-3xl text-center shadow-lg animate-bounce">
            {message}
          </div>
        )}

        {/* Grille des cartes de réglage XL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rates.map((rate) => (
            <div key={rate.id} className="bg-white p-8 rounded-3xl shadow-md border border-slate-200 flex flex-col justify-between space-y-6">
              
              {/* En-tête de la Devise */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <span className="text-5xl sm:text-6xl">{rate.flag}</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{rate.label}</h2>
                  <span className="text-sm sm:text-base font-bold text-slate-400 uppercase tracking-wide">{rate.name}</span>
                </div>
              </div>

              {/* Champs de saisie XL */}
              <div className="space-y-5">
                <div>
                  <label className="text-sm sm:text-base font-black text-congo-green uppercase tracking-wider block mb-2">
                    Prix Achat (FCFA)
                  </label>
                  <input
                    type="number"
                    value={rate.buy_rate}
                    onChange={(e) => handleRateChange(rate.id, 'buy_rate', e.target.value)}
                    className="w-full p-4 sm:p-5 text-2xl sm:text-3xl font-black bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 focus:bg-white focus:border-congo-green outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-sm sm:text-base font-black text-congo-red uppercase tracking-wider block mb-2">
                    Prix Vente (FCFA)
                  </label>
                  <input
                    type="number"
                    value={rate.sell_rate}
                    onChange={(e) => handleRateChange(rate.id, 'sell_rate', e.target.value)}
                    className="w-full p-4 sm:p-5 text-2xl sm:text-3xl font-black bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 focus:bg-white focus:border-congo-red outline-none transition"
                  />
                </div>
              </div>

              {/* Bouton d'enregistrement XL */}
              <button
                onClick={() => saveRate(rate)}
                disabled={savingId === rate.id}
                className="w-full bg-slate-900 hover:bg-congo-green text-white font-extrabold text-lg sm:text-xl py-4 sm:py-5 rounded-2xl transition shadow-lg active:scale-95 disabled:opacity-50 mt-4"
              >
                {savingId === rate.id ? 'Sauvegarde...' : 'Enregistrer'}
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}