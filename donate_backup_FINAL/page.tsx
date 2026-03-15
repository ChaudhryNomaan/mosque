"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MosqueChoicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const formattedName = id.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter text-stone-900 mb-6">
            Supporting <span className="italic text-[#C5A059]">{formattedName}</span>
          </h1>
          <p className="text-stone-400 uppercase text-[10px] tracking-[0.5em]">Select a path for your contribution</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* OPTION 1: View Restoration (Links to Live Update) */}
          <Link href={`/live-update/${id}`}>
            <motion.div whileHover={{ y: -10 }} className="group bg-white border border-stone-100 p-12 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border-t-4 border-t-[#C5A059]">
              <h2 className="text-3xl font-serif mb-4">Restoration Fund</h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8">
                View active repair logs, technical data, and footage. Donate specifically to structural preservation and artisan labor.
              </p>
              <span className="text-[9px] uppercase tracking-widest font-bold group-hover:pl-4 transition-all">Enter Restoration Log →</span>
            </motion.div>
          </Link>

          {/* OPTION 2: Simple Donate (Opens a direct payment) */}
          <Link href={`/donate/checkout?id=${id}`}>
            <motion.div whileHover={{ y: -10 }} className="group bg-stone-900 text-white p-12 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <h2 className="text-3xl font-serif mb-4">General Donation</h2>
              <p className="text-stone-400 font-light leading-relaxed mb-8">
                A simple, direct contribution to the daily maintenance, utilities, and community services of this mosque.
              </p>
              <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A059]">Simple Donation →</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </main>
  );
}