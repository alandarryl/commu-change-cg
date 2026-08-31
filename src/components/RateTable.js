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
    // Remplace le wrapper principal :
<section id="taux" className="py-8 bg-slate-50 min-h-screen flex flex-col justify-center">
  {/* Utilise w-full et max-w-[95vw] ou max-w-[1920px] au lieu de max-w-7xl */}
  <div className="w-full max-w-[95vw] mx-auto px-4 sm:px-8">
    
    <div className="text-center mb-8 2xl:mb-16">
      <span className="text-congo-green text-lg 2xl:text-2xl font-black uppercase tracking-widest bg-emerald-100/80 px-8 py-3 rounded-full inline-block mb-4">
        Mise à jour en direct
      </span>
      <h2 className="text-5xl lg:text-7xl 2xl:text-8xl font-black text-slate-900 tracking-tight">
        Taux de Change du Jour
      </h2>
    </div>

    <div className="bg-white rounded-3xl 2xl:rounded-[3rem] shadow-2xl border border-slate-200/80 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white text-xl lg:text-2xl 2xl:text-4xl uppercase tracking-widest">
              <th className="py-8 px-12 font-black">Devise</th>
              <th className="py-8 px-12 font-black text-center">ACHATS</th>
              <th className="py-8 px-12 font-black text-center">VENTES</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-bold">
            {rates.map((row) => (
              <tr key={row.id} className="hover:bg-emerald-50/50 transition-colors even:bg-slate-50/40">
                
                <td className="py-8 2xl:py-12 px-12">
                  <div className="flex items-center gap-8">
                    {/* Drapeau encore plus grand sur écran géant */}
                    <span className="text-6xl lg:text-8xl 2xl:text-9xl drop-shadow-md">{row.flag}</span>
                    <div>
                      <span className="font-black text-slate-900 text-3xl lg:text-5xl 2xl:text-6xl block leading-tight">
                        {row.label}
                      </span>
                      <span className="text-lg lg:text-2xl 2xl:text-3xl text-slate-400 font-semibold mt-1 block">
                        {row.name}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="py-8 2xl:py-12 px-12 text-center">
                  <span className="inline-block bg-emerald-50 text-congo-greenDark border-2 border-emerald-200 font-black px-8 lg:px-14 py-4 lg:py-7 rounded-3xl text-3xl lg:text-5xl 2xl:text-6xl shadow-sm">
                    {row.buy_rate} <span className="text-2xl lg:text-3xl 2xl:text-4xl font-extrabold">FCFA</span>
                  </span>
                </td>

                <td className="py-8 2xl:py-12 px-12 text-center">
                  <span className="inline-block bg-red-50 text-congo-red border-2 border-red-200 font-black px-8 lg:px-14 py-4 lg:py-7 rounded-3xl text-3xl lg:text-5xl 2xl:text-6xl shadow-sm">
                    {row.sell_rate} <span className="text-2xl lg:text-3xl 2xl:text-4xl font-extrabold">FCFA</span>
                  </span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
  );
}