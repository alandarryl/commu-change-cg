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
      <div className="min-h-screen bg-slate-100 flex items-center justify-center font-black text-3xl text-slate-500">
        Chargement des taux...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6 sm:p-12 lg:p-16 flex flex-col items-center">
      {/* Container principal centré avec w-full max-w-7xl ou max-w-[1600px] */}
      <div className="w-full max-w-[1600px] mx-auto space-y-10">
        
        {/* En-tête XXL */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-md border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-900 rounded-3xl flex items-center justify-center text-5xl sm:text-6xl shadow-lg shrink-0">
              💱
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                Gestion des Taux
              </h1>
              <p className="text-xl sm:text-2xl text-slate-500 font-semibold mt-2">
                Panneau d'affichage et de configuration
              </p>
            </div>
          </div>
        </div>

        {/* Alerte Message XXL */}
        {message && (
          <div className="p-8 bg-emerald-500 text-white font-black text-2xl sm:text-3xl rounded-3xl text-center shadow-lg animate-bounce">
            {message}
          </div>
        )}

        {/* Grille ajustée : max 3 colonnes pour garder des cartes TRÈS larges et parfaitement centrées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {rates.map((rate) => (
            <div key={rate.id} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-200 flex flex-col justify-between space-y-8">
              
              {/* En-tête de la Devise XXL */}
              <div className="flex items-center gap-6 border-b border-slate-100 pb-6">
                <span className="text-6xl sm:text-7xl drop-shadow-sm">{rate.flag}</span>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900">{rate.label}</h2>
                  <span className="text-base sm:text-lg font-bold text-slate-400 uppercase tracking-wider">{rate.name}</span>
                </div>
              </div>

              {/* Champs de saisie XXL */}
              <div className="space-y-6">
                <div>
                  <label className="text-base sm:text-lg font-black text-congo-green uppercase tracking-wider block mb-3">
                    Prix Achat (FCFA)
                  </label>
                  <input
                    type="number"
                    value={rate.buy_rate}
                    onChange={(e) => handleRateChange(rate.id, 'buy_rate', e.target.value)}
                    className="w-full p-5 sm:p-6 text-3xl sm:text-4xl font-black bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 focus:bg-white focus:border-congo-green outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-base sm:text-lg font-black text-congo-red uppercase tracking-wider block mb-3">
                    Prix Vente (FCFA)
                  </label>
                  <input
                    type="number"
                    value={rate.sell_rate}
                    onChange={(e) => handleRateChange(rate.id, 'sell_rate', e.target.value)}
                    className="w-full p-5 sm:p-6 text-3xl sm:text-4xl font-black bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 focus:bg-white focus:border-congo-red outline-none transition"
                  />
                </div>
              </div>

              {/* Bouton d'enregistrement XXL */}
              <button
                onClick={() => saveRate(rate)}
                disabled={savingId === rate.id}
                className="w-full bg-slate-900 hover:bg-congo-green text-white font-black text-xl sm:text-2xl py-5 sm:py-6 rounded-2xl transition shadow-xl active:scale-95 disabled:opacity-50 mt-4"
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