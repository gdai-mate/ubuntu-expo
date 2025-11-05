import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  title: "Ubuntu Expo - Art, Culture & Music Festival | Minjerribah (North Stradbroke Island)",
  description: "Ubuntu Expo brings together art, culture, music, and community on Minjerribah (North Stradbroke Island, Straddie). Experience cultural festivals on Quandamooka Country at Point Lookout Community Hall. I am because we are.",
  keywords: [
    "Ubuntu Expo",
    "Minjerribah",
    "North Stradbroke Island",
    "Stradbroke Island",
    "Straddie",
    "art festival",
    "music festival",
    "cultural festival",
    "community",
    "Point Lookout",
    "Quandamooka Country",
    "Brisbane Bay Islands",
    "Queensland festivals",
    "island events",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Ubuntu Expo - Art, Culture & Music Festival | Minjerribah",
    description: "Celebrating art, culture, and music on Minjerribah (North Stradbroke Island). I am because we are.",
    type: "website",
    url: "https://ubuntu-expo.com",
    siteName: "Ubuntu Expo",
    locale: "en_AU",
    images: [
      {
        url: "/ubuntu-logo.png",
        width: 1200,
        height: 630,
        alt: "Ubuntu Expo - I am because we are",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubuntu Expo - Art, Culture & Music Festival | Minjerribah",
    description: "Celebrating art, culture, and music on Minjerribah (North Stradbroke Island). I am because we are.",
    images: ["/ubuntu-logo.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ubuntu-expo.com/#organization",
      name: "Ubuntu Expo",
      url: "https://ubuntu-expo.com",
      logo: "https://ubuntu-expo.com/ubuntu-logo.png",
      sameAs: ["https://www.instagram.com/ubuntu.expo"],
      description: "Art, culture, and music festival celebrating community on Minjerribah (North Stradbroke Island)",
    },
    {
      "@type": "Event",
      "@id": "https://ubuntu-expo.com/#event",
      name: "Ubuntu Expo",
      description: "Ubuntu Expo brings together art, culture, music, and community on Minjerribah (North Stradbroke Island). I am because we are.",
      organizer: {
        "@id": "https://ubuntu-expo.com/#organization",
      },
      location: {
        "@type": "Place",
        name: "Community Hall, Point Lookout",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Point Lookout",
          addressLocality: "North Stradbroke Island",
          addressRegion: "QLD",
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-27.4397",
          longitude: "153.5361",
        },
      },
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
    },
    {
      "@type": "Place",
      "@id": "https://ubuntu-expo.com/#place",
      name: "Minjerribah (North Stradbroke Island)",
      alternateName: ["North Stradbroke Island", "Straddie", "Stradbroke Island"],
      description: "Quandamooka Country, Brisbane Bay Islands, Queensland",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-27.4397",
        longitude: "153.5361",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "North Stradbroke Island",
        addressRegion: "Queensland",
        addressCountry: "AU",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full m-0 p-0`}
      >
        <Navigation />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
