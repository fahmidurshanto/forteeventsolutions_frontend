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
    <div className="min-h-screen bg-white">
      
      {/* Header Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-black uppercase italic tracking-tighter text-black">Equipment Rental</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 font-bold italic leading-relaxed">
            Our Equipment Rental can be done in conjunction with your tentage or as a standalone. 
            We have a large range of equipment ready for rental in 1-week notice. If you have any last 
            minute request, you may also contact us directly at our hotline 98253390. Do use the tabs 
            below to search for the type of equipment you need. If the item is not in the list below, 
            you may also check with us for ready stocks.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-y border-gray-100 bg-gray-50/50 sticky top-24 z-50">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max py-6 gap-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setActiveImgIndex(0);
                }}
                className={`text-[11px] font-black tracking-[0.2em] transition-all relative ${
                  activeTab === cat ? "text-[#B48E4B]" : "text-gray-400 hover:text-black"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[#B48E4B] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
          >
            
            {/* Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-50">
                <Image 
                  src={currentData.images[activeImgIndex] || currentData.images[0]} 
                  alt={activeTab} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-3">
                {currentData.images.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActiveImgIndex(i)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      activeImgIndex === i ? "border-[#B48E4B] scale-105 shadow-md" : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="thumb" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-12 py-6">
              <div className="space-y-8">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter text-black border-l-8 border-[#B48E4B] pl-6">
                  {currentData.title}
                </h2>
                <ol className="space-y-4">
                  {currentData.items.map((item: string, i: number) => (
                    <li key={i} className="text-lg font-bold text-gray-700 italic flex items-start gap-4">
                      <span className="text-[#B48E4B] font-black">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {currentData.accessories && (
                <div className="space-y-6 pt-12 border-t border-gray-100">
                  <h3 className="text-xl font-black uppercase italic tracking-tighter text-black">
                    Accessories for the {activeTab.toLowerCase()}
                  </h3>
                  <ul className="space-y-3">
                    {currentData.accessories.map((acc: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 font-bold italic">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B48E4B]" />
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-12">
                <button className="bg-green-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:bg-green-700 transition-all shadow-xl active:scale-95 flex items-center space-x-3">
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
