"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data updated with full prayer schedules
const MOSQUE_DATA = [
  { 
    id: 1, 
    name: "Sultan Ahmed Center", 
    lat: 41.0054, 
    lng: 28.9768, 
    times: { next: "13:15", prayer: "Dhuhr" },
    allPrayers: [
      { name: "Fajr", time: "05:12" },
      { name: "Dhuhr", time: "13:15" },
      { name: "Asr", time: "16:40" },
      { name: "Maghrib", time: "19:20" },
      { name: "Isha", time: "20:45" }
    ]
  },
  { 
    id: 2, 
    name: "Blue Mosque Annex", 
    lat: 41.0065, 
    lng: 28.9775, 
    times: { next: "13:30", prayer: "Dhuhr" },
    allPrayers: [
      { name: "Fajr", time: "05:15" },
      { name: "Dhuhr", time: "13:30" },
      { name: "Asr", time: "16:55" },
      { name: "Maghrib", time: "19:25" },
      { name: "Isha", time: "20:55" }
    ]
  },
  { 
    id: 3, 
    name: "Fatih Sanctuary", 
    lat: 41.0191, 
    lng: 28.9482, 
    times: { next: "13:05", prayer: "Dhuhr" },
    allPrayers: [
      { name: "Fajr", time: "05:08" },
      { name: "Dhuhr", time: "13:05" },
      { name: "Asr", time: "16:30" },
      { name: "Maghrib", time: "19:15" },
      { name: "Isha", time: "20:40" }
    ]
  },
];

export default function NearbyPrayerPage() {
  const [filter, setFilter] = useState<'distance' | 'time'>('distance');
  const [userLoc, setUserLoc] = useState<{lat: number, lng: number} | null>(null);
  const [mosques, setMosques] = useState(MOSQUE_DATA);
  const [expandedId, setExpandedId] = useState<number | null>(null); // State for expansion

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
  }, []);

  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(1);
  };

  const sortedMosques = [...mosques].sort((a, b) => {
    if (filter === 'distance' && userLoc) {
      const distA = parseFloat(getDistance(userLoc.lat, userLoc.lng, a.lat, a.lng));
      const distB = parseFloat(getDistance(userLoc.lat, userLoc.lng, b.lat, b.lng));
      return distA - distB;
    }
    return a.times.next.localeCompare(b.times.next);
  });

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-40 pb-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Congregation Finder</span>
            <h1 className="text-5xl font-serif tracking-tighter">Nearby <span className="italic">Sanctuaries</span></h1>
          </div>
          
          <div className="flex bg-stone-100 p-1 rounded-full">
            <button 
              onClick={() => setFilter('distance')}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${filter === 'distance' ? 'bg-black text-white' : 'text-stone-400'}`}
            >
              Nearest Distance
            </button>
            <button 
              onClick={() => setFilter('time')}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${filter === 'time' ? 'bg-black text-white' : 'text-stone-400'}`}
            >
              Earliest Time
            </button>
          </div>
        </header>

        <div className="space-y-4">
          <AnimatePresence>
            {sortedMosques.map((mosque) => (
              <motion.div 
                layout
                key={mosque.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white border transition-all group overflow-hidden ${expandedId === mosque.id ? 'border-[#C5A059] shadow-xl' : 'border-stone-100 hover:shadow-lg'}`}
              >
                {/* Clickable Header Area */}
                <div 
                  onClick={() => setExpandedId(expandedId === mosque.id ? null : mosque.id)}
                  className="p-8 flex flex-col md:flex-row justify-between items-center cursor-pointer"
                >
                  <div className="flex items-center gap-8">
                    <div className="text-center min-w-[60px]">
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">{mosque.times.prayer}</p>
                      <p className="text-2xl font-mono font-light text-[#C5A059]">{mosque.times.next}</p>
                    </div>
                    <div className="w-px h-12 bg-stone-100 hidden md:block" />
                    <div>
                      <h3 className="text-xl font-serif group-hover:italic transition-all">{mosque.name}</h3>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                        {userLoc ? `${getDistance(userLoc.lat, userLoc.lng, mosque.lat, mosque.lng)} KM AWAY` : "Calculating distance..."}
                      </p>
                    </div>
                  </div>

                  <button className="mt-6 md:mt-0 px-8 py-3 bg-stone-900 text-white text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-colors">
                    Get Directions
                  </button>
                </div>

                {/* Expandable Timetable Section */}
                <AnimatePresence>
                  {expandedId === mosque.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="bg-stone-50/50 border-t border-stone-100"
                    >
                      <div className="px-8 py-10 grid grid-cols-2 md:grid-cols-5 gap-4">
                        {mosque.allPrayers.map((p) => (
                          <div key={p.name} className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-stone-400 mb-1">{p.name}</span>
                            <span className={`text-sm font-mono ${p.name === mosque.times.prayer ? 'text-[#C5A059] font-bold' : 'text-stone-600'}`}>
                              {p.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}