"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HadithPage() {
  const [activeCollection, setActiveCollection] = useState('Sahih Bukhari');

  const collections = [
    { name: 'Sahih Bukhari', count: '7,563', origin: '9th Century' },
    { name: 'Sahih Muslim', count: '7,500', origin: '9th Century' },
    { name: 'Sunan an-Nasa\'i', count: '5,758', origin: '9th Century' },
    { name: 'Sunan Abi Dawud', count: '5,274', origin: '9th Century' },
    { name: 'Jami` at-Tirmidhi', count: '3,956', origin: '9th Century' },
    { name: 'Sunan Ibn Majah', count: '4,341', origin: '9th Century' },
  ];

  return (
    <main className="pt-40 pb-20 min-h-screen bg-[#FDFCFB] px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C5A059] text-[10px] uppercase tracking-[0.8em] font-bold block mb-6"
          >
            The Prophetic Traditions
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="text-6xl md:text-8xl font-serif text-[#1C1C1C]">
              The <span className="italic text-[#C5A059]">Hadith</span>
            </h1>
            <p className="max-w-xs text-[11px] uppercase tracking-[0.2em] text-stone-400 leading-relaxed">
              A verified scholarly archive of the Six Major Books (Al-Kutub al-Sittah), 
              curated for spiritual refinement.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Navigation — Collection Selector */}
          <div className="lg:col-span-4 space-y-2 border-l border-stone-200 pl-8">
            <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-8">Select Collection</p>
            {collections.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveCollection(item.name)}
                className={`flex flex-col w-full text-left py-4 transition-all duration-500 group ${
                  activeCollection === item.name ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                }`}
              >
                <span className="text-2xl font-serif italic group-hover:translate-x-2 transition-transform duration-500">
                  {item.name}
                </span>
                <span className="text-[9px] uppercase tracking-widest mt-1">
                  {item.count} Narrations • {item.origin}
                </span>
              </button>
            ))}
          </div>

          {/* Display — Cinematic Archive Reader */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCollection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="bg-white border border-stone-100 p-12 md:p-20 shadow-sm relative overflow-hidden h-full min-h-[550px]"
              >
                {/* Watermark */}
                <div className="absolute top-10 right-10 text-[80px] font-serif opacity-[0.03] pointer-events-none select-none italic text-right leading-none">
                  {activeCollection}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-16">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">Current Archive</p>
                    <h2 className="text-4xl font-serif">Verified Transmission</h2>
                  </div>

                  {/* Hadith Content Placeholders */}
                  <div className="flex-grow space-y-12">
                    {/* Arabic Skeletal */}
                    <div className="text-right space-y-4">
                      <div className="h-8 w-full bg-stone-50 ml-auto animate-pulse rounded-sm" />
                      <div className="h-8 w-2/3 bg-stone-50 ml-auto animate-pulse rounded-sm" />
                    </div>
                    
                    {/* Translation Skeletal */}
                    <div className="pt-12 border-t border-stone-100 space-y-3">
                      <p className="text-[9px] uppercase tracking-[0.4em] text-stone-300 mb-4">English Translation</p>
                      <div className="h-4 w-full bg-stone-50 animate-pulse rounded-sm" />
                      <div className="h-4 w-full bg-stone-50 animate-pulse rounded-sm" />
                      <div className="h-4 w-3/4 bg-stone-50 animate-pulse rounded-sm" />
                    </div>
                  </div>

                  {/* Footnotes / Sanad metadata */}
                  <div className="mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest text-stone-400 block">Grade: Muttafaqun Alayh (Sahih)</span>
                      <span className="text-[9px] uppercase tracking-widest text-stone-400 block">Archive Ref: HD-{activeCollection.split(' ')[1]?.toUpperCase() || 'SAHIH'}</span>
                    </div>
                    <button className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                      View Sanad Map
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