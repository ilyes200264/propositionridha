import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBox – Stratégie de lancement, acquisition & ROI",
  description: "Stratégie complète de lancement pour iBox : budgets publicitaires, acquisition de leads, modèle de revenus et ROI. Cadre réaliste pour un marché test local/régional.",
  keywords: ["iBox", "stratégie lancement", "acquisition", "ROI", "logistics", "transport", "déménagement"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
