import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Bureau de Change Brazzaville | Meilleurs Taux Devises',
  description: 'Échangez vos dollars et euros au meilleur taux à Brazzaville.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-slate-50 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}