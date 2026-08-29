export default function RateTable() {
  const rates = [
    { currency: 'USD ($)', flag: '🇺🇸', buy: '610 FCFA', sell: '625 FCFA' },
    { currency: 'EUR (€)', flag: '🇪🇺', buy: '650 FCFA', sell: '655 FCFA' },
    { currency: 'GBP (£)', flag: '🇬🇧', buy: '770 FCFA', sell: '790 FCFA' },
  ];

  return (
    <section id="taux" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Taux de Change en Direct</h2>
          <p className="text-sm text-congo-green font-medium mt-1">Dernière mise à jour : Aujourd'hui à 09h00</p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-congo-green text-white text-sm uppercase">
                <th className="p-4 rounded-tl-2xl">Devise</th>
                <th className="p-4">Nous Achetons</th>
                <th className="p-4 rounded-tr-2xl">Nous Vendons</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {rates.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition">
                  <td className="p-4 flex items-center gap-3">
                    <span className="text-2xl">{row.flag}</span>
                    <span className="font-bold text-slate-700">{row.currency}</span>
                  </td>
                  <td className="p-4 text-congo-green font-bold">{row.buy}</td>
                  <td className="p-4 text-congo-red font-bold">{row.sell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}