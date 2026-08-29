'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre message a été envoyé ! Nous vous contacterons rapidement.');
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Titre de la page */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Contactez-nous</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Une question sur nos taux ? Besoin de réserver une grosse somme de devises ? Notre équipe est à votre disposition.
          </p>
          <div className="w-16 h-1 bg-congo-yellow mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Bloc Informations de Contact & Réseaux */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Nos Coordonnées</h2>
              
              <div className="space-y-6">
                {/* Localisation */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-congo-green/10 text-congo-green rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Adresse du Bureau</h3>
                    <p className="text-slate-600 text-sm">Avenue Amilcar Cabral, Centre-ville</p>
                    <p className="text-slate-600 text-sm font-semibold">Brazzaville, République du Congo</p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-congo-green/10 text-congo-green rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Téléphone</h3>
                    <p className="text-slate-600 text-sm">+242 06 000 00 00</p>
                    <p className="text-slate-600 text-sm">+242 05 000 00 00</p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-congo-green/10 text-congo-green rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                    🕒
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Heures d'ouverture</h3>
                    <p className="text-slate-600 text-sm">Lundi - Samedi : 08h00 - 18h00</p>
                    <p className="text-congo-red text-sm font-medium">Dimanche : Fermé</p>
                  </div>
                </div>
              </div>

              {/* Boutons d'action Réseaux Sociaux */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/242000000000?text=Bonjour,%20j'aimerais%20avoir%20des%20informations%20sur%20les%20taux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition shadow-sm"
                >
                  <span>💬 WhatsApp</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition shadow-sm"
                >
                  <span>📘 Facebook</span>
                </a>
              </div>
            </div>

            {/* Carte Google Maps (Emplacement Iframe) */}
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200 overflow-hidden h-64 relative">
              <iframe
                title="Localisation du bureau"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.978135891395!2d15.2750!3d-4.2633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTUnNDcuOSJTIDE1wrAxNiczMC4wIkU!5e0!3m2!1sfr!2scg!4v1600000000000!5m2!1sfr!2scg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nom complet</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Jean Mabiala"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-congo-green transition bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Numéro de téléphone</label>
                <input
                  type="tel"
                  required
                  placeholder="+242 06..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-congo-green transition bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message ou demande spécifique</label>
                <textarea
                  rows="5"
                  required
                  placeholder="Bonjour, je voudrais échanger 2000$ la semaine prochaine..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-congo-green transition bg-slate-50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-congo-green hover:bg-congo-greenDark text-white font-bold py-4 rounded-xl shadow-md transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}