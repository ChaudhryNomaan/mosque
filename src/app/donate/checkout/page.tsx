"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const displayName = id ? id.replace(/-/g, ' ').toUpperCase() : "GENERAL FUND";

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-40 flex flex-col items-center px-6">
      <div className="max-w-md w-full bg-white border border-stone-100 p-10 shadow-2xl">
        <h2 className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-2 text-center">Checkout</h2>
        <h1 className="text-2xl font-serif text-center mb-8">{displayName}</h1>
        
        <div className="space-y-4">
          <input type="number" placeholder="Enter Amount ($)" className="w-full bg-stone-50 border-none p-4 font-mono text-sm outline-none focus:ring-1 focus:ring-[#C5A059]" />
          <button className="w-full bg-black text-white py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#C5A059] transition-all">
            Confirm Payment
          </button>
        </div>
        
        <Link href="/live-update" className="block text-center mt-8 text-[8px] uppercase tracking-widest text-stone-400">Cancel and Return</Link>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-[10px] tracking-widest text-stone-400 uppercase">Verifying Archive...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}