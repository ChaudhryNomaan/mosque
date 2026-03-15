"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const REPAIR_DATA_MAP: Record<string, any> = {
  "sultan-ahmed": {
    id: "sultan-ahmed",
    mosque: "Sultan Ahmed Mosque",
    task: "Lead & Tile Conservation",
    details: "Phased replacement of dome lead-plating and specialized conservation of the 17th-century İznik tile work in the upper galleries.",
    materials: ["99.9% Pure Lead", "Handmade İznik Tiles"],
    totalEstimate: "$4,200,000",
    communityFunded: "$850,000",
    progress: 65,
    video: "https://www.youtube.com/embed/S_8qK2y4kic",
    workImages: [
      "https://images.unsplash.com/photo-1591604129939-f1efa4d8f7ec",
      "https://images.unsplash.com/photo-1541514419430-08769485f1cc"
    ]
  },
  "djenne": {
    id: "djenne",
    mosque: "Great Mosque of Djenné",
    task: "Annual Structural Rendering",
    details: "The 'Crepissage' festival involves the entire community applying fresh banco to protect the walls from erosion.",
    materials: ["Banco Mud", "Rice Husks", "Shea Butter"],
    totalEstimate: "$150,000",
    communityFunded: "$12,000",
    progress: 15,
    video: "https://www.youtube.com/embed/5F2_zI367_A",
    workImages: [
      "https://images.unsplash.com/photo-1544923246-77307dd654ca",
      "https://images.unsplash.com/photo-1590075865003-e48267cae26a"
    ]
  },
  "wazir-khan": {
    id: "wazir-khan",
    mosque: "Wazir Khan Mosque",
    task: "Kashi-Kari Facade Restoration",
    details: "Focusing on the North facade minarets, artisans are cleaning centuries of environmental grime from the tile-mosaics.",
    materials: ["Hand-cut Terracotta", "Natural Pigments", "Cobalt Glaze"],
    totalEstimate: "$6,400,000",
    communityFunded: "$1,200,000",
    progress: 82,
    video: "https://www.youtube.com/embed/K7zKAn8B-L8",
    workImages: [
      "https://images.unsplash.com/photo-1551041777-575d3855ca71",
      "https://images.unsplash.com/photo-1512401140081-30691584c98f"
    ]
  }
};

export default function WorkOrderPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const data = REPAIR_DATA_MAP[resolvedParams.id];

  if (!data) return null;

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-40 pb-20 px-6 md:px-24 text-stone-900">
      <Link href="/live-update" className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-black mb-12 block transition-colors">
        ← Return to Site Log
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-16">
          <section>
            <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Onsite Report</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">{data.mosque}</h1>
            <p className="text-xl text-stone-600 font-light leading-relaxed">{data.details}</p>
          </section>

          <section className="bg-black aspect-video relative overflow-hidden shadow-2xl border border-stone-100">
             <iframe className="absolute inset-0 w-full h-full opacity-70" src={data.video} frameBorder="0" allowFullScreen />
          </section>

          <section className="grid grid-cols-2 gap-4 pb-12">
             {data.workImages.map((img: string, i: number) => (
               <img key={i} src={img} className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-md" alt="Worksite" />
             ))}
          </section>
        </div>

        <div className="lg:col-span-5">
           <div className="bg-white border border-stone-100 p-8 md:p-12 sticky top-32 shadow-xl">
             <h4 className="text-[10px] uppercase tracking-widest text-stone-400 mb-10 border-b border-stone-50 pb-4 font-bold">Project Audit</h4>
             
             <div className="space-y-8 mb-12">
               <StatRow label="Total Project Cost" value={data.totalEstimate} />
               <StatRow label="Community Pledges" value={data.communityFunded} />
               
               <div className="space-y-2">
                 <p className="text-[9px] uppercase text-stone-400 tracking-widest">Active Progress</p>
                 <div className="w-full h-[2px] bg-stone-100">
                   <motion.div 
                     initial={{ width: 0 }} 
                     animate={{ width: `${data.progress}%` }} 
                     transition={{ duration: 1.5 }}
                     className="h-full bg-[#C5A059]" 
                   />
                 </div>
                 <p className="text-right text-[10px] font-mono text-stone-400">{data.progress}% Complete</p>
               </div>
             </div>

             {/* Links directly to the checkout since they are already viewing restoration */}
             <Link 
               href={`/donate/checkout?id=${data.id}&fund=restoration`}
               className="block w-full text-center bg-[#C5A059] text-white py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-black transition-colors"
             >
               Support This Restoration
             </Link>
             
             <p className="text-[8px] text-stone-400 mt-4 text-center uppercase tracking-widest leading-loose">
               Your contribution goes directly to <br/> our verified preservation fund.
             </p>
           </div>
        </div>
      </div>
    </main>
  );
}

function StatRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="border-b border-stone-50 pb-4">
      <p className="text-[9px] uppercase text-stone-400 tracking-widest mb-1">{label}</p>
      <p className="text-2xl font-serif italic text-stone-900">{value}</p>
    </div>
  );
}