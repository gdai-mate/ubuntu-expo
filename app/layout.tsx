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
  title: "Ubuntu Expo - Art, Culture & Music Festival | Minjerribah",
  description: "Ubuntu Expo brings together art, culture, music, and community on Minjerribah (Stradbroke Island). I am because we are.",
  keywords: ["Ubuntu Expo", "Minjerribah", "Stradbroke Island", "art festival", "music festival", "cultural festival", "community"],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Ubuntu Expo - Art, Culture & Music Festival",
    description: "Celebrating art, culture, and music on Minjerribah. I am because we are.",
    type: "website",
    url: "https://ubuntu-expo.com",
    siteName: "Ubuntu Expo",
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
    title: "Ubuntu Expo - Art, Culture & Music Festival",
    description: "Celebrating art, culture, and music on Minjerribah. I am because we are.",
    images: ["/ubuntu-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
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
