"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SeekerDashboard() {
  const pinnedMosques = [
    { name: "Sultan Ahmed Center", nextPrayer: "Maghrib", time: "19:20", status: "Open" },
    { name: "Fatih Sanctuary", nextPrayer: "Maghrib", time: "19:15", status: "Restoration" }
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-12">
          <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold">Personal Sanctuary</span>
          <h1 className="text-4xl font-serif mt-2">Peace be upon you, <span className="italic">Liza</span></h1>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pinned Sanctuaries */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Your Followed Sanctuaries</h3>
            {pinnedMosques.map((mosque) => (
              <div key={mosque.name} className="bg-white border border-stone-100 p-6 flex justify-between items-center group hover:border-[#C5A059] transition-all">
                <div>
                  <h4 className="font-serif text-lg group-hover:italic transition-all">{mosque.name}</h4>
                  <p className="text-[9px] text-stone-400 uppercase tracking-widest mt-1">Next: {mosque.nextPrayer} at {mosque.time}</p>
                </div>
                <div className={`px-3 py-1 text-[8px] uppercase tracking-widest border ${mosque.status === 'Open' ? 'border-green-100 text-green-600' : 'border-[#C5A059]/30 text-[#C5A059]'}`}>
                  {mosque.status}
                </div>
              </div>
            ))}
          </div>

          {/* Impact Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-stone-100 p-8">
              <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6">Your Contributions</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-stone-50 pb-2">
                  <span className="text-xs text-stone-500">Total Donated</span>
                  <span className="text-xs font-mono font-bold">$120.00</span>
                </div>
                <div className="flex justify-between border-b border-stone-50 pb-2">
                  <span className="text-xs text-stone-500">Restorations Funded</span>
                  <span className="text-xs font-mono font-bold">03</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-[#1C1C1C] text-white text-[9px] uppercase tracking-widest font-bold">
                View Impact Report
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}