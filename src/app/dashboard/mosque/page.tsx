"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RestorationProject {
  id: number;
  title: string;
  description: string;
  cost: string;
  progress: number;
  media: string | null;
  mediaType: 'image' | 'video' | null;
}

export default function GuardianDashboard() {
  const [activeTab, setActiveTab] = useState<'timings' | 'restoration' | 'donations'>('timings');
  
  // 1. Identity State (Name & Location)
  const [isEditingIdentity, setIsEditingIdentity] = useState(false);
  const [mosqueIdentity, setMosqueIdentity] = useState({
    name: "Sultan Ahmed Center",
    location: "Istanbul, Turkey",
    established: "1616"
  });

  // 2. Prayer Timings State
  const [timings, setTimings] = useState({
    Fajr: "05:15",
    Dhuhr: "13:15",
    Asr: "16:45",
    Maghrib: "19:20",
    Isha: "20:45"
  });

  // 3. Restoration State
  const [projects, setProjects] = useState<RestorationProject[]>([]);
  const [newProject, setNewProject] = useState({ title: '', desc: '', cost: '', media: '', type: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const type = file.type.startsWith('video') ? 'video' : 'image';
        setNewProject(prev => ({ ...prev, media: reader.result as string, type }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addProject = () => {
    if (!newProject.title) return;
    const project: RestorationProject = {
      id: Date.now(),
      title: newProject.title,
      description: newProject.desc,
      cost: newProject.cost,
      progress: 0,
      media: newProject.media as any,
      mediaType: newProject.type as any
    };
    setProjects([project, ...projects]);
    setNewProject({ title: '', desc: '', cost: '', media: '', type: '' });
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 px-6 md:px-12 text-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">
        
        {/* Dashboard Header with Identity Edit */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start gap-8 border-b border-stone-100 pb-12">
          <div className="flex-1 w-full max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Guardian Console</span>
            </div>

            {isEditingIdentity ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 bg-stone-50 p-6 border border-stone-100">
                <input 
                  className="w-full bg-transparent text-3xl font-serif outline-none border-b border-stone-200 focus:border-[#C5A059] pb-1"
                  value={mosqueIdentity.name}
                  onChange={(e) => setMosqueIdentity({...mosqueIdentity, name: e.target.value})}
                  placeholder="Sanctuary Name"
                />
                <input 
                  className="w-full bg-transparent text-xs uppercase tracking-widest outline-none border-b border-stone-200 focus:border-[#C5A059] py-2"
                  value={mosqueIdentity.location}
                  onChange={(e) => setMosqueIdentity({...mosqueIdentity, location: e.target.value})}
                  placeholder="Location (City, Country)"
                />
                <button 
                  onClick={() => setIsEditingIdentity(false)}
                  className="text-[9px] uppercase tracking-[0.2em] font-bold bg-[#1C1C1C] text-white px-6 py-2"
                >
                  Save Identity
                </button>
              </motion.div>
            ) : (
              <div className="group relative">
                <h1 className="text-4xl md:text-5xl font-serif tracking-tight">{mosqueIdentity.name}</h1>
                <p className="text-[#C5A059] text-xs mt-3 uppercase tracking-[0.3em] font-medium flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  {mosqueIdentity.location}
                </p>
                <button 
                  onClick={() => setIsEditingIdentity(true)}
                  className="mt-4 text-[9px] uppercase tracking-widest text-stone-400 hover:text-[#C5A059] transition-colors"
                >
                  Edit Information —
                </button>
              </div>
            )}
          </div>

          <div className="flex bg-stone-100 p-1 rounded-lg self-end">
            {['timings', 'restoration', 'donations'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 rounded-md text-[10px] uppercase tracking-widest font-bold transition-all ${
                  activeTab === tab ? 'bg-white text-black shadow-sm' : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="wait">
              {activeTab === 'timings' && (
                <motion.div key="timings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-white border border-stone-100 p-8 shadow-sm">
                  <h3 className="text-xl font-serif mb-8 italic text-stone-400">Prayer Schedule</h3>
                  <div className="grid gap-4">
                    {Object.entries(timings).map(([prayer, time]) => (
                      <div key={prayer} className="flex items-center justify-between p-5 border border-stone-50 hover:border-stone-200 transition-all bg-stone-50/30">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500">{prayer}</span>
                        <input 
                          type="time" 
                          value={time}
                          onChange={(e) => setTimings(prev => ({...prev, [prayer]: e.target.value}))}
                          className="font-mono text-sm bg-white border border-stone-100 p-2 outline-none focus:border-[#C5A059]"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'restoration' && (
                <motion.div key="restoration" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  {/* ... (Previous New Project Form Code) ... */}
                  <div className="bg-white border border-stone-100 p-8 shadow-sm">
                    <h3 className="text-xl font-serif mb-6 italic">List New Restoration</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <input 
                        placeholder="Project Title" 
                        className="col-span-2 p-3 bg-stone-50 border-none text-xs uppercase tracking-widest outline-none focus:ring-1 focus:ring-[#C5A059]"
                        value={newProject.title}
                        onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      />
                      <textarea 
                        placeholder="Project Description" 
                        className="col-span-2 p-3 bg-stone-50 border-none text-xs h-24 outline-none focus:ring-1 focus:ring-[#C5A059]"
                        value={newProject.desc}
                        onChange={(e) => setNewProject({...newProject, desc: e.target.value})}
                      />
                      <input 
                        placeholder="Estimated Cost ($)" 
                        className="p-3 bg-stone-50 border-none text-xs outline-none focus:ring-1 focus:ring-[#C5A059]"
                        value={newProject.cost}
                        onChange={(e) => setNewProject({...newProject, cost: e.target.value})}
                      />
                      <div className="relative">
                        <input type="file" hidden ref={fileInputRef} onChange={handleFileUpload} accept="image/*,video/*" />
                        <button 
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full p-3 bg-stone-100 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-200 transition-colors"
                        >
                          {newProject.media ? "Media Selected ✓" : "Upload Media"}
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={addProject}
                      className="w-full py-4 bg-[#1C1C1C] text-white text-[10px] uppercase tracking-[0.3em] font-bold"
                    >
                      Publish to Atlas
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1C1C1C] text-white p-8">
              <span className="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] block mb-4">Live Balance</span>
              <h4 className="text-3xl font-light font-mono mb-2">$42,850.00</h4>
              <button className="mt-8 w-full py-3 bg-[#C5A059] text-white text-[9px] uppercase tracking-[0.2em] font-bold">
                Withdraw Funds
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}