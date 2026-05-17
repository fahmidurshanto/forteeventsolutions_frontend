"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface RentalHeroProps {
  title: string;
  image?: string;
}

export default function RentalHero({ title, image = "/hero_tent_1778119496158.webp" }: RentalHeroProps) {
  return (
    <section className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url("${image}")`, 
        }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-[#E8D08D] tracking-tighter uppercase italic leading-none"
        >
          {title}
        </motion.h1>
        <div className="w-24 h-1.5 bg-[#B48E4B] mx-auto mt-6 rounded-full shadow-lg shadow-[#B48E4B]/20" />
      </div>
    </section>
  );
}
