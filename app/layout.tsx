import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import type { Metadata } from "next";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Partyservice Alexander",
    default: "Partyservice Alexander - Catering für jeden Anlass",
  },
  description:
    "Partyservice Alexander bietet professionelles Catering für Hochzeiten, Geburtstage, Firmenevents und mehr. Wir erstellen kulinarische Erlebnisse, die Ihre Feier unvergesslich machen.",
  keywords: [
    "Partyservice",
    "Catering",
    "Hochzeitscatering",
    "Eventcatering",
    "Firmenfeier",
    "Geburtstag",
    "Buffet",
    "Menü",
    "Fingerfood",
    "Villingen-Schwenningen",
    "Rottweil",
    "Balingen"
  ],
  openGraph: {
    images: [
      {
        url: '/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Partyservice Alexander Logo',
      },
    ],
  },
};

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfairDisplay.variable} ${lato.variable} ${dancingScript.variable}`}>
      <body>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodService",
              name: "Partyservice Alexander",
              address: {
                "@type": "PostalAddress",
                "streetAddress": "Sternenstr. 2",
                "addressLocality": "Wellendingen",
                "postalCode": "78669",
                "addressCountry": "DE",
              },
              servesCuisine: "Varies",
              telephone: "+4974269316915",
              email: "info@partyservice-alexander.de",
              url: "https://www.partyservice-alexander.de",
              image: "https://www.partyservice-alexander.de/logo.jpeg",
              logo: "https://www.partyservice-alexander.de/logo.jpeg",
              description:
                "Partyservice Alexander bietet professionelles Catering für Hochzeiten, Geburtstage, Firmenevents und mehr.",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              geo: {
                "@type": "GeoCoordinates",
                "latitude": "48.14376",
                "longitude": "8.70931",
              },
              priceRange: "€€",
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
