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
    <section className="py-16 px-4 md:px-8 bg-white">
      <MotionSection>
        <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12`}>
          
          {/* Info Box */}
          <div className="w-full lg:w-1/3 bg-[#fdfdfd] border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-tight">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {description}
              </p>
              <ul className="space-y-2 mb-8">
                {details.map((detail, index) => (
                  <li key={index} className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="bg-[#8ba652] hover:bg-[#7a9346] text-white py-3 px-6 rounded-sm font-bold text-sm tracking-widest transition-colors self-start shadow-md">
              WHATSAPP ENQUIRY
            </button>
          </div>

          {/* Visual Gallery */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Main Visual/Diagram */}
              <div className="w-full md:w-1/2 relative aspect-square bg-gray-50 rounded-sm overflow-hidden border border-gray-100">
                <Image 
                  src={mainImage} 
                  alt={`${title} diagram`} 
                  fill 
                  className="object-contain p-4"
                />
              </div>
              
              {/* Small Image Grid */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
                {imageGrid.map((src, index) => (
                  <div key={index} className="relative aspect-square rounded-sm overflow-hidden border border-gray-100 group">
                    <Image 
                      src={src} 
                      alt={`${title} view ${index + 1}`} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
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
