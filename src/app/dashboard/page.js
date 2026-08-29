'use client';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Espace Administration</h1>
            <p className="text-sm text-slate-500">Mise à jour rapide des taux de change sur le site public.</p>
          </div>
          <span className="bg-congo-green text-white text-xs px-3 py-1 rounded-full font-semibold">En Ligne</span>
        </header>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-700 mb-6">Modifier les Taux du Jour</h2>
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* USD */}
              <div className="p-4 border border-slate-200 rounded-xl space-y-3">
                <span className="font-bold text-slate-800">🇺🇸 Dollar Américain (USD)</span>
                <div>
                  <label className="text-xs text-slate-500">Taux Achat (FCFA)</label>
                  <input type="number" defaultValue="610" className="w-full p-2 border rounded-lg font-semibold" />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Taux Vente (FCFA)</label>
                  <input type="number" defaultValue="625" className="w-full p-2 border rounded-lg font-semibold" />
                </div>
              </div>

              {/* EUR */}
              <div className="p-4 border border-slate-200 rounded-xl space-y-3">
                <span className="font-bold text-slate-800">🇪🇺 Euro (EUR)</span>
                <div>
                  <label className="text-xs text-slate-500">Taux Achat (FCFA)</label>
                  <input type="number" defaultValue="650" className="w-full p-2 border rounded-lg font-semibold" />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Taux Vente (FCFA)</label>
                  <input type="number" defaultValue="655" className="w-full p-2 border rounded-lg font-semibold" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-congo-green text-white px-8 py-3 rounded-xl font-bold hover:bg-congo-greenDark transition"
            >
              Publier les nouveaux taux
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}