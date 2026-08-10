import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { config } from "@/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EnderCraft.pl",
  description: "Strona internetowa serwera EnderCraft.pl",
  openGraph: {
    title: "EnderCraft.pl - Najlepszy Serwer Minecraft Survival + Gildie",
    description: `Wbijaj na serwer! IP: ${config.serverIP} |  Dołącz do naszej społeczności na Discordzie!`,
    url: `https://${config.serverIP}`,
    siteName: config.serverIP,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Baner  serwera EnderCraft.pl",
      },
    ],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
