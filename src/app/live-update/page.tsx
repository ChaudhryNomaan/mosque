"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const REPAIR_DATA = [
  {
    id: "sultan-ahmed",
    mosque: "Sultan Ahmed Mosque",
    location: "Istanbul, Turkey",
    task: "Lead & Tile Conservation",
    summary: "Replacing oxidized lead sheets and restoring 20,000+ handmade İznik tiles.",
  },
  {
    id: "djenne",
    mosque: "Great Mosque of Djenné",
    location: "Mali",
    task: "Annual Structural Rendering",
    summary: "The community-led 'Crepissage' festival to protect mud-brick walls from rain.",
  },
  {
    id: "wazir-khan",
    mosque: "Wazir Khan Mosque",
    location: "Lahore, Pakistan",
    task: "Kashi-Kari Facade Restoration",
    summary: "Cleaning 17th-century tile mosaics and fresco conservation in the prayer hall.",
  }
];

export default function LiveUpdatePage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 px-6 md:px-24">
      <header className="mb-16 border-b border-stone-200 pb-12">
        <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-tighter text-stone-900">
          Site <span className="italic text-[#C5A059]">Log</span>
        </h1>
        <p className="text-stone-400 uppercase text-[10px] tracking-[0.5em]">Real-time Structural Maintenance</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REPAIR_DATA.map((item) => (
          <Link key={item.id} href={`/live-update/${item.id}`}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer bg-white border border-stone-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] text-[#C5A059] font-bold tracking-widest uppercase mb-4 block">{item.location}</span>
                <h2 className="text-3xl font-serif mb-6 group-hover:italic transition-all text-stone-800">{item.mosque}</h2>
                <div className="w-full h-px bg-stone-100 mb-6" />
                <p className="text-sm text-stone-600 italic leading-relaxed mb-8">"{item.task}"</p>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-stone-400 border-b border-stone-100 pb-1 w-fit group-hover:text-black group-hover:border-black transition-colors">
                View Work Details →
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}