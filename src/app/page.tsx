"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MosqueCard } from '@/components/MosqueCard';
import { HeritageGallery } from '@/components/HeritageGallery';
import { SanctuaryDrawer } from '@/components/SanctuaryDrawer';

export default function Home() {
  const [selectedMosque, setSelectedMosque] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [qiblaDirection, setQiblaDirection] = useState(0);
  const [compassHeading, setCompassHeading] = useState(0);
  const [isLive, setIsLive] = useState(false);

  const handleOrientation = (e: any) => {
    if (e.webkitCompassHeading) {
      setCompassHeading(e.webkitCompassHeading);
    } else if (e.alpha) {
      setCompassHeading(360 - e.alpha);
    }
  };

  const enableQibla = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat1 = position.coords.latitude * Math.PI / 180;
        const lng1 = position.coords.longitude * Math.PI / 180;
        const lat2 = 21.4225 * Math.PI / 180; 
        const lng2 = 39.8262 * Math.PI / 180; 

        const y = Math.sin(lng2 - lng1);
        const x = Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(lng2 - lng1);
        let bearing = Math.atan2(y, x) * 180 / Math.PI;
        setQiblaDirection((bearing + 360) % 360);
        setIsLive(true);
      });
    }

    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        if (permission === 'granted') {
          window.addEventListener('deviceorientationabsolute', handleOrientation, true);
        }
      } catch (error) {
        console.error("Compass permission rejected");
      }
    } else {
      window.addEventListener('deviceorientationabsolute', handleOrientation, true);
    }
  };

  const handleOpenArchive = (mosque: any) => {
    setSelectedMosque(mosque);
    setIsDrawerOpen(true);
  };

  const finalRotation = qiblaDirection - compassHeading;

  return (
    <main className="min-h-screen bg-[#FAF9F6] overflow-x-hidden">
      <div className="w-full bg-[#1C1C1C] py-2 px-4 overflow-hidden">
        <motion.div animate={{ x: [0, -1500] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="flex whitespace-nowrap gap-12 md:gap-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-[#C5A059]/60 font-medium">
              Live Feed: Maghrib approaching • Global Sanctuary Archive • Connected to 124 Meridians
            </span>
          ))}
        </motion.div>
      </div>

      <Navbar />
      <Hero />
      <HeritageGallery />

      <section className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-serif text-[#1C1C1C] mb-4 md:mb-6 leading-tight">
              Nearby <span className="italic text-[#C5A059]">Sanctuaries</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <motion.div className="cursor-pointer" onClick={() => handleOpenArchive({ name: "Sultan Ahmed Center", distance: "0.4 km", nextPrayer: "Maghrib • 18:42", imam: "Sheikh Yusuf" })}>
            <MosqueCard name="Sultan Ahmed Center" distance="0.4 km" nextPrayer="Maghrib • 18:42" imam="Sheikh Yusuf" />
          </motion.div>
          <motion.div className="cursor-pointer" onClick={() => handleOpenArchive({ name: "Ayasofya Heritage", distance: "1.1 km", nextPrayer: "Maghrib • 18:42", imam: "Dr. Erhan" })}>
            <MosqueCard name="Ayasofya Heritage" distance="1.1 km" nextPrayer="Maghrib • 18:42" imam="Dr. Erhan" />
          </motion.div>
        </div>
      </section>

      {/* FIXED: ID is now 'qibla' to match handleNavClick */}
      <section id="qibla" className="px-6 md:px-16 py-20 md:py-32 scroll-mt-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative max-w-[1400px] mx-auto bg-[#1C1C1C] overflow-hidden group rounded-[2px]">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-24 order-2 md:order-1">
              <span className="text-[#C5A059] text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-medium block mb-6 md:mb-8">The Spiritual Axis</span>
              <h4 className="text-white font-serif text-4xl md:text-6xl leading-tight mb-6 md:mb-10">Direction of <br /> <span className="italic text-[#C5A059]">Khanna Kaaba</span></h4>
              <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed mb-10 md:mb-16 max-w-sm tracking-wide">Real-time alignment with the Qibla. Point your device to align the gold needle with the spiritual center.</p>
              <button onClick={enableQibla} className={`w-full md:w-auto px-10 py-4 border transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-bold ${isLive ? 'bg-white text-black border-white' : 'border-white/20 text-white hover:bg-white hover:text-black'}`}>
                {isLive ? 'Coordinates Synced' : 'Sync Coordinates'}
              </button>
            </div>

            <div className="h-80 md:h-full min-h-[400px] bg-[#252525] flex flex-col items-center justify-center border-b md:border-b-0 md:border-l border-white/5 overflow-hidden order-1 md:order-2">
               <div className="relative">
                 <svg width="280" height="280" viewBox="0 0 100 100" className="opacity-10">
                    <circle cx="50" cy="50" r="48" stroke="#C5A059" strokeWidth="0.5" strokeDasharray="1 3" />
                    <text x="50" y="8" fontSize="4" fill="#C5A059" textAnchor="middle" className="font-mono">N</text>
                 </svg>
                 <motion.div animate={{ rotate: finalRotation }} transition={{ type: "spring", stiffness: 40, damping: 20 }} className="absolute inset-0 flex items-center justify-center">
                   <svg width="280" height="280" viewBox="0 0 100 100" fill="none">
                      <path d="M50 10L56 50L50 54L44 50L50 10Z" fill="#C5A059" />
                      <circle cx="50" cy="50" r="2" fill="#C5A059" />
                   </svg>
                 </motion.div>
               </div>
               <div className="mt-8 text-center">
                 <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em]">Qibla Bearing</p>
                 <p className="text-white font-mono text-xl mt-2">{qiblaDirection === 0 ? '--' : Math.round(qiblaDirection)}°</p>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SanctuaryDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} mosque={selectedMosque} />
    </main>
  );
}