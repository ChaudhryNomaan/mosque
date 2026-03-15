"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DATA = {
  "sultan-ahmed": {
    name: "Sultan Ahmed Mosque",
    location: "Istanbul, Turkey",
    era: "Classical Ottoman",
    built: "1616",
    history: "Built between 1609 and 1616 during the rule of Ahmed I, this sanctuary was intended to reassert Ottoman power after the Peace of Zsitvatorok. It was constructed on the site of the ancient Byzantine Great Palace, symbolically facing the Hagia Sophia to complete the city's imperial skyline.",
    architecture: "Defined by its six minarets—a rarity at the time—the mosque features a massive central dome supported by four 'elephant foot' pillars. The interior is lined with over 20,000 handmade ceramic tiles from İznik, featuring more than 50 different tulip designs under the soft light of 200 stained glass windows.",
    video: "https://www.youtube.com/embed/S_8qK2y4kic", 
    images: [
      "https://images.unsplash.com/photo-1541514419430-08769485f1cc",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "https://images.unsplash.com/photo-1590075865003-e48267cae26a",
      "https://images.unsplash.com/photo-1566125882500-87e10f726cdc"
    ]
  },
  "cordoba-mezquita": {
    name: "Mezquita de Córdoba",
    location: "Andalusia, Spain",
    era: "Umayyad Moorish",
    built: "784",
    history: "The Great Mosque of Córdoba represents the pinnacle of Al-Andalus civilization. Built on the site of a Visigothic church after the Umayyad conquest, it was expanded by successive Emirs over two centuries, eventually becoming the second largest mosque in the world before its conversion into a Cathedral in 1236.",
    architecture: "The most iconic feature is the 'forest of columns' consisting of 856 pillars made of jasper, onyx, and marble. These support the double-tiered red-and-white brick arches—an engineering marvel designed to provide both structural integrity and a sense of infinite, airy space.",
    video: "https://www.youtube.com/embed/5F2_zI367_A",
    images: [
      "https://images.unsplash.com/photo-1590075865003-e48267cae26a",
      "https://images.unsplash.com/photo-1512401140081-30691584c98f",
      "https://images.unsplash.com/photo-1566125882500-87e10f726cdc"
    ]
  },
  "sheikh-zayed": {
    name: "Sheikh Zayed Grand Mosque",
    location: "Abu Dhabi, UAE",
    era: "Contemporary Islamic",
    built: "2007",
    history: "Designed to unite the Islamic world's cultural diversity with modern architectural art, this mosque was the vision of Sheikh Zayed bin Sultan Al Nahyan. It serves as a monumental tribute to peace and tolerance, constructed with materials sourced from every corner of the globe.",
    architecture: "The structure features 82 domes of varying sizes, with the largest located in the center of the main prayer hall. It houses the world's largest hand-knotted carpet and seven massive crystal chandeliers, showcasing a blend of Fatimid, Mamluk, and Ottoman design influences in pure white Sivec marble.",
    video: "https://www.youtube.com/embed/K7zKAn8B-L8",
    images: [
      "https://images.unsplash.com/photo-1551041777-575d3855ca71",
      "https://images.unsplash.com/photo-1584551151603-491953942001",
      "https://images.unsplash.com/photo-1528702748617-c64d49f918af"
    ]
  }
};

export default function MosqueDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;
  const mosque = DATA[slug as keyof typeof DATA] || DATA["sultan-ahmed"];

  return (
    <main className="w-full bg-[#FDFCFB] overflow-x-hidden">
      
      {/* 1. ADAPTIVE HERO SECTION */}
      <section className="relative min-h-[60vh] md:h-[85vh] flex items-end px-4 sm:px-8 md:px-16 lg:px-24 pb-8 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}
            src={mosque.images[0]} className="w-full h-full object-cover" 
            alt={mosque.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-transparent to-black/20" />
        </div>
        
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-4xl">
            <span className="text-[#C5A059] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold block mb-2">Heritage Site</span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-serif tracking-tight leading-tight md:leading-[0.85] text-stone-900">
              {mosque.name}
            </h1>
          </motion.div>
          <Link href="/collections" className="shrink-0 text-[10px] uppercase tracking-widest text-stone-500 hover:text-black border-b border-stone-200 pb-1 mb-2">
            Back to Index
          </Link>
        </div>
      </section>

      {/* 2. RESPONSIVE SPECS GRID */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 md:py-16 border-b border-stone-100 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-1">
          <p className="text-[9px] uppercase text-stone-400 tracking-widest">Location</p>
          <p className="font-serif italic text-sm md:text-lg">{mosque.location}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[9px] uppercase text-stone-400 tracking-widest">Era</p>
          <p className="font-serif italic text-sm md:text-lg">{mosque.era}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[9px] uppercase text-stone-400 tracking-widest">Status</p>
          <p className="font-serif italic text-sm md:text-lg">UNESCO Heritage</p>
        </div>
        <div className="space-y-1">
          <p className="text-[9px] uppercase text-stone-400 tracking-widest">Volume</p>
          <p className="font-serif italic text-sm md:text-lg">#{slug.slice(0,3).toUpperCase()}</p>
        </div>
      </section>

      {/* 3. NARRATIVE: STACKING COLUMNS */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-7 space-y-12 md:space-y-20">
          <div>
            <h3 className="text-2xl md:text-4xl font-serif mb-6 italic text-[#C5A059]">Historical Context</h3>
            <p className="text-base md:text-xl leading-relaxed text-stone-600 font-light">{mosque.history}</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-serif mb-6 italic text-[#C5A059]">Architectural Language</h3>
            <p className="text-base md:text-xl leading-relaxed text-stone-600 font-light">{mosque.architecture}</p>
          </div>
        </div>

        <aside className="lg:col-span-5">
           <div className="p-6 md:p-10 bg-white border border-stone-100 lg:sticky lg:top-32 shadow-sm">
             <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-6">Archive Note</span>
             <p className="text-sm md:text-base italic leading-relaxed text-stone-500 font-serif">
               "This sanctuary remains a primary reference point for {mosque.era} design, harmonizing geometric precision with spiritual intent."
             </p>
             <div className="w-10 h-px bg-[#C5A059] mt-8" />
           </div>
        </aside>
      </section>

      {/* 4. CINEMATIC VIDEO (FULL WIDTH ON MOBILE) */}
      <section className="bg-[#1C1C1C] py-16 md:py-32 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-8 md:mb-12">
             <h3 className="text-xl md:text-3xl font-serif italic text-white">Motion Study</h3>
             <p className="text-[9px] uppercase tracking-widest text-stone-500">Documentary Clip</p>
          </div>
          <div className="relative aspect-video w-full shadow-2xl overflow-hidden">
             <iframe 
                className="absolute inset-0 w-full h-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                src={mosque.video} 
                frameBorder="0" 
                allowFullScreen 
             />
          </div>
        </div>
      </section>

      {/* 5. RESPONSIVE MASONRY GALLERY */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-32">
        <div className="flex justify-between items-end mb-12">
           <h3 className="text-3xl md:text-5xl font-serif leading-tight">Visual <span className="italic text-[#C5A059]">Archive</span></h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
           {mosque.images.slice(1).map((img, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -5 }} 
               className="h-[350px] sm:h-[450px] lg:h-[600px] w-full overflow-hidden bg-stone-50"
             >
               <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Gallery View" />
             </motion.div>
           ))}
        </div>
      </section>
    </main>
  );
}