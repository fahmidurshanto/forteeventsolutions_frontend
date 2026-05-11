'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/singaporean_wedding_banquet.webp",
  "/image_8.webp",
  "/image_7.webp",
  "/image_6.webp",
  "/image_5.webp",
  "/chronicle_1_1778119918431.webp"
];

export default function EventChronicles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Get the two images to display (handle wrapping)
  const getVisibleImages = () => {
    const first = images[currentIndex];
    const second = images[(currentIndex + 1) % images.length];
    return [first, second];
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="bg-[#0F172A] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#E8D08D] text-2xl md:text-3xl font-serif text-center mb-12 tracking-widest uppercase"
        >
          Event Chronicles
        </motion.h2>
        
        <div className="relative group max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 md:-ml-16 z-20 p-3 text-[#E8D08D] hover:bg-[#E8D08D]/10 rounded-full transition-all duration-300 group-hover:scale-110 active:scale-95"
            aria-label="Previous image"
          >
             <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <AnimatePresence mode="wait">
                {visibleImages.map((src, idx) => (
                  <motion.div 
                    key={`${src}-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`relative h-[300px] md:h-[500px] overflow-hidden border border-[#C5A059]/20 shadow-2xl group/item ${idx === 1 ? 'hidden md:block' : ''}`}
                  >
                    <img 
                      src={src} 
                      alt={`Event Chronicle ${currentIndex + idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 md:-mr-16 z-20 p-3 text-[#E8D08D] hover:bg-[#E8D08D]/10 rounded-full transition-all duration-300 group-hover:scale-110 active:scale-95"
            aria-label="Next image"
          >
             <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? 'w-8 bg-[#E8D08D]' : 'w-2 bg-[#E8D08D]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

