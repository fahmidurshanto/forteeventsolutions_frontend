"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const TENTAGE_DATA = [
  { title: "Dome Tent", image: "/photos_from_pdf/WhatsApp Image 2026-05-16 at 10.10.58 AM.jpeg", href: "/portable-tent/dome-tent" },
  { title: "A-Shaped Tent", image: "/staging_tent_1778119743118.webp", href: "/portable-tent/a-shaped-tent" },
  { title: "Slope Tent", image: "/marquee_tent_1778119583238.webp", href: "/portable-tent/slope-tent" },
  { title: "Gazebo Tent", image: "/singaporean_wedding_banquet.webp", href: "/portable-tent/gazebo-tent" },
  { title: "Air Cooler Tent", image: "/clear_span_tent_1778119637488.webp", href: "/portable-tent/air-cooler-tent" },
  { title: "'Wayang' Tent and Stage", image: "/%27Wayang%27%20Tent%20and%20Stage/wayang_tent_1.webp", href: "/portable-tent/wayang-tent" },
  { title: "Related Accessories", image: "/Accessories/accessories_11.webp", href: "/accessories" },
];

const EQUIPMENT_CATEGORIES = [
  {
    title: "Event & Panel Rentals",
    items: [
      { name: "Chair & Table Rental", href: "/chair-table-rental" },
      { name: "• Chair Rental & PVC Details", href: "/chair-rental" },
      { name: "• Table Rental Catalog", href: "/table-rental" },
      { name: "System / Exhibition Panel", href: "/system-exhibition-panel" },
      { name: "Equipment Rental Main", href: "/equipment-rental" },
      { name: "Road Safety & Barriers", href: "/chair-rental/road-closure" }
    ]
  },
  {
    title: "Portable Tent Collections",
    items: [
      { name: "Portable Tent Hub", href: "/portable-tent" },
      { name: "• A-Shaped Tent", href: "/portable-tent/a-shaped-tent" },
      { name: "• Slope Tent", href: "/portable-tent/slope-tent" },
      { name: "• Gazebo Tent", href: "/portable-tent/gazebo-tent" },
      { name: "• Dome Tent", href: "/portable-tent/dome-tent" },
      { name: "• Wayang Tent & Stage", href: "/portable-tent/wayang-tent" },
      { name: "• Air Cooler Tent", href: "/portable-tent/air-cooler-tent" }
    ]
  },
  {
    title: "Premium Accessories",
    items: [
      { name: "Accessories Main Directory", href: "/accessories" },
      { name: "• Barricades & Q-Poles", href: "/accessories/barricades" },
      { name: "• Lighting Solutions", href: "/accessories/lighting-solutions" },
      { name: "• Fans & Cooling Systems", href: "/accessories/cooling-systems" },
      { name: "• Table Cloth & Skirting", href: "/accessories/table-cloth-skirting" },
      { name: "• Mobile Toilets", href: "/accessories/mobile-toilet" },
      { name: "• Portable Wash Basin", href: "/accessories/wash-basin" },
      { name: "• Custom Garment Racks", href: "/accessories/custom-rack" },
      { name: "• Flower Arrangements", href: "/accessories/flower-arrangement" }
    ]
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="flex items-center justify-between px-4 lg:px-8 h-24 bg-[#0F172A] border-b border-white/5 sticky top-0 z-[100]">
      {/* Logo */}
      <div className="flex-shrink-0 h-full">
        <Link href="/" className="block h-full py-1">
          <Image
            src="/forteeventsolutions_logo.webp"
            alt="Forte Event Solutions Logo"
            width={300}
            height={100}
            className="object-contain h-full w-auto brightness-150"
            priority
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-7 text-[15px] h-full">
        <Link href="/" className="font-bold text-white tracking-tight">Home</Link>

        {/* Chair & Table Rental Dropdown */}
        <div
          className="relative h-full flex items-center group"
          onMouseEnter={() => setActiveMenu('chair')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link href="/chair-table-rental" className="font-semibold text-gray-400 group-hover:text-white transition-colors tracking-tight">
            Chair & Table Rental
          </Link>
          <AnimatePresence>
            {activeMenu === 'chair' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-[#1e293b] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 py-8 px-20 flex justify-between z-[110]"
              >
                <Link href="/chair-rental" className="text-lg font-bold text-white hover:text-[#B48E4B] transition-colors">
                  Chair Rental
                </Link>
                <Link href="/table-rental" className="text-lg font-bold text-white hover:text-[#B48E4B] transition-colors">
                  Table Rental
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Portable Tent Horizontal Mega Menu */}
        <div
          className="relative h-full flex items-center group"
          onMouseEnter={() => setActiveMenu('tent')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link href="/portable-tent" className="font-semibold text-gray-400 group-hover:text-white transition-colors tracking-tight">
            Portable Tent
          </Link>
          <AnimatePresence>
            {activeMenu === 'tent' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[1100px] bg-[#1e293b] shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-white/10 py-10 px-8 z-[110] rounded-b-xl"
              >
                <div className="grid grid-cols-7 gap-6">
                  {TENTAGE_DATA.map((item, index) => (
                    <Link key={index} href={item.href} className="group/item">
                      <div className="space-y-4">
                        <h3 className="text-[13px] font-bold text-white group-hover/item:text-[#B48E4B] transition-colors leading-tight min-h-[32px]">
                          {item.title}
                        </h3>
                        <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 shadow-sm">
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
          <Link href="/equipment-rental" className="font-bold text-white tracking-tight">
            Equipment Rental
          </Link>
          <AnimatePresence>
            {activeMenu === 'equipment' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] bg-[#1e293b] shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/10 py-12 px-12 z-[110] rounded-b-2xl"
              >
                <div className="grid grid-cols-3 gap-12">
                  {EQUIPMENT_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="space-y-6">
                      <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
                        {category.title}
                      </h3>
                      <ul className="space-y-2.5">
                        {category.items.map((item, i) => (
                          <li key={i} className="group/item flex items-start gap-2 cursor-pointer">
                            {!item.name.startsWith('•') && (
                              <span className="text-gray-500 text-[10px] mt-1 group-hover/item:text-[#B48E4B] transition-colors">▸</span>
                            )}
                            <Link
                              href={item.href}
                              className={`text-[13px] font-medium leading-tight transition-colors group-hover/item:text-[#B48E4B] ${
                                item.name.startsWith('•') ? 'text-gray-500 pl-4' : 'text-gray-300'
                              }`}
                            >
                              {item.name}
                            </Link>
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

        <Link href="/system-exhibition-panel" className="font-semibold text-gray-400 hover:text-white transition-colors tracking-tight">System/Exhibition Panel</Link>
        <Link href="/accessories" className="font-semibold text-gray-400 hover:text-white transition-colors tracking-tight">Accessories</Link>
        <Link href="/contact" className="font-semibold text-gray-400 hover:text-white transition-colors tracking-tight">Contact Us</Link>
      </div>

      {/* Search Icon */}
      <div className="flex items-center ml-4">
        <button className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
