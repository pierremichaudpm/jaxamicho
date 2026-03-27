import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaxa.ca"),
  title: "JAXA Production - Expériences immersives, mémorables et audacieuses",
  description:
    "Nous créons des expériences immersives, mémorables et audacieuses, où la culture, l'humain et la créativité rayonnent au centre de chaque projet. JAXA Production, Montréal.",
  openGraph: {
    title: "JAXA Production - Expériences immersives, mémorables et audacieuses",
    description:
      "Nous créons des expériences immersives, mémorables et audacieuses, où la culture, l'humain et la créativité rayonnent au centre de chaque projet. JAXA Production, Montréal.",
    type: "website",
    locale: "fr_FR",
    url: "https://jaxa.ca",
    siteName: "JAXA Production",
    images: [
      {
        url: "/jaxa-logo-1200.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAXA Production - Expériences immersives, mémorables et audacieuses",
    description:
      "Nous créons des expériences immersives, mémorables et audacieuses, où la culture, l'humain et la créativité rayonnent au centre de chaque projet.",
    images: ["/jaxa-logo-1200.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/jaxa-icon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
