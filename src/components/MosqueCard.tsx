"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface MosqueProps {
  name: string;
  distance: string;
  nextPrayer: string;
  imam: string;
}

export const MosqueCard = ({ name, distance, nextPrayer, imam }: MosqueProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className="group relative bg-white border-[0.5px] border-stone-200 p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(197,160,89,0.08)]"
    >
      {/* Top Accent Line - Only visible on hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

      <div className="flex justify-between items-start mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] font-medium">
              Active Sanctuary
            </p>
          </div>
          <h3 className="text-2xl font-serif text-[#1C1C1C] tracking-tight group-hover:italic transition-all duration-500">
            {name}
          </h3>
        </div>
        
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-mono text-stone-400 tracking-tighter italic">
            {distance}
          </span>
          <div className="w-8 h-[1px] bg-stone-200 mt-2 group-hover:w-12 group-hover:bg-[#C5A059] transition-all duration-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0 border-t border-stone-100">
        <div className="pt-6 pr-4">
          <p className="text-[8px] uppercase tracking-[0.3em] text-stone-400 mb-2">Upcoming</p>
          <p className="text-sm font-medium text-[#1C1C1C] tracking-wide uppercase italic">
            {nextPrayer}
          </p>
        </div>
        
        <div className="pt-6 pl-6 border-l border-stone-100 relative">
          <p className="text-[8px] uppercase tracking-[0.3em] text-stone-400 mb-2">Spiritual Lead</p>
          <p className="text-sm font-medium text-[#1C1C1C] tracking-wide uppercase leading-tight">
            {imam}
          </p>
          {/* Watermark/Motif SVG has been removed from here */}
        </div>
      </div>

      {/* Modernist Footer Button */}
      <button className="mt-10 w-full flex items-center justify-between group/btn">
        <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#1C1C1C]">
          View Heritage
        </span>
        <div className="overflow-hidden w-5">
           <div className="flex transition-transform duration-500 transform group-hover/btn:translate-x-full">
             <span className="text-[#C5A059] ml-1">→</span>
             <span className="text-[#C5A059] -translate-x-full">→</span>
           </div>
        </div>
      </button>
    </motion.div>
  );
};