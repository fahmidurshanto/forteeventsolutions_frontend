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
  "/wall_panel_1.webp",
  "/wall_panel_2.webp",
  "/wall_panel_5.webp",
  "/counter_2.webp",
  "/image_4.webp"
];

const PRODUCT_SECTIONS = [
  {
    id: "wall-panels",
    title: "Modular Wall Panels",
    desc: "Standard 2.5m height panels perfect for exhibition partitions and backdrops.",
    specs: ["Standard Size: 1m(W) x 2.5m(H)", "Finish: White PVC / Aluminum Frame", "Modular connectivity for long runs", "Stable and self-supporting"],
    images: [
      "/clear_span_tent_1778119637488.webp",
      "/wall_panel_1.webp",
      "/wall_panel_2.webp",
      "/wall_panel_5.webp"
    ],
    video: "/tent-video-from-wedding.mp4",
    thumbnails: 10
  },
  {
    id: "booth-setup",
    title: "Exhibition Booth Setup",
    desc: "Complete booth solutions including fascia boards and lighting.",
    specs: ["Custom sizes (3x3m, 6x3m, etc.)", "Includes overhead fascia board", "Optional carpeting and furniture", "Professional lighting included"],
    images: [
      "/marquee_tent_1778119583238.webp",
      "/singaporean_wedding_banquet.webp",
      "/hero_tent_1778119496158.webp"
    ],
    video: "/wedding-reception-in-rural.mp4",
    thumbnails: 12
  },
  {
    id: "counters",
    title: "Information Counters",
    desc: "Sleek counters for registration and product display.",
    specs: ["Standard size: 1m(L) x 0.5m(W) x 1m(H)", "Lockable storage cabinet", "Clean white finish", "Portable and easy to reposition"],
    images: [
      "/staging_tent_1778119743118.webp",
      "/counter_2.webp",
      "/clear_span_tent_1778119637488.webp"
    ],
    video: "/wedding-hall.mp4",
    thumbnails: 8
  }
];

export default function SystemExhibitionPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/hero_tent_1778119496158.webp" 
          alt="System Panel Hero" 
          fill 
          sizes="100vw"
          className="object-cover brightness-[0.25]"
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-4 text-[#E8D08D]"
          >
            System Panel
          </motion.h1>
          <div className="w-24 h-2 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5">
        {BENEFITS.map((benefit, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-lg font-black uppercase italic tracking-tight text-[#B48E4B]">▸ {benefit.title}</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </section>

      {/* Selection Gallery */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-black mb-16 uppercase tracking-widest italic text-gray-500">Selection Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {SELECTION_GALLERY.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer border border-white/10">
              <Image src={img} alt="Gallery" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <p className="text-gray-300 font-bold italic leading-relaxed text-lg opacity-90">
          Our System Panels are the industry standard for exhibition and trade shows in Singapore. 
          Constructed with premium aluminum frames and white PVC infill panels, they provide 
          a clean and professional look for any event. Whether you are building a simple partition 
          or a complex series of booths, our modular system is the perfect solution.
        </p>
      </section>

      {/* Recent Tentage Events Gallery */}
      <section className="py-24 bg-[#131B2E] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-[#E8D08D]">Recent Tentage Events</h2>
            <div className="w-24 h-1 bg-[#B48E4B] rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "/hero_tent_1778119496158.webp",
              "/clear_span_tent_1778119637488.webp",
              "/marquee_tent_1778119583238.webp",
              "/staging_tent_1778119743118.webp",
              "/singaporean_wedding_banquet.webp"
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
              >
                <Image
                  src={img}
                  alt={`Tentage Event ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      {PRODUCT_SECTIONS.map((section, idx) => (
        <section key={section.id} className={`py-32 px-4 md:px-8 border-b border-white/5 ${idx % 2 === 1 ? 'bg-[#0F172A]' : 'bg-[#131B2E]'}`}>
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Content */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none text-[#E8D08D]">{section.title}</h2>
                  <div className="w-16 h-2 bg-[#B48E4B] rounded-full" />
                </div>
                <p className="text-gray-400 font-bold italic text-lg leading-relaxed">{section.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.specs.map((spec, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm font-bold text-gray-300">
                      <span className="text-[#B48E4B]">▸</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-10 py-4 btn-golden">
                  Call for Quote
                </button>
              </div>

              {/* Visuals */}
              <div className="space-y-6">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-8 border-white/5">
                  <Image src={section.images[0]} alt={section.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black flex items-center justify-center group cursor-pointer border-4 border-white/5 shadow-2xl">
                  <video 
                    src={section.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    controls 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3 mt-8">
              {Array.from({ length: section.thumbnails }).map((_, i) => (
                <div key={i} className="relative aspect-square rounded-lg bg-white/5 overflow-hidden border border-white/10 group cursor-pointer shadow-lg hover:border-[#B48E4B]/50 transition-colors">
                   <Image src={section.images[i % section.images.length]} alt="thumb" fill sizes="10vw" className="object-cover transition-all duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cross-Rental / More Products */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-black uppercase italic tracking-tighter mb-16 border-b-4 border-[#B48E4B] inline-block mx-auto text-white">Explore More Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { title: "Tentage", img: "/hero_tent_1778119496158.webp" },
            { title: "Chairs", img: "/chair_1.webp" },
            { title: "Tables", img: "/table_1.webp" },
            { title: "Fans", img: "/fan_1.webp" },
            { title: "Flooring", img: "/flooring_1.webp" }
          ].map((p) => (
            <div key={p.title} className="space-y-4 group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl">
                <Image src={p.img} alt={p.title} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h4 className="text-center font-black uppercase italic text-sm tracking-widest text-gray-400 group-hover:text-[#B48E4B] transition-colors">{p.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-[#0A0C0E] text-white px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-[#E8D08D]">Connect with us to <span className="text-[#B48E4B]">start</span> your event</h2>
            <p className="text-gray-500 font-bold italic text-lg tracking-wide">Tell us about your event and we will get back to you shortly.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Full Name*</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Email Address*</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Phone Number*</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="+65 0000 0000" required />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Message*</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20 resize-none" placeholder="Details of your request..." required />
            </div>
            <div className="md:col-span-2 pt-6 text-center">
              <button className="px-16 py-5 btn-golden">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
