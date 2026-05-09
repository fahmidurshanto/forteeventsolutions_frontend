"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CATEGORIES = [
  "CHAIRS", "TABLES", "FANS", "LIGHTS", "AIR-CON", 
  "GENERATORS", "STAGE", "FLOORING AND CARPET", "BARRICADES", "SANITARY"
];

const EQUIPMENT_DATA: Record<string, any> = {
  "CHAIRS": {
    title: "Types of Chairs",
    items: [
      "PVC Chairs (red/blue/white)",
      "Cushion Chairs (red/blue)",
      "Bar stools",
      "Beach Chairs",
      "Aluminum Chairs with Armrest",
      "Wooden Stools",
      "Plastic Foldable Chairs (white/black)"
    ],
    accessories: ["Chair Covers", "Cloth Ribbon"],
    images: [
      "/chronicle_1_1778119918431.png",
      "/clear_span_tent_1778119637488.png",
      "/marquee_tent_1778119583238.png",
      "/staging_tent_1778119743118.png",
      "/multi_zone_tent_1778119810462.png",
      "/hero_tent_1778119496158.png",
      "/chronicle_1_1778119918431.png",
      "/clear_span_tent_1778119637488.png",
      "/marquee_tent_1778119583238.png",
      "/staging_tent_1778119743118.png"
    ]
  },
  "TABLES": {
    title: "Types of Tables",
    items: ["Round Tables", "Rectangular Tables", "IBM Tables", "Cocktail Tables"],
    accessories: ["Table Cloths", "Skirting"],
    images: ["/marquee_tent_1778119583238.png"]
  },
  // Add more as needed...
};

export default function EquipmentRentalPage() {
  const [activeTab, setActiveTab] = useState("CHAIRS");
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const currentData = EQUIPMENT_DATA[activeTab] || EQUIPMENT_DATA["CHAIRS"];

  return (
    <div className="min-h-screen bg-[#0F172A]">
      
      {/* Header Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-[#E8D08D] leading-tight">Equipment Rental</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 font-bold italic leading-relaxed text-lg opacity-80">
            Our Equipment Rental can be done in conjunction with your tentage or as a standalone. 
            We have a large range of equipment ready for rental in 1-week notice. If you have any last 
            minute request, you may also contact us directly at our hotline 98253390. Do use the tabs 
            below to search for the type of equipment you need. If the item is not in the list below, 
            you may also check with us for ready stocks.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-y border-white/5 bg-[#131B2E] sticky top-24 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max py-8 gap-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setActiveImgIndex(0);
                }}
                className={`text-[11px] font-black tracking-[0.3em] transition-all relative px-2 ${
                  activeTab === cat ? "text-[#B48E4B]" : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-3 left-0 right-0 h-1 bg-[#B48E4B] rounded-full shadow-lg shadow-[#B48E4B]/20"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start"
          >
            
            {/* Gallery */}
            <div className="space-y-8">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.6)] border-8 border-white/5 bg-white/5">
                <Image 
                  src={currentData.images[activeImgIndex] || currentData.images[0]} 
                  alt={activeTab} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {currentData.images.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActiveImgIndex(i)}
                    className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                      activeImgIndex === i ? "border-[#B48E4B] scale-105 shadow-xl shadow-[#B48E4B]/10" : "border-white/5 opacity-30 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="thumb" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-16 py-6">
              <div className="space-y-10">
                <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D] border-l-8 border-[#B48E4B] pl-8">
                  {currentData.title}
                </h2>
                <ol className="space-y-5">
                  {currentData.items.map((item: string, i: number) => (
                    <li key={i} className="text-xl font-bold text-gray-200 italic flex items-start gap-6 group">
                      <span className="text-[#B48E4B] font-black group-hover:scale-125 transition-transform">{(i + 1).toString().padStart(2, '0')}.</span>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {currentData.accessories && (
                <div className="space-y-8 pt-16 border-t border-white/10">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-[#E8D08D]">
                    Accessories for {activeTab.toLowerCase()}
                  </h3>
                  <ul className="space-y-4">
                    {currentData.accessories.map((acc: string, i: number) => (
                      <li key={i} className="flex items-center gap-4 text-gray-400 font-bold italic text-lg opacity-80">
                        <span className="w-2 h-2 rounded-full bg-[#B48E4B]" />
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-12">
                <button className="bg-[#B48E4B] text-[#0F172A] px-16 py-6 rounded-2xl font-black uppercase tracking-[0.3em] hover:brightness-110 transition-all shadow-2xl shadow-[#B48E4B]/10 active:scale-95 flex items-center space-x-3 text-xs">
                  <span>Enquire about {activeTab.toLowerCase()}</span>
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </section>

      {/* Styles for hidden scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
}
