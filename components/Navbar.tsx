"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TENT_DATA = [
  {
    title: "3m x 3m tent",
    caption: "fits 1 x 4ft round table with 5-6pax",
    openImage: "/clear_span_tent_1778119637488.png",
    walledImage: "/marquee_tent_1778119583238.png",
  },
  {
    title: "3m x 4.5m tent",
    caption: "fits 2 x 2ft x 6ft rectangle table with 6-8pax",
    openImage: "/marquee_tent_1778119583238.png",
    walledImage: "/staging_tent_1778119743118.png",
  },
  {
    title: "3m x 6m tent",
    caption: "fits 2 x 4ft round table with 8-10pax",
    openImage: "/staging_tent_1778119743118.png",
    walledImage: "/multi_zone_tent_1778119810462.png",
  },
];

const TENTAGE_DATA = [
  { title: "Portable Tent", image: "/clear_span_tent_1778119637488.png", href: "/portable-tent" },
  { title: "Single Sloping Tentage", image: "/marquee_tent_1778119583238.png", href: "/tentage-rental#sloping" },
  { title: "A-Shaped Tentage", image: "/staging_tent_1778119743118.png", href: "/tentage-rental#a-shaped" },
  { title: "Aircon Tentage", image: "/hero_tent_1778119496158.png", href: "/tentage-rental#aircon" },
  { title: "Classic Tentage", image: "/clear_span_tent_1778119637488.png", href: "/tentage-rental#classic" },
  { title: "Gazebo Tentage", image: "/multi_zone_tent_1778119810462.png", href: "/tentage-rental#gazebo" },
];

