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
      <div className="min-h-screen bg-slate-100 flex items-center justify-center font-bold text-slate-500">
        Chargement des taux...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* En-tête simple */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-xl font-black text-slate-900">Gestion des Taux de Change</h1>
          <p className="text-xs text-slate-500 mt-1">Modifiez les taux ci-dessous et cliquez sur Enregistrer.</p>
        </div>

        {message && (
          <div className="p-4 bg-emerald-500 text-white font-bold rounded-2xl text-center shadow-md">
            {message}
          </div>
        )}

        {/* Formulaire des taux */}
        <div className="space-y-4">
          {rates.map((rate) => (
            <div key={rate.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="text-3xl">{rate.flag}</span>
                <div>
                  <h3 className="font-extrabold text-slate-900">{rate.label}</h3>
                  <span className="text-xs text-slate-400">{rate.name}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-congo-green uppercase block mb-1">
                    Prix Achat (FCFA)
                  </label>
                  <input
                    type="number"
                    value={rate.buy_rate}
                    onChange={(e) => handleRateChange(rate.id, 'buy_rate', e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-extrabold text-slate-900 focus:bg-white focus:ring-2 focus:ring-congo-green outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-congo-red uppercase block mb-1">
                    Prix Vente (FCFA)
                  </label>
                  <input
                    type="number"
                    value={rate.sell_rate}
                    onChange={(e) => handleRateChange(rate.id, 'sell_rate', e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-extrabold text-slate-900 focus:bg-white focus:ring-2 focus:ring-congo-red outline-none"
                  />
                </div>
              </div>

              <button
                onClick={() => saveRate(rate)}
                disabled={savingId === rate.id}
                className="w-full bg-slate-900 hover:bg-congo-green text-white font-bold py-3 rounded-xl transition shadow-md disabled:opacity-50"
              >
                {savingId === rate.id ? 'Sauvegarde...' : 'Enregistrer les modifications'}
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}