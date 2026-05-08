"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const BENEFITS = [
  { title: "Easy Setup", desc: "Our modular system allows for rapid assembly and dismantling." },
  { title: "Modular Design", desc: "Completely customizable configurations to fit any floor space." },
  { title: "Professional Look", desc: "Clean, white-finished panels that create a premium environment." },
  { title: "Versatile Use", desc: "Perfect for art galleries, trade shows, and temporary walls." }
];

const SELECTION_GALLERY = [
  "/marquee_tent_1778119583238.png",
  "/clear_span_tent_1778119637488.png",
  "/staging_tent_1778119743118.png",
  "/multi_zone_tent_1778119810462.png",
  "/hero_tent_1778119496158.png"
];

const PRODUCT_SECTIONS = [
  {
    id: "wall-panels",
    title: "Modular Wall Panels",
    desc: "Standard 2.5m height panels perfect for exhibition partitions and backdrops.",
    specs: ["Standard Size: 1m(W) x 2.5m(H)", "Finish: White PVC / Aluminum Frame", "Modular connectivity for long runs", "Stable and self-supporting"],
    mainImage: "/clear_span_tent_1778119637488.png",
    thumbnails: 10
  },
  {
    id: "booth-setup",
    title: "Exhibition Booth Setup",
    desc: "Complete booth solutions including fascia boards and lighting.",
    specs: ["Custom sizes (3x3m, 6x3m, etc.)", "Includes overhead fascia board", "Optional carpeting and furniture", "Professional lighting included"],
    mainImage: "/marquee_tent_1778119583238.png",
    thumbnails: 12
  },
  {
    id: "counters",
    title: "Information Counters",
    desc: "Sleek counters for registration and product display.",
    specs: ["Standard size: 1m(L) x 0.5m(W) x 1m(H)", "Lockable storage cabinet", "Clean white finish", "Portable and easy to reposition"],
    mainImage: "/staging_tent_1778119743118.png",
    thumbnails: 8
  }
];

export default function SystemExhibitionPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/hero_tent_1778119496158.png" 
          alt="System Panel Hero" 
          fill 
          className="object-cover brightness-[0.3]"
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-4"
          >
            System Panel
          </motion.h1>
          <div className="w-24 h-2 bg-[#B48E4B] mx-auto rounded-full" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-100">
        {BENEFITS.map((benefit, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-lg font-black uppercase italic tracking-tight text-[#B48E4B]">▸ {benefit.title}</h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </section>

      {/* Selection Gallery */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-black mb-16 uppercase tracking-widest italic text-gray-400">Selection Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {SELECTION_GALLERY.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer border-2 border-white">
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 font-bold italic leading-relaxed text-lg opacity-80">
          Our System Panels are the industry standard for exhibition and trade shows in Singapore. 
          Constructed with premium aluminum frames and white PVC infill panels, they provide 
          a clean and professional look for any event. Whether you are building a simple partition 
          or a complex series of booths, our modular system is the perfect solution.
        </p>
      </section>

      {/* Partners / Logos */}
      <section className="py-20 border-y border-gray-50 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
          {["Logo1", "Logo2", "Logo3", "Logo4", "Logo5"].map((l) => (
            <div key={l} className="font-black text-2xl uppercase tracking-widest italic">{l}</div>
          ))}
        </div>
      </section>

      {/* Detailed Product Sections */}
      {PRODUCT_SECTIONS.map((section, idx) => (
        <section key={section.id} className="py-32 px-4 md:px-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Content */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none text-black">{section.title}</h2>
                  <div className="w-16 h-2 bg-[#B48E4B] rounded-full" />
                </div>
                <p className="text-gray-600 font-bold italic text-lg leading-relaxed">{section.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.specs.map((spec, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm font-bold text-gray-800">
                      <span className="text-[#B48E4B]">▸</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-[#8CB342] text-white px-10 py-4 rounded-lg font-black uppercase tracking-widest hover:bg-[#7a9b3a] transition-all shadow-xl active:scale-95">
                  Call for Quote
                </button>
              </div>

              {/* Visuals */}
              <div className="space-y-6">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image src={section.mainImage} alt={section.title} fill className="object-cover" />
                </div>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black flex items-center justify-center group cursor-pointer border-4 border-white shadow-xl">
                  <Image src={section.mainImage} alt="Video Preview" fill className="object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3 opacity-60">
              {Array.from({ length: section.thumbnails }).map((_, i) => (
                <div key={i} className="relative aspect-square rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                   <Image src={section.mainImage} alt="thumb" fill className="object-cover scale-150 grayscale" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cross-Rental / More Products */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-black uppercase italic tracking-tighter mb-16 border-b-4 border-black inline-block mx-auto">Explore More Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {["Tentage", "Chairs", "Tables", "Fans", "Flooring"].map((p) => (
            <div key={p} className="space-y-4 group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image src="/hero_tent_1778119496158.png" alt={p} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h4 className="text-center font-black uppercase italic text-sm tracking-widest group-hover:text-[#B48E4B] transition-colors">{p}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-gray-50 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none text-black">Connect with us to <span className="text-[#B48E4B]">start</span> your event</h2>
            <p className="text-gray-500 font-bold italic text-lg tracking-wide">Tell us about your event and we will get back to you shortly.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Full Name*</label>
              <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-black" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Email Address*</label>
              <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-black" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Phone Number*</label>
              <input type="tel" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-black" placeholder="+65 0000 0000" required />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Message*</label>
              <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-black resize-none" placeholder="Details of your request..." required />
            </div>
            <div className="md:col-span-2 pt-6 text-center">
              <button className="bg-[#1a1c1e] text-white px-16 py-5 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-2xl active:scale-[0.98]">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
