"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MosqueCard } from '@/components/MosqueCard';
import { HeritageGallery } from '@/components/HeritageGallery';
import { SanctuaryDrawer } from '@/components/SanctuaryDrawer';

export default function Home() {
  // State for the Interactive Drawer
  const [selectedMosque, setSelectedMosque] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to trigger the detail view
  const handleOpenArchive = (mosque: any) => {
    setSelectedMosque(mosque);
    setIsDrawerOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* 1. TOP STATUS TICKER — Cinematic Data Feed */}
      <div className="w-full bg-[#1C1C1C] py-2 px-6 overflow-hidden hidden md:block">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20"
        >
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="text-[8px] uppercase tracking-[0.4em] text-[#C5A059]/60 font-medium">
              Live Feed: Maghrib Prayer approaching • 18:42 GMT+3 • Global Sanctuary Archive • Connected to 124 Meridians
            </span>
          ))}
        </motion.div>
      </div>

      <Navbar />
      <Hero />
      
      {/* 2. ARCHITECTURAL GALLERY — Visual Soul of the Archive */}
      <HeritageGallery />

      {/* 3. LIST SECTION — The Sanctuary Grid */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] mb-6">
              Nearby <span className="italic text-[#C5A059]">Sanctuaries</span>
            </h2>
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-medium">
              Curated locations within your current meridian
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:block h-[1px] w-48 bg-stone-200"></div>
            <button className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#1C1C1C] font-bold transition-colors hover:text-[#C5A059]">
              <span>Filter Archive</span>
              <span className="w-8 h-[1px] bg-[#1C1C1C] transition-all duration-500 group-hover:w-12 group-hover:bg-[#C5A059]" />
            </button>
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Card 01 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="space-y-12 lg:mt-24 cursor-pointer"
            onClick={() => handleOpenArchive({
              name: "Sultan Ahmed Center",
              distance: "0.4 km",
              nextPrayer: "Maghrib • 18:42",
              imam: "Sheikh Yusuf",
              image: "https://images.unsplash.com/photo-1590076215667-873917a2689d?q=80&w=1000&auto=format&fit=crop"
            })}
          >
            <MosqueCard 
              name="Sultan Ahmed Center" 
              distance="0.4 km" 
              nextPrayer="Maghrib • 18:42" 
              imam="Sheikh Yusuf" 
            />
          </motion.div>

          {/* Card 02 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="space-y-12 cursor-pointer"
            onClick={() => handleOpenArchive({
              name: "Ayasofya Heritage",
              distance: "1.1 km",
              nextPrayer: "Maghrib • 18:42",
              imam: "Dr. Erhan",
              image: "https://images.unsplash.com/photo-1542667261-0b3d88138d27?q=80&w=1000&auto=format&fit=crop"
            })}
          >
            <MosqueCard 
              name="Ayasofya Heritage" 
              distance="1.1 km" 
              nextPrayer="Maghrib • 18:42" 
              imam="Dr. Erhan" 
            />
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURE SECTION — Global Smart Sync */}
      <section className="px-8 md:px-16 py-32">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-[1400px] mx-auto bg-[#1C1C1C] overflow-hidden group rounded-[2px]"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-1000 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
          
          <div className="relative z-10 grid md:grid-cols-2 items-center">
            <div className="p-12 md:p-24">
              <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-medium block mb-8">
                The Connected Meridian
              </span>
              <h4 className="text-white font-serif text-5xl md:text-6xl leading-tight mb-10">
                Global <br /> <span className="italic text-[#C5A059]">Harmonization</span>
              </h4>
              <p className="text-white/50 text-sm font-light leading-relaxed mb-16 max-w-sm tracking-wide">
                Synchronize your spiritual journey with the world’s most significant 
                sacred spaces. Receive seamless alerts as you traverse global borders.
              </p>
              
              <button className="luxury-button !text-white !border-white/20 hover:!border-white">
                Enable Smart Sync
              </button>
            </div>

            <div className="h-96 md:h-full bg-[#252525] flex items-center justify-center border-l border-white/5 overflow-hidden">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="opacity-20"
               >
                 <svg width="400" height="400" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="48" stroke="#C5A059" strokeWidth="0.5" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="35" stroke="#C5A059" strokeWidth="0.2" />
                    <path d="M50 0V100M0 50H100" stroke="#C5A059" strokeWidth="0.1" />
                 </svg>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. SIDE DRAWER — Detail Archive Access */}
      <SanctuaryDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        mosque={selectedMosque} 
      />

      {/* 6. MINIMALIST FOOTER */}
      <footer className="py-32 text-center border-t border-stone-100 bg-white">
        <div className="mb-12 font-serif italic text-4xl text-[#1C1C1C]">Minaret</div>
        <div className="flex justify-center gap-12 text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-12 font-semibold">
            <a href="#" className="hover:text-[#C5A059] transition-colors">Archive</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Meridians</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">About</a>
        </div>
        <p className="text-[9px] uppercase tracking-[0.8em] text-stone-300">
          © 2026 — SECURE ARCHIVE ACCESS 
        </p>
      </footer>
    </main>
  );
}