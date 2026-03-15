import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; 
import { Footer } from "@/components/Footer"; // 1. Import the Footer

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MINARET | Global Sanctuary Archive",
  description: "A cinematic digital archive of sacred spaces and prophetic wisdom.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-[#FAF9F6]`}>
        {/* The Navbar is global */}
        <Navbar />
        
        {/* The main content of your pages */}
        {children}

        {/* 2. The Footer is now global and appears at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}