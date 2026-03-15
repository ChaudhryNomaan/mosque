"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const HISTORICAL_MOSQUES = [
  {
    id: "01",
    slug: "masjid-al-haram",
    name: "Masjid Al-Haram",
    region: "Middle East",
    location: "Mecca, Saudi Arabia",
    era: "First Sanctuary",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d8f7ec?q=80&w=2000",
  },
  {
    id: "02",
    slug: "al-aqsa",
    name: "Al-Aqsa Sanctuary",
    region: "Levant",
    location: "Jerusalem, Palestine",
    era: "Umayyad",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2000",
  },
  {
    id: "03",
    slug: "great-mosque-kairouan",
    name: "Uqba Mosque",
    region: "North Africa",
    location: "Kairouan, Tunisia",
    era: "Aghlabid",
    image: "https://images.unsplash.com/photo-1590075865003-e48267cae26a?q=80&w=2000",
  },
  {
    id: "04",
    slug: "great-mosque-xian",
    name: "Great Mosque of Xi'an",
    region: "East Asia",
    location: "Xi'an, China",
    era: "Tang Dynasty",
    image: "https://images.unsplash.com/photo-1512401140081-30691584c98f?q=80&w=2000",
  },
  {
    id: "05",
    slug: "djenne-mosque",
    name: "Great Mosque of Djenné",
    region: "West Africa",
    location: "Djenné, Mali",
    era: "Sudano-Sahelian",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=2000",
  }
];

export default function CollectionsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-40 pb-20 px-6 md:px-24">
      {/* Background Preview (Changes on Hover) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10 transition-opacity duration-700">
        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HISTORICAL_MOSQUES[hoveredIndex].image})` }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-24 flex justify-between items-end">
          <div>
            <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.8em] font-bold block mb-6">World Heritage Archive</span>
            <h1 className="text-6xl md:text-9xl font-serif text-[#1C1C1C]">The <span className="italic">Sanctuaries</span></h1>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-[10px] uppercase tracking-widest text-stone-400">Total Curated</p>
             <p className="text-4xl font-serif text-[#C5A059]">{HISTORICAL_MOSQUES.length}</p>
          </div>
        </div>

        {/* The List Interface */}
        <div className="border-t border-stone-200">
          {HISTORICAL_MOSQUES.map((m, idx) => (
            <Link key={m.id} href={`/collections/${m.slug}`}>
              <motion.div 
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group py-12 border-b border-stone-200 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-colors hover:bg-white"
              >
                <div className="flex items-center gap-12 mb-4 md:mb-0">
                  <span className="text-[10px] font-mono text-stone-400 group-hover:text-[#C5A059] transition-colors">
                    {m.id}
                  </span>
                  <div>
                    <h2 className="text-4xl md:text-6xl font-serif group-hover:translate-x-4 transition-transform duration-500">
                      {m.name}
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mt-2">
                      {m.era} — {m.region}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                   <p className="text-xs uppercase tracking-widest text-stone-300 group-hover:text-stone-600 italic">
                     {m.location}
                   </p>
                   <div className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all">
                      <span className="text-stone-300 group-hover:text-white transition-colors">→</span>
                   </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}