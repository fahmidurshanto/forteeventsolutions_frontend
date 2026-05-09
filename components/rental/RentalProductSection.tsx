import React from 'react';
import Image from 'next/image';
import MotionSection from './MotionSection';

interface RentalProductSectionProps {
  title: string;
  description: string;
  items: string[];
  buttonText: string;
  accessoriesTitle?: string;
  accessories?: string[];
  images: string[];
  videoEmbedCode?: string; // YouTube embed code
  reverse?: boolean; // Swap columns
}

export default function RentalProductSection({
  title,
  description,
  items,
  buttonText,
  accessoriesTitle,
  accessories,
  images,
  videoEmbedCode,
  reverse = false,
}: RentalProductSectionProps) {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#0F172A] overflow-hidden border-b border-white/5">
      <MotionSection>
        <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center text-[#E8D08D] mb-20 uppercase italic tracking-tighter leading-tight">
          {title}
        </h2>

        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-start`}>
          {/* Visual Content (Images & Video) */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {images.map((src, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-2xl group border border-white/5 shadow-2xl">
                  <Image
                    src={src}
                    alt={`${title} image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>
            
            {videoEmbedCode && (
              <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-8 border-white/5 bg-[#131B2E] flex items-center justify-center group cursor-pointer relative">
                <Image
                  src={images[0]}
                  alt="Video background"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-black text-white uppercase tracking-[0.3em]">{title} Overview</p>
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 bg-[#131B2E] p-10 md:p-16 rounded-[40px] shadow-2xl border border-white/5">
            <div className="max-w-none">
              <p className="mb-10 leading-relaxed text-gray-400 font-medium italic text-lg opacity-90">
                {description}
              </p>
              
              <ul className="space-y-4 mb-12">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="font-black text-[#B48E4B] text-sm mt-1">{(index + 1).toString().padStart(2, '0')}.</span>
                    <span className="font-bold text-gray-200 tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-[#B48E4B] hover:brightness-110 text-[#0F172A] px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] transition-all mb-16 shadow-xl shadow-[#B48E4B]/10 active:scale-95 text-xs">
                {buttonText}
              </button>

              {accessoriesTitle && accessories && (
                <div className="mt-8 border-t border-white/5 pt-10">
                  <h3 className="text-xl font-black text-[#E8D08D] mb-6 uppercase italic tracking-wider">{accessoriesTitle}</h3>
                  <ul className="space-y-3">
                    {accessories.map((acc, index) => (
                      <li key={index} className="text-gray-400 font-medium italic flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" />
                        {acc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      </MotionSection>
    </section>
  );
}
