"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-40 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] mb-4 block">Joining the Archive</span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-16">Choose your <span className="italic">Presence</span></h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* OPTION 1: THE SEEKER */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 bg-white border border-stone-100 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#C5A059] transition-colors duration-500">
              <div className="w-2 h-2 bg-stone-300 group-hover:bg-white rounded-full" />
            </div>
            <h3 className="text-2xl font-serif mb-4">The Seeker</h3>
            <p className="text-sm text-stone-500 font-light leading-relaxed mb-10">
              For individuals looking to discover nearby sanctuaries, track prayer timings, and support sacred restorations.
            </p>
            
            {/* LINKED: Navigates to the Seeker/User Dashboard */}
            <Link href="/dashboard/me" className="w-full">
              <button className="w-full py-4 bg-[#1C1C1C] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#C5A059] transition-colors duration-500">
                Create Personal Account
              </button>
            </Link>
          </motion.div>

          {/* OPTION 2: THE GUARDIAN */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 bg-white border border-[#C5A059]/20 flex flex-col items-center text-center group cursor-pointer relative"
          >
            <div className="absolute top-6 right-6 text-[8px] tracking-widest text-[#C5A059] border border-[#C5A059] px-2 py-1 uppercase font-bold">Official</div>
            <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-8">
              <div className="w-3 h-[1px] bg-[#C5A059]" />
            </div>
            <h3 className="text-2xl font-serif mb-4">The Guardian</h3>
            <p className="text-sm text-stone-500 font-light leading-relaxed mb-10">
              For mosque administrators to manage timings, provide live restoration updates, and oversee community donations.
            </p>

            {/* LINKED: Navigates to the Mosque Admin Dashboard */}
            <Link href="/dashboard/mosque" className="w-full">
              <button className="w-full py-4 border border-stone-900 text-stone-900 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-900 hover:text-white transition-all duration-500">
                Register a Sanctuary
              </button>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </main>
  );
}