import React from 'react';
import Image from 'next/image';
import MotionSection from './MotionSection';

interface ProductDetailSectionProps {
  title: string;
  description: string;
  details: string[];
  mainImage: string;
  imageGrid: string[];
  reverse?: boolean;
}

export default function ProductDetailSection({
  title,
  description,
  details,
  mainImage,
  imageGrid,
  reverse = false,
}: ProductDetailSectionProps) {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
      <MotionSection>
        <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12`}>
          
          {/* Info Box */}
          <div className="w-full lg:w-1/3 bg-[#131B2E] border border-white/5 p-10 shadow-2xl rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black text-[#E8D08D] mb-6 uppercase italic tracking-tighter leading-tight">
                {title}
              </h3>
              <p className="text-gray-400 text-base font-medium leading-relaxed mb-8 italic">
                {description}
              </p>
              <ul className="space-y-3 mb-10">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-center space-x-3 text-[11px] font-black text-[#B48E4B] uppercase tracking-[0.2em]">
                    <span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="py-4 px-10 self-start btn-golden">
              WhatsApp Enquiry
            </button>
          </div>

          {/* Visual Gallery */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Main Visual/Diagram */}
              <div className="w-full md:w-1/2 relative aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image 
                  src={mainImage} 
                  alt={`${title} diagram`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              {/* Small Image Grid */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                {imageGrid.map((src, index) => (
                  <div key={index} className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
                    <Image 
                      src={src} 
                      alt={`${title} view ${index + 1}`} 
                      fill 
                      sizes="(max-width: 768px) 50vw, 16vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </MotionSection>
    </section>
  );
}
