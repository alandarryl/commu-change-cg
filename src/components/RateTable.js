export default function RateTable() {
  const rates = [
    { currency: 'USD ($)', name: 'Dollar Américain', flag: '🇺🇸', buy: '610 FCFA', sell: '625 FCFA' },
    { currency: 'EUR (€)', name: 'Euro', flag: '🇪🇺', buy: '650 FCFA', sell: '655 FCFA' },
    { currency: 'XOF (Fr)', name: 'Franc CFA (BCEAO)', flag: '🇸🇳', buy: '100 FCFA', sell: '105 FCFA' },
  ];

  return (
    <section id="taux" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="text-center mb-8">
          <span className="text-congo-green text-xs font-bold uppercase tracking-widest bg-emerald-100/60 px-3 py-1 rounded-full">
            Mise à jour en direct
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Taux de Change du Jour
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-1">
            Dernière actualisation : <span className="text-slate-800 font-semibold">Aujourd'hui à 09h00</span>
          </p>
        </div>

        {/* Conteneur Tableau */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* En-tête */}
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <th className="p-4 sm:p-5 font-bold">Devise</th>
                  <th className="p-4 sm:p-5 font-bold text-center">ACHATS</th>
                  <th className="p-4 sm:p-5 font-bold text-center">VENTES</th>
                  {/* <th className="p-4 sm:p-5 font-bold text-right">Action</th> */}
                </tr>
              </thead>

              {/* Corps */}
              <tbody className="divide-y divide-slate-100 text-sm font-medium">
                {rates.map((row, i) => (
                  <tr 
                    key={i} 
                    className="hover:bg-emerald-50/40 transition-colors even:bg-slate-50/50"
                  >
                    {/* Nom de la devise */}
                    <td className="p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl drop-shadow-sm">{row.flag}</span>
                        <div>
                          <span className="font-extrabold text-slate-900 block leading-tight">
                            {row.currency}
                          </span>
                          <span className="text-xs text-slate-400 font-normal">
                            {row.name}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Prix d'Achat (Vert) */}
                    <td className="p-4 sm:p-5 text-center">
                      <span className="inline-block bg-emerald-50 text-congo-greenDark border border-emerald-200/60 font-extrabold px-3 py-1.5 rounded-lg text-base">
                        {row.buy}
                      </span>
                    </td>

                    {/* Prix de Vente (Rouge) */}
                    <td className="p-4 sm:p-5 text-center">
                      <span className="inline-block bg-red-50 text-congo-red border border-red-200/60 font-extrabold px-3 py-1.5 rounded-lg text-base">
                        {row.sell}
                      </span>
                    </td>

                    {/* Bouton WhatsApp direct */}
                    {/* <td className="p-4 sm:p-5 text-right">
                      <a
                        href={`https://wa.me/242000000000?text=Bonjour,%20je%20souhaite%20réserver%20des%20${encodeURIComponent(row.currency)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-slate-100 hover:bg-congo-green hover:text-white text-slate-700 font-bold text-xs px-3 py-2 rounded-lg transition"
                      >
                        Réserver
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Note d'information en bas */}
          {/* <div className="bg-slate-50 border-t border-slate-100 p-4 text-center text-xs text-slate-500">
            💡 Taux sujets à de légères variations selon le volume. Passez en agence ou contactez-nous sur WhatsApp pour bloquer un taux.
          </div> */}
        </div>

      </div>
    </section>
  );
}