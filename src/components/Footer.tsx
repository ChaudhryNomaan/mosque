"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Synced with your Navbar: Collections, Timings, Quran, Hadith
  const footerLinks = [
    { name: "Collections", href: "/collections" },
    { name: "Timings", href: "/nearby" }, // Points to your Nearby/Prayer finder
    { name: "Quran", href: "/quran" },
    { name: "Hadith", href: "/hadith" },
  ];

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#D4AF37]/10 py-20 px-6 md:px-24 text-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-sm">
            <h2 className="text-3xl font-serif tracking-tighter mb-6">
              Light of <br />
              <span className="italic text-[#C5A059]">Every Minaret</span>
            </h2>
            <p className="text-xs leading-relaxed text-stone-500 uppercase tracking-widest font-light">
              A digital repository dedicated to the preservation and celebration of sacred global architecture.
            </p>
          </div>

          {/* Synced Navigation Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-6">
            {footerLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-[#C5A059] transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative h-px w-full bg-stone-200 mb-12">
          <div className="absolute left-0 top-0 h-px w-24 bg-[#C5A059]" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="text-[9px] text-stone-400 uppercase tracking-[0.5em]">
              © {currentYear} Global Sanctuary Archive
            </span>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[8px] text-stone-300 uppercase tracking-[0.4em] mb-1">Current Meridian</span>
              <span className="text-[10px] font-mono text-stone-500 uppercase">GMT +05:00</span>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center cursor-pointer"
            >
              <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
            </motion.div>
          </div>
        </div>

        <div className="mt-20 text-center">
            <p className="text-[7px] text-stone-300 uppercase tracking-[1em] leading-loose max-w-2xl mx-auto">
                Built to honor the stillness of sacred spaces. All data is verified through community leadership and historical archives.
            </p>
        </div>
      </div>
    </footer>
  );
};