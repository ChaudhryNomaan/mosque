"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const SanctuaryDrawer = ({ isOpen, onClose, mosque }: any) => {
  const [timeLeft, setTimeLeft] = useState("02:45:12");

  // Simulating a live countdown (In a real app, you'd calculate this based on the next prayer time)
  useEffect(() => {
    const timer = setInterval(() => {
      // Logic for countdown would go here
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mosque) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] cursor-crosshair"
          />
          
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#FAF9F6] z-[101] shadow-2xl p-10 md:p-14 overflow-y-auto"
          >
            <button onClick={onClose} className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-12 hover:text-black transition-colors">
              [ Close Archive ]
            </button>

            <div className="space-y-10">
              <header>
                <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Heritage Profile</span>
                <h2 className="text-5xl font-serif italic leading-tight">{mosque.name}</h2>
              </header>

              {/* LIVE PRAYER ENGINE SECTION */}
              <div className="bg-[#1C1C1C] p-8 rounded-[2px] text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] mb-1">Current Focus</p>
                      <h4 className="text-2xl font-serif italic">{mosque.nextPrayer.split(' • ')[0]}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-1">Iqamah</p>
                      <p className="text-sm font-medium">{mosque.nextPrayer.split(' • ')[1]}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-white/40 mb-2">Time Remaining</p>
                    <div className="text-4xl font-light tracking-tighter flex items-baseline gap-2">
                      {timeLeft}
                      <span className="text-[10px] uppercase tracking-widest text-[#C5A059]">Until Adhan</span>
                    </div>
                  </div>
                </div>
                {/* Subtle animated pulse to show it's "Live" */}
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[#C5A059] animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-8 border-y border-stone-200 py-8">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-2">Sanctuary Lead</p>
                  <p className="text-sm font-medium">{mosque.imam}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-2">Distance</p>
                  <p className="text-sm font-medium">{mosque.distance}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif italic text-xl">Architectural History</h3>
                <p className="text-xs leading-relaxed text-stone-500 font-light">
                  This sanctuary serves as a beacon of minimalist Islamic architecture. 
                  Designed to harmonize light and shadow, it offers a silent space 
                  for contemplation.
                </p>
              </div>

              <div className="pt-4">
                <button className="w-full luxury-button !bg-transparent hover:!bg-[#1C1C1C]">
                  Get Visitation Path
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};