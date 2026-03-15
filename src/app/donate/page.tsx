"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Using the IDs that match your restoration data
const ALL_MOSQUES = [
  { id: "sultan-ahmed", name: "Sultan Ahmed Mosque", location: "Istanbul, Turkey" },
  { id: "djenne", name: "Great Mosque of Djenné", location: "Djenné, Mali" },
  { id: "wazir-khan", name: "Wazir Khan Mosque", location: "Lahore, Pakistan" },
  { id: "sheikh-zayed", name: "Sheikh Zayed Grand Mosque", location: "Abu Dhabi, UAE" },
];

export default function DonateSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMosques = ALL_MOSQUES.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="pt-40 min-h-screen bg-[#FAF9F6] px-6 pb-20 relative">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#C5A059] text-[10px] uppercase tracking-[0.8em] font-bold block mb-6">
            Global Contribution
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1C1C1C] mb-8">
            The <span className="italic text-[#C5A059]">Offering</span>
          </h1>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <input 
            type="text"
            placeholder="Search sanctuary by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-b border-stone-200 py-6 text-sm tracking-[0.3em] uppercase focus:outline-none focus:border-[#C5A059] transition-colors text-center"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMosques.map((mosque) => (
              <Link key={mosque.id} href={`/donate/${mosque.id}`}>
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-10 border border-stone-100 bg-white hover:border-[#C5A059] cursor-pointer group transition-all duration-700 shadow-sm hover:shadow-xl h-full"
                >
                  <span className="text-[9px] text-[#C5A059] tracking-widest block mb-4 group-hover:tracking-[0.4em] transition-all">CHOOSE SANCTUARY</span>
                  <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">{mosque.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400">{mosque.location}</p>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}