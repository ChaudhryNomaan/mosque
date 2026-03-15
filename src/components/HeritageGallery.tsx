"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const HeritageGallery = () => {
  return (
    <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Large Cinematic Image */}
        <motion.div 
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="md:col-span-7 relative group overflow-hidden bg-stone-100 aspect-[4/5] md:aspect-video"
        >
          <img 
            src="https://images.unsplash.com/photo-1542667261-0b3d88138d27?q=80&w=2070&auto=format&fit=crop" 
            alt="Sacred Geometry"
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute bottom-8 left-8 text-white z-10">
            <p className="text-[10px] uppercase tracking-[0.4em] mb-2 opacity-70">Detail No. 042</p>
            <h3 className="text-2xl font-serif italic">Grand Serenity Arch</h3>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>

        {/* Right Side: Editorial Text & Small Detail Image */}
        <div className="md:col-span-5 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-xs"
          >
            <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-semibold block mb-6">
              The Aesthetic
            </span>
            <h2 className="text-3xl font-serif text-[#1C1C1C] leading-snug mb-6">
              Geometry <br /> <span className="italic">Meets Grace</span>
            </h2>
            <p className="text-xs text-stone-500 leading-relaxed tracking-wide">
              Every curve and angle in our archive is selected for its spiritual resonance 
              and architectural significance. We document the silent language of stone and light.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="relative w-full aspect-square bg-stone-100 overflow-hidden border-[1px] border-stone-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1564507592333-c60657eaa0ae?q=80&w=1974&auto=format&fit=crop" 
              alt="Minaret Detail"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};