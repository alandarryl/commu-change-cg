export default function RateTable() {
  const rates = [
    { currency: 'USD ($)', name: 'Dollar Américain', flag: '🇺🇸', buy: '610 FCFA', sell: '625 FCFA' },
    { currency: 'EUR (€)', name: 'Euro', flag: '🇪🇺', buy: '650 FCFA', sell: '655 FCFA' },
    { currency: 'XOF (Fr)', name: 'Franc CFA (BCEAO)', flag: '🇸🇳', buy: '100 FCFA', sell: '105 FCFA' },
  ];

  return (
    <section id="taux" className="py-20 bg-slate-50">
      {/* Passage de max-w-4xl à max-w-6xl pour une présence beaucoup plus large */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* En-tête de section */}
        <div className="text-center mb-10">
          <span className="text-congo-green text-xs font-extrabold uppercase tracking-widest bg-emerald-100/70 px-4 py-1.5 rounded-full">
            Mise à jour en direct
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Taux de Change du Jour
          </h2>
          <p className="text-base text-slate-500 font-medium mt-2">
            Dernière actualisation : <span className="text-slate-900 font-bold">Aujourd'hui à 09h00</span>
          </p>
        </div>

        {/* Conteneur Tableau plus large */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* En-tête */}
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="py-5 px-6 sm:px-10 font-extrabold">Devise</th>
                  <th className="py-5 px-6 sm:px-10 font-extrabold text-center">ACHATS</th>
                  <th className="py-5 px-6 sm:px-10 font-extrabold text-center">VENTES</th>
                </tr>
              </thead>

              {/* Corps */}
              <tbody className="divide-y divide-slate-100 text-base font-semibold">
                {rates.map((row, i) => (
                  <tr 
                    key={i} 
                    className="hover:bg-emerald-50/50 transition-colors even:bg-slate-50/40"
                  >
                    {/* Nom de la devise */}
                    <td className="py-6 px-6 sm:px-10">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl drop-shadow-sm">{row.flag}</span>
                        <div>
                          <span className="font-black text-slate-900 text-lg sm:text-xl block leading-tight">
                            {row.currency}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-400 font-medium">
                            {row.name}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Prix d'Achat (Vert) */}
                    <td className="py-6 px-6 sm:px-10 text-center">
                      <span className="inline-block bg-emerald-50 text-congo-greenDark border border-emerald-200/80 font-black px-5 py-2.5 rounded-xl text-lg sm:text-xl shadow-xs">
                        {row.buy}
                      </span>
                    </td>

                    {/* Prix de Vente (Rouge) */}
                    <td className="py-6 px-6 sm:px-10 text-center">
                      <span className="inline-block bg-red-50 text-congo-red border border-red-200/80 font-black px-5 py-2.5 rounded-xl text-lg sm:text-xl shadow-xs">
                        {row.sell}
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