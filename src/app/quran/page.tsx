"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuranPage() {
  const [activeEdition, setActiveEdition] = useState('English');

  const editions = [
    { lang: 'English', translator: 'Sahih International', region: 'Global' },
    { lang: 'Français', translator: 'Muhammad Hamidullah', region: 'Europe' },
    { lang: 'Deutsch', translator: 'Frank Bubenheim', region: 'Europe' },
    { lang: 'Türkçe', translator: 'Diyanet İşleri', region: 'Eurasia' },
    { lang: 'Bahasa', translator: 'Kemenag', region: 'Southeast Asia' },
    { lang: 'Urdu', translator: 'Fateh Muhammad Jalandhari', region: 'South Asia' },
  ];

  return (
    <main className="pt-40 pb-20 min-h-screen bg-[#FAF9F6] px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C5A059] text-[10px] uppercase tracking-[0.8em] font-bold block mb-6"
          >
            The Linguistic Meridian
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="text-6xl md:text-8xl font-serif text-[#1C1C1C]">
              The <span className="italic">Archive</span>
            </h1>
            <p className="max-w-xs text-[11px] uppercase tracking-[0.2em] text-stone-400 leading-relaxed">
              Explore the sacred revelation across unique linguistic translations, 
              curated for historical and semantic accuracy.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Navigation — Edition Selector */}
          <div className="lg:col-span-4 space-y-2 border-l border-stone-200 pl-8">
            <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-8">Select Edition</p>
            {editions.map((edition) => (
              <button
                key={edition.lang}
                onClick={() => setActiveEdition(edition.lang)}
                className={`flex flex-col w-full text-left py-4 transition-all duration-500 group ${
                  activeEdition === edition.lang ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                }`}
              >
                <span className="text-2xl font-serif italic group-hover:translate-x-2 transition-transform duration-500">
                  {edition.lang}
                </span>
                <span className="text-[9px] uppercase tracking-widest mt-1">
                  {edition.translator} • {edition.region}
                </span>
              </button>
            ))}
          </div>

          {/* Display — Cinematic Archive Reader */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEdition}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="bg-white border border-stone-100 p-12 md:p-20 shadow-sm relative overflow-hidden h-full min-h-[500px]"
              >
                {/* Watermark Fix: Tag matching corrected */}
                <div className="absolute top-10 right-10 text-[120px] font-serif opacity-[0.03] pointer-events-none select-none italic">
                  {activeEdition}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-16">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">Current Selection</p>
                    <h2 className="text-4xl font-serif">{activeEdition} Translation</h2>
                  </div>

                  {/* Sacred Text Placeholders */}
                  <div className="flex-grow space-y-12">
                    <div className="text-right space-y-4">
                      <div className="h-8 w-3/4 bg-stone-50 ml-auto animate-pulse rounded-sm" />
                      <div className="h-8 w-1/2 bg-stone-50 ml-auto animate-pulse rounded-sm" />
                    </div>
                    
                    <div className="pt-12 border-t border-stone-100 space-y-3">
                      <div className="h-4 w-full bg-stone-50 animate-pulse rounded-sm" />
                      <div className="h-4 w-full bg-stone-50 animate-pulse rounded-sm" />
                      <div className="h-4 w-2/3 bg-stone-50 animate-pulse rounded-sm" />
                    </div>
                  </div>

                  <div className="mt-16 pt-8 border-t border-stone-100 flex justify-between items-center">
                    <span className="text-[9px] uppercase tracking-widest text-stone-400">Archival Reference: MS-QR-{activeEdition.slice(0,3).toUpperCase()}</span>
                    <button className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                      Open Manuscript
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </main>
  );
}