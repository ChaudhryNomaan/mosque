"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; 

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="min-h-[90vh] bg-[#FAF9F6]" />;
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 bg-[#FAF9F6] overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
      <div className="absolute inset-10 border border-[#D4AF37]/10 pointer-events-none hidden lg:block" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mb-10"
        >
          <span className="text-[#C5A059] text-[10px] md:text-[12px] uppercase font-medium tracking-[0.5em]">
            The Global Sanctuary Archive
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-[6.5rem] font-serif text-[#1C1C1C] leading-[1.05] mb-8 tracking-tight">
          Light of <br /> 
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="italic font-light text-[#C5A059]"
          >
            Every Minaret
          </motion.span>
        </h1>

        <p className="max-w-2xl mx-auto text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed mb-16 opacity-80">
          A curated digital sanctuary celebrating sacred architecture. Explore precise 
          prayer timings, historical lineages, and community leadership through 
          a lens of timeless elegance.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* NEARBY: Linked to /nearby folder */}
          <Link href="/nearby">
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "#C5A059" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-[#1C1C1C] text-white text-[11px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 shadow-2xl"
            >
              Find Nearby Mosque
            </motion.button>
          </Link>

          {/* ATLAS: Updated href to match your /collections folder structure */}
          <Link href="/collections">
            <button className="group relative text-[#1C1C1C] text-[11px] uppercase tracking-[0.3em] font-semibold">
              Explore the Atlas
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-500 group-hover:w-full" />
            </button>
          </Link>
        </div>
      </motion.div>

      <div className="absolute left-1/2 bottom-0 w-[1px] h-24 bg-gradient-to-t from-[#C5A059]/40 to-transparent transform -translate-x-1/2" />
      
      <div className="absolute left-12 top-1/2 -rotate-90 origin-left hidden xl:block">
        <span className="text-[9px] text-stone-400 uppercase tracking-[0.8em]">EST. MMXXVI — ARCHIVE NO. 01</span>
      </div>
    </section>
  );
};