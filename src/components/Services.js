const services = [
  { icon: '💵', title: 'Achat & Vente de Devises', desc: 'Échangez vos dollars (USD), euros (EUR) et Francs CFA au meilleur cours.' },
  { icon: '📱', title: 'Transfert Mobile Money', desc: 'Dépôt et retrait rapides via Mobile Money directement en agence.' },
  { icon: '🔒', title: 'Réservation de Taux', desc: 'Bloquez votre taux via WhatsApp et venez récupérer vos espèces en agence.' },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Nos Services</h2>
        <div className="w-16 h-1 bg-congo-yellow mx-auto mb-10 rounded-full"></div>

        {/* 1 Ligne sur Desktop (md:grid-cols-3), empilé sur Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition bg-slate-50 border-t-4 border-t-congo-green"
            >
              <div className="text-4xl mb-4">{srv.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{srv.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}