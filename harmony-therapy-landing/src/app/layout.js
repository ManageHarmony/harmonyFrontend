import { Montserrat, Poppins } from 'next/font/google';
import "./globals.css";
import Footer from './components/Footer';
import Header from './components/Header';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Harmony Therapy",
  description: "Your trusted Mental Health Care/support",  // iski ma
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable}`}
      >
        <div className="w-full px-4 md:px-20">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}