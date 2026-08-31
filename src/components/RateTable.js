'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function RateTable() {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    const { data, error } = await supabase
      .from('exchange_rates')
      .select('*')
      .order('code', { ascending: false });

    if (!error && data) setRates(data);
    setLoading(false);
  };

  return (
    <section id="taux" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-congo-green text-xs font-extrabold uppercase tracking-widest bg-emerald-100/70 px-4 py-1.5 rounded-full">
            Mise à jour en direct
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Taux de Change du Jour
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-slate-400 font-bold">Chargement des taux...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                    <th className="py-5 px-6 sm:px-10 font-extrabold">Devise</th>
                    <th className="py-5 px-6 sm:px-10 font-extrabold text-center">ACHATS</th>
                    <th className="py-5 px-6 sm:px-10 font-extrabold text-center">VENTES</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-base font-semibold">
                  {rates.map((row) => (
                    <tr key={row.id} className="hover:bg-emerald-50/50 transition-colors even:bg-slate-50/40">
                      <td className="py-6 px-6 sm:px-10">
                        <div className="flex items-center gap-4">
                          <span className="text-4xl drop-shadow-sm">{row.flag}</span>
                          <div>
                            <span className="font-black text-slate-900 text-lg sm:text-xl block leading-tight">
                              {row.label}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-400 font-medium">
                              {row.name}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-6 sm:px-10 text-center">
                        <span className="inline-block bg-emerald-50 text-congo-greenDark border border-emerald-200/80 font-black px-5 py-2.5 rounded-xl text-lg sm:text-xl">
                          {row.buy_rate} FCFA
                        </span>
                      </td>
                      <td className="py-6 px-6 sm:px-10 text-center">
                        <span className="inline-block bg-red-50 text-congo-red border border-red-200/80 font-black px-5 py-2.5 rounded-xl text-lg sm:text-xl">
                          {row.sell_rate} FCFA
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}