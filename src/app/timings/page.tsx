"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ARCHIVE_MOSQUES = [
  { id: 1, name: "Sheikh Zayed Grand Mosque", location: "Abu Dhabi, UAE", lat: 24.4128, lng: 54.4750 },
  { id: 2, name: "Sultan Ahmed Mosque", location: "Istanbul, Turkey", lat: 41.0054, lng: 28.9768 },
  { id: 3, name: "Faisal Masjid", location: "Islamabad, Pakistan", lat: 33.7299, lng: 73.0372 },
  { id: 4, name: "Badshahi Mosque", location: "Lahore, Pakistan", lat: 31.5881, lng: 74.3095 },
  { id: 5, name: "Al-Haram Sanctuary", location: "Mecca, KSA", lat: 21.4225, lng: 39.8262 },
  { id: 6, name: "Islamic Center of Washington", location: "DC, USA", lat: 38.9163, lng: -77.0562 },
];

export default function TimingsPage() {
  const [search, setSearch] = useState("");
  const [selectedMosque, setSelectedMosque] = useState<any>(null);
  const [timings, setTimings] = useState<any>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentPrayer, setCurrentPrayer] = useState("");

  useEffect(() => {
    if (selectedMosque) {
      fetch(`https://api.aladhan.com/v1/timings?latitude=${selectedMosque.lat}&longitude=${selectedMosque.lng}&method=2`)
        .then(res => res.json())
        .then(data => {
          const times = data.data.timings;
          setTimings(times);
          determineCurrentPrayer(times);
        });
    }
  }, [selectedMosque]);

  const determineCurrentPrayer = (times: any) => {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    const prayerOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    let current = "Isha"; // Default to Isha if late at night

    for (let i = 0; i < prayerOrder.length; i++) {
      if (currentTime >= times[prayerOrder[i]]) {
        current = prayerOrder[i];
      }
    }
    setCurrentPrayer(current);
  };

  const filtered = ARCHIVE_MOSQUES.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || m.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="pt-40 min-h-screen bg-[#FAF9F6] px-6 pb-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.8em] font-bold block mb-6">Global Horology</span>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1C1C1C]">The <span className="italic">Chronicle</span></h1>
        </div>

        {/* Search Index */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <input 
            type="text"
            placeholder="Search Sanctuary..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-b border-stone-200 py-6 text-sm tracking-[0.3em] uppercase focus:outline-none focus:border-[#C5A059]"
          />
        </div>

        {/* Mosque Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((m) => (
            <motion.div 
              key={m.id}
              whileHover={{ y: -5 }}
              onClick={() => {
                setSelectedMosque(m);
                setIsOverlayOpen(true);
              }}
              className="p-10 bg-white border border-stone-100 cursor-pointer group hover:border-[#C5A059] transition-all duration-700 shadow-sm"
            >
              <div className="w-1 h-12 bg-stone-100 group-hover:bg-[#C5A059] transition-colors mb-8" />
              <h3 className="text-2xl font-serif mb-2">{m.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-stone-400">{m.location}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NEW INTERFACE: Horological Overlay */}
      <AnimatePresence>
        {isOverlayOpen && selectedMosque && timings && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0 bg-[#1C1C1C]/95 backdrop-blur-2xl" onClick={() => setIsOverlayOpen(false)} />
            
            <motion.div 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white p-12 md:p-24 shadow-2xl flex flex-col md:flex-row gap-20"
            >
              <button onClick={() => setIsOverlayOpen(false)} className="absolute top-10 right-10 text-[10px] uppercase tracking-widest text-stone-400 hover:text-black">Close [x]</button>

              {/* Left: Highlight Current Prayer */}
              <div className="md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-100 pb-12 md:pb-0 md:pr-20">
                <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.6em] mb-8 block">Now Active</span>
                <h2 className="text-8xl md:text-9xl font-serif leading-none mb-6">{currentPrayer}</h2>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
                  <p className="text-2xl font-serif italic text-stone-400">Time: {timings[currentPrayer]}</p>
                </div>
                <p className="mt-12 text-[10px] uppercase tracking-[0.3em] leading-loose text-stone-400">
                   Synchronized with {selectedMosque.name} <br/> {selectedMosque.location}
                </p>
              </div>

              {/* Right: Full Schedule */}
              <div className="md:w-1/2 flex flex-col justify-center space-y-6">
                {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer) => (
                  <div 
                    key={prayer} 
                    className={`flex justify-between items-center py-4 border-b border-stone-50 transition-all duration-500 ${
                      currentPrayer === prayer ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.4em]">{prayer}</span>
                    <span className="text-4xl font-serif">{timings[prayer]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}