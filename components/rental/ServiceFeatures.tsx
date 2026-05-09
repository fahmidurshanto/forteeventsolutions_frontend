"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceFeatures() {
  const features = [
    {
      title: 'FAST DELIVERY',
      description: 'We ensure prompt delivery and setup for all your events, often within 3 hours.',
      icon: (
        <svg className="w-10 h-10 text-[#B48E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'QUALITY GUARANTEE',
      description: 'All our rental equipment is maintained to the highest standards of cleanliness and durability.',
      icon: (
        <svg className="w-10 h-10 text-[#B48E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'EXPERT SUPPORT',
      description: 'Our experienced team is ready to help you choose the right equipment for your specific needs.',
      icon: (
        <svg className="w-10 h-10 text-[#B48E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#131B2E] px-4 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="flex flex-col items-center group"
          >
            <div className="mb-8 bg-[#0F172A] p-8 rounded-full shadow-2xl border border-white/10 group-hover:border-[#B48E4B]/50 transition-all duration-500 group-hover:scale-110">
              {feature.icon}
            </div>
            <h4 className="text-xl font-black text-[#E8D08D] mb-4 tracking-[0.2em] uppercase italic">
              {feature.title}
            </h4>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs italic opacity-80">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
