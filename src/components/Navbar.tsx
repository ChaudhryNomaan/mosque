"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false); // Dropdown state
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { name: 'Collections', path: '/collections' },
    { name: 'Timings', path: '/nearby' }, // Updated to your nearby route
    { name: 'Quran', path: '/quran' },
    { name: 'Hadith', path: '/hadith' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out px-6 md:px-10 ${
        isScrolled 
          ? "py-4 bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(197,160,89,0.1)]" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        
        {/* Logo Mark */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative overflow-hidden w-5 h-8 border-[0.5px] border-[#C5A059]/40 group-hover:border-[#C5A059] transition-colors duration-500">
             <motion.div 
               animate={{ y: [0, -4, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute inset-0 bg-[#C5A059]/10" 
             />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[#1C1C1C] text-sm tracking-[0.5em] uppercase leading-none">
              Minaret
            </span>
            <span className="text-[8px] text-[#C5A059] uppercase tracking-[0.4em] mt-1.5 transition-all duration-500 group-hover:translate-x-1">
              Sanctuary Archive
            </span>
          </div>
        </Link>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name}
                href={item.path}
                className={`group relative text-[10px] uppercase tracking-[0.4em] transition-colors duration-300 ${
                  isActive ? "text-[#1C1C1C]" : "text-[#1C1C1C]/50 hover:text-[#1C1C1C]"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#C5A059] transition-all duration-500 ease-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
                <span className="absolute -left-4 -top-1 text-[6px] text-[#C5A059]/40 font-mono">0{idx + 1}</span>
              </Link>
            );
          })}
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-6 md:gap-8">
          
          <Link 
            href="/live-update" 
            className="hidden sm:flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse group-hover:scale-150 transition-transform duration-300" />
            <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#1C1C1C] group-hover:text-[#C5A059] transition-colors duration-300">
              Live
            </span>
          </Link>

          {/* Portal Switcher Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsPortalOpen(!isPortalOpen)}
              className="text-[9px] uppercase tracking-[0.4em] font-bold border-b border-stone-200 pb-1 hover:border-[#C5A059] transition-all"
            >
              Portal
            </button>

            <AnimatePresence>
              {isPortalOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-4 w-56 bg-white border border-stone-100 shadow-2xl p-4 flex flex-col gap-2"
                >
                  <span className="text-[8px] uppercase tracking-widest text-stone-400 mb-2 px-2">Switch View</span>
                  
                  <Link 
                    href="/dashboard/me" 
                    onClick={() => setIsPortalOpen(false)}
                    className="flex flex-col p-3 hover:bg-stone-50 transition-colors group"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold">Seeker Profile</span>
                    <span className="text-[8px] text-stone-400 uppercase tracking-tighter mt-1">• Personal Archive</span>
                  </Link>

                  <div className="h-px bg-stone-50 w-full mx-auto" />

                  <Link 
                    href="/dashboard/mosque" 
                    onClick={() => setIsPortalOpen(false)}
                    className="flex flex-col p-3 hover:bg-stone-50 transition-colors group"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold">Guardian Console</span>
                    <span className="text-[8px] text-[#C5A059] uppercase tracking-tighter mt-1 font-semibold underline decoration-dotted">Official Access</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/donate" className="relative overflow-hidden px-8 py-3 bg-[#1C1C1C] group">
            <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-white">
              Donate
            </span>
            <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19, 1, 0.22, 1]" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};