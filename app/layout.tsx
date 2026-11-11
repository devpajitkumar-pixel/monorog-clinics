import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MedicalClinicJsonLd } from "@/components/layout/JsonLd";
import { clinicConfig } from "@/data/clinic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E4D54",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://manorogclinic.com"),
  title: {
    default: `${clinicConfig.name} | Dr. Ravinder Mohan Sharma | Majitha Road, Amritsar`,
    template: `%s | ${clinicConfig.name} Amritsar`,
  },
  description: clinicConfig.description,
  keywords: [
    "Manorog Clinic",
    "Dr Ravinder Mohan Sharma",
    "Psychiatrist in Amritsar",
    "Psychiatrist Majitha Road Amritsar",
    "Indian Psychiatric Society Amritsar",
    "Mental health clinic Amritsar",
    "Depression treatment Amritsar",
    "Anxiety consultation Amritsar",
    "Sleep and insomnia clinic Amritsar",
    "Psychiatric pharmacy Amritsar",
  ],
  authors: [{ name: clinicConfig.name }],
  creator: clinicConfig.name,
  publisher: clinicConfig.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${clinicConfig.name} | Premier Medical Clinic in Amritsar`,
    description: clinicConfig.description,
    url: "https://manorogclinic.com",
    siteName: clinicConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicConfig.name} Amritsar`,
    description: clinicConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <MedicalClinicJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