const EQUIPMENT_CATEGORIES = [
  {
    title: "Electric Equipment",
    items: [
      "Battery Generator Rental – Bluetti",
      "Fan Rental | Industrial Fans | Aircooler",
      "Portable Aircon Rental",
      "Generator Rental",
      "Lights",
      "Wiring Rental",
      "PA System Rental",
      "Projector Rental"
    ]
  },
  {
    title: "Others",
    items: [
      "Bouncy Castle Rental",
      "Barricades Rental",
      "Chairs and Table Rental | Well Maintained & Affordable",
      "• Chair Rental",
      "• Table Rental – Cocktail, Round, Square, Rectangle Tables",
      "Exhibition Carpets for Rental",
      "Flooring and Carpeting",
      "Portable Tent",
      "Portable Toilets",
      "Queue Poles",
      "Rostrum Rental",
      "System Panel / Exhibition Panel",
      "Stage Rental"
    ]
  },
  {
    title: "Wedding Decoration",
    items: [
      "Fairy Lights Rental",
      "Wedding Arch Rental",
      "Wedding Backdrop"
    ]
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="flex items-center justify-between px-4 lg:px-8 h-24 bg-white border-b border-gray-200 sticky top-0 z-[100]">
      {/* Logo */}
      <div className="flex-shrink-0 h-full">
        <Link href="/" className="block h-full py-1">
          <Image 
            src="/forteeventsolutions_logo.jpeg" 
            alt="Forte Event Solutions Logo" 
            width={300} 
            height={100} 
            className="object-contain h-full w-auto"
            priority
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-7 text-[15px] h-full">
        <Link href="/" className="font-bold text-black tracking-tight">Home</Link>
        
        {/* Chair & Table Rental Dropdown */}
        <div 
          className="relative h-full flex items-center group"
          onMouseEnter={() => setActiveMenu('chair')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link href="/chair-table-rental" className="font-semibold text-gray-400 group-hover:text-black transition-colors tracking-tight">
            Chair & Table Rental
          </Link>
          <AnimatePresence>
            {activeMenu === 'chair' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 py-8 px-20 flex justify-between z-[110]"
              >
                <Link href="/chair-rental" className="text-lg font-bold text-black hover:text-yellow-600 transition-colors">
                  Chair Rental
                </Link>
                <Link href="/table-rental" className="text-lg font-bold text-black hover:text-yellow-600 transition-colors">
                  Table Rental
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Portable Tent Mega Menu */}
        <div 
          className="relative h-full flex items-center group"
          onMouseEnter={() => setActiveMenu('tent')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link href="/portable-tent" className="font-semibold text-gray-400 group-hover:text-black transition-colors tracking-tight">
            Portable Tent
          </Link>
          <AnimatePresence>
            {activeMenu === 'tent' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-[#fffef0] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-yellow-100/50 py-8 px-10 z-[110] rounded-b-xl"
              >
                <div className="grid grid-cols-1 gap-10">
                  {TENT_DATA.map((tent, index) => (
                    <div key={index} className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        {/* Open Variant */}
                        <motion.div 
                          whileHover={{ y: -3 }}
                          className="relative aspect-[16/10] bg-white rounded shadow-sm border border-yellow-100 overflow-hidden group/img"
                        >
                          <Image 
                            src={tent.openImage} 
                            alt={`${tent.title} open`} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                        </motion.div>

                        {/* Walled Variant */}
                        <motion.div 
                          whileHover={{ y: -3 }}
                          className="relative aspect-[16/10] bg-white rounded shadow-sm border border-yellow-100 overflow-hidden group/img"
                        >
                          <Image 
                            src={tent.walledImage} 
                            alt={`${tent.title} with walls`} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                        </motion.div>
                      </div>
                      
                      {/* Caption Section */}
                      <div className="text-center">
                        <h3 className="text-[12px] font-black text-black uppercase tracking-widest mb-0.5 italic leading-none">
                          {tent.title}
                        </h3>
                        <p className="text-[9px] text-gray-700 font-bold leading-tight">
                          — {tent.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tentage Rental Horizontal Mega Menu */}
        <div 
          className="relative h-full flex items-center group"
          onMouseEnter={() => setActiveMenu('tentage')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link href="/tentage-rental" className="font-bold text-black tracking-tight">
            Tentage Rental
          </Link>
          <AnimatePresence>
            {activeMenu === 'tentage' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[1100px] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-gray-100 py-10 px-8 z-[110] rounded-b-xl"
              >
                <div className="grid grid-cols-6 gap-6">
                  {TENTAGE_DATA.map((item, index) => (
                    <Link key={index} href={item.href} className="group/item">
                      <div className="space-y-4">
                        <h3 className="text-[13px] font-bold text-black group-hover/item:text-yellow-600 transition-colors leading-tight min-h-[32px]">
                          {item.title}
                        </h3>
                        <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Equipment Rental Mega Menu */}
        <div 
          className="relative h-full flex items-center group"
          onMouseEnter={() => setActiveMenu('equipment')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link href="/equipment-rental" className="font-bold text-black tracking-tight">
            Equipment Rental
          </Link>
          <AnimatePresence>
            {activeMenu === 'equipment' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.18)] border border-gray-100 py-12 px-12 z-[110] rounded-b-2xl"
              >
                <div className="grid grid-cols-3 gap-12">
                  {EQUIPMENT_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="space-y-6">
                      <h3 className="text-lg font-bold text-black border-b border-gray-100 pb-3">
                        {category.title}
                      </h3>
                      <ul className="space-y-2.5">
                        {category.items.map((item, i) => (
                          <li key={i} className="group/item flex items-start gap-2 cursor-pointer">
                            {!item.startsWith('•') && <span className="text-gray-400 text-[10px] mt-1.5 group-hover/item:text-yellow-600 transition-colors">▸</span>}
                            <span className={`text-[13px] font-medium leading-tight transition-colors group-hover/item:text-yellow-600 ${
                              item.startsWith('•') ? 'text-gray-500 pl-4' : 'text-gray-700'
                            }`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/system-exhibition-panel" className="font-semibold text-gray-400 hover:text-black transition-colors tracking-tight">System/Exhibition Panel</Link>
        <Link href="/contact" className="font-semibold text-gray-400 hover:text-black transition-colors tracking-tight">Contact Us</Link>
      </div>

      {/* Search Icon */}
      <div className="flex items-center ml-4">
        <button className="p-2 text-gray-500 hover:text-black transition-colors focus:outline-none cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
