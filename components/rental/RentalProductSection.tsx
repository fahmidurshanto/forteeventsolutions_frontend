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
    <section className="py-20 px-4 md:px-8 bg-white overflow-hidden border-b border-gray-50">
      <MotionSection>
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 uppercase tracking-wider">
          {title}
        </h2>

        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-start`}>
          {/* Visual Content (Images & Video) */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {images.map((src, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-sm group">
                  <Image
                    src={src}
                    alt={`${title} image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            
            {videoEmbedCode && (
              <div className="aspect-video w-full rounded-sm overflow-hidden shadow-lg border border-gray-100 bg-gray-50 flex items-center justify-center">
                 {/* Simplified video placeholder for now */}
                 <div className="text-center p-8">
                   <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-red-700 transition-colors">
                     <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                       <path d="M8 5v14l11-7z" />
                     </svg>
                   </div>
                   <p className="text-sm font-semibold text-gray-500">{title} Overview Video</p>
                 </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 bg-[#f9f9f9] p-8 md:p-12 rounded-sm shadow-sm">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-8 leading-relaxed">
                {description}
              </p>
              
              <ul className="space-y-3 mb-10">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="font-bold text-gray-800">{index + 1}.</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-[#a33b3b] hover:bg-[#8e3333] text-white px-8 py-4 font-bold uppercase tracking-wide transition-colors mb-12 shadow-md">
                {buttonText}
              </button>

              {accessoriesTitle && accessories && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{accessoriesTitle}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {accessories.map((acc, index) => (
                      <li key={index} className="text-gray-600 font-medium">{acc}</li>
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
