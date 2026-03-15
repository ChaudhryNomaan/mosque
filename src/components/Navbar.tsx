"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; 
import { usePathname, useRouter } from 'next/navigation'; 

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPortalOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  const navItems = [
    { name: 'Collections', path: '/collections' },
    { name: 'Timings', path: '/nearby' },
    { name: 'Qibla', path: '#qibla' }, 
    { name: 'Quran', path: '/quran' },
    { name: 'Hadith', path: '/hadith' }
  ];

  // Robust Smooth Scroll Handler
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const targetId = path.replace('#', '');
      
      if (pathname !== '/') {
        // If not on home, go home with hash
        router.push(`/${path}`);
      } else {
        // If on home, scroll smoothly
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 100; // Height of navbar + padding
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out px-6 md:px-10 ${
          isScrolled || isMobileMenuOpen
            ? "py-4 bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(197,160,89,0.1)]" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-3 group z-[110]">
            <div className="relative overflow-hidden w-5 h-8 border-[0.5px] border-[#C5A059]/40 group-hover:border-[#C5A059] transition-colors duration-500">
               <motion.div 
                 animate={{ y: [0, -4, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute inset-0 bg-[#C5A059]/10" 
               />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[#1C1C1C] text-sm tracking-[0.5em] uppercase leading-none">Minaret</span>
              <span className="text-[8px] text-[#C5A059] uppercase tracking-[0.4em] mt-1.5 transition-all duration-500 group-hover:translate-x-1">Sanctuary Archive</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
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

          <div className="flex items-center gap-4 md:gap-8">
            <div className="relative hidden md:block">
              <button onClick={() => setIsPortalOpen(!isPortalOpen)} className="text-[9px] uppercase tracking-[0.4em] font-bold border-b border-stone-200 pb-1 hover:border-[#C5A059] transition-all">Portal</button>
              <AnimatePresence>
                {isPortalOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-4 w-56 bg-white border border-stone-100 shadow-2xl p-4 flex flex-col gap-2">
                    <Link href="/dashboard/me" className="flex flex-col p-3 hover:bg-stone-50 transition-colors">
                      <span className="text-[10px] uppercase tracking-widest font-bold">Seeker Profile</span>
                      <span className="text-[8px] text-stone-400 uppercase tracking-tighter mt-1"> • Personal Archive</span>
                    </Link>
                    <div className="h-px bg-stone-50 w-full mx-auto" />
                    <Link href="/dashboard/mosque" className="flex flex-col p-3 hover:bg-stone-50 transition-colors">
                      <span className="text-[10px] uppercase tracking-widest font-bold">Guardian Console</span>
                      <span className="text-[8px] text-[#C5A059] uppercase tracking-tighter mt-1 font-semibold underline decoration-dotted">Official Access</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/donate" className="relative hidden sm:block overflow-hidden px-8 py-3 bg-[#1C1C1C] group">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-white">Donate</span>
              <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19, 1, 0.22, 1]" />
            </Link>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden z-[110] p-2 flex flex-col gap-1.5">
              <motion.div animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className={`w-6 h-[1px] ${isMobileMenuOpen || isScrolled ? 'bg-black' : 'bg-[#1C1C1C]'}`} />
              <motion.div animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className={`w-6 h-[1px] ${isScrolled ? 'bg-black' : 'bg-[#1C1C1C]'}`} />
              <motion.div animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className={`w-6 h-[1px] ${isMobileMenuOpen || isScrolled ? 'bg-black' : 'bg-[#1C1C1C]'}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-0 z-[90] bg-white flex flex-col p-10 pt-40 lg:hidden">
            <div className="flex flex-col gap-8">
              {navItems.map((item, idx) => (
                <Link key={item.name} href={item.path} onClick={(e) => handleNavClick(e, item.path)} className="group flex items-baseline gap-4">
                  <span className="text-[10px] font-mono text-[#C5A059]">0{idx + 1}</span>
                  <span className="text-4xl font-serif tracking-tighter text-[#1C1C1C] group-hover:italic transition-all uppercase">{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-auto border-t border-stone-100 pt-10 grid grid-cols-2 gap-4">
              <Link href="/dashboard/me" className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-stone-400 mb-1">Seeker</span>
                <span className="text-[10px] uppercase tracking-widest font-bold"> Profile</span>
              </Link>
              <Link href="/dashboard/mosque" className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-stone-400 mb-1">Guardian</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A059]">Console</span>
              </Link>
              <Link href="/donate" className="col-span-2 mt-4 py-4 bg-[#1C1C1C] text-white text-center text-[10px] uppercase tracking-[0.4em] font-bold">Make a Donation</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};