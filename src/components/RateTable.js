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
    <section id="taux" className="py-12 lg:py-20 bg-slate-50 min-h-screen flex flex-col justify-center">
      {/* Passage à max-w-7xl et ajustement des marges */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* En-tête agrandi */}
        <div className="text-center mb-8 lg:mb-14">
          <span className="text-congo-green text-sm lg:text-base font-black uppercase tracking-widest bg-emerald-100/80 px-6 py-2 rounded-full inline-block mb-3">
            Mise à jour en direct
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Taux de Change du Jour
          </h2>
        </div>

        {/* Tableau XL */}
        <div className="bg-white rounded-3xl lg:rounded-[2.5rem] shadow-2xl border border-slate-200/80 overflow-hidden">
          {loading ? (
            <div className="p-20 text-center text-slate-400 font-black text-2xl">
              Chargement des taux...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-base lg:text-xl uppercase tracking-widest">
                    <th className="py-6 px-8 lg:px-12 font-black">Devise</th>
                    <th className="py-6 px-8 lg:px-12 font-black text-center">ACHATS</th>
                    <th className="py-6 px-8 lg:px-12 font-black text-center">VENTES</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-bold">
                  {rates.map((row) => (
                    <tr key={row.id} className="hover:bg-emerald-50/50 transition-colors even:bg-slate-50/40">
                      
                      {/* Devise & Drapeau XL */}
                      <td className="py-6 lg:py-8 px-8 lg:px-12">
                        <div className="flex items-center gap-6">
                          <span className="text-5xl lg:text-7xl drop-shadow-md">{row.flag}</span>
                          <div>
                            <span className="font-black text-slate-900 text-2xl lg:text-4xl block leading-tight">
                              {row.label}
                            </span>
                            <span className="text-sm lg:text-xl text-slate-400 font-semibold mt-1 block">
                              {row.name}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Prix Achat XL */}
                      <td className="py-6 lg:py-8 px-8 lg:px-12 text-center">
                        <span className="inline-block bg-emerald-50 text-congo-greenDark border-2 border-emerald-200 font-black px-6 lg:px-10 py-3 lg:py-5 rounded-2xl lg:rounded-3xl text-2xl lg:text-4xl shadow-sm">
                          {row.buy_rate} <span className="text-xl lg:text-2xl font-extrabold">FCFA</span>
                        </span>
                      </td>

                      {/* Prix Vente XL */}
                      <td className="py-6 lg:py-8 px-8 lg:px-12 text-center">
                        <span className="inline-block bg-red-50 text-congo-red border-2 border-red-200 font-black px-6 lg:px-10 py-3 lg:py-5 rounded-2xl lg:rounded-3xl text-2xl lg:text-4xl shadow-sm">
                          {row.sell_rate} <span className="text-xl lg:text-2xl font-extrabold">FCFA</span>
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