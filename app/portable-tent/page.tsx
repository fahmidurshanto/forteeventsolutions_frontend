"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const TENT_TYPES = [
  {
    id: "3x3",
    title: "3m x 3m Portable Gazebo Tent",
    image: "/clear_span_tent_1778119637488.png",
  },
  {
    id: "4.5x3",
    title: "4.5m x 3m Portable Gazebo Tent",
    image: "/marquee_tent_1778119583238.png",
  },
  {
    id: "6x3",
    title: "6m x 3m Portable Gazebo Tent",
    image: "/staging_tent_1778119743118.png",
  },
  {
    id: "custom",
    title: "Purchase custom tent with/without print",
    image: "/multi_zone_tent_1778119810462.png",
  }
];

const PRODUCT_SECTIONS = [
  {
    id: "3x3-detail",
    title: "3m x 3m Portable Gazebo Tent",
    specs: [
      "Dimension: 3m x 3m x 2.4m - 2.8m (adjustable height)",
      "Roof with side wall coverings: White / 4 sides",
      "Colors available: Red, Blue, Green, White",
      "Weight: 22kg",
      "View Capacity & Recommendations",
      "fits 1 x 4ft round table with 5-6pax",
      "fits 1 x 4ft / 6ft rectangular table with 6-8pax",
    ],
    price: "From $180.00",
    images: ["/clear_span_tent_1778119637488.png", "/marquee_tent_1778119583238.png"]
  },
  {
    id: "4.5x3-detail",
    title: "3m x 4.5m Portable Gazebo Tent",
    specs: [
      "Dimension: 3m x 4.5m x 2.4m - 2.8m",
      "Roof with side wall coverings: White / 4 sides",
      "Colors available: White",
      "View Capacity & Recommendations",
      "fits 2 x 4ft round table with 10-12pax",
      "fits 2 x 4ft / 6ft rectangular table with 12-16pax",
    ],
    price: "From $240.00",
    images: ["/marquee_tent_1778119583238.png", "/clear_span_tent_1778119637488.png"]
  },
  {
    id: "6x3-detail",
    title: "3m x 6m Portable Gazebo Tent",
    specs: [
      "Dimension: 3m x 6m x 2.4m - 2.8m",
      "Roof with side wall coverings: White / 4 sides",
      "Colors available: White",
      "View Capacity & Recommendations",
      "fits 3 x 4ft round table with 15-18pax",
      "fits 3 x 4ft / 6ft rectangular table with 18-24pax",
    ],
    price: "From $320.00",
    images: ["/staging_tent_1778119743118.png", "/multi_zone_tent_1778119810462.png"]
  }
];

export default function PortableTentPage() {
  const [activeThumbnails, setActiveThumbnails] = useState<Record<string, number>>({
    "3x3-detail": 0,
    "4.5x3-detail": 0,
    "6x3-detail": 0,
  });

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero_tent_1778119496158.png"
          alt="Portable Tent Hero"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic uppercase leading-none"
          >
            Easy solution for <span className="text-[#B48E4B]">small parties</span> or functions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold opacity-90 tracking-wide"
          >
            Professional and premium portable pop up gazebos for all types of events
          </motion.p>
        </div>
      </section>

      {/* Grid Selection */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-black mb-16 text-gray-900 uppercase tracking-widest italic">Click to see the various sizes available</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TENT_TYPES.map((tent) => (
            <motion.div
              key={tent.id}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-100"
            >
              <Image src={tent.image} alt={tent.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white font-black italic text-xl leading-tight uppercase tracking-tighter">{tent.title}</h3>
                <div className="w-12 h-1.5 bg-[#B48E4B] mt-4 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20">
          <button className="bg-red-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl hover:shadow-red-600/20 active:scale-95">
            Call us now
          </button>
          <button className="bg-green-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:bg-green-700 transition-all shadow-xl hover:shadow-green-600/20 flex items-center space-x-3 active:scale-95">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            <span>WhatsApp Us</span>
          </button>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-[#fffef0] px-4 md:px-8 border-y border-yellow-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-10 text-black uppercase tracking-tighter italic">Portable Gazebo Tents</h2>
          <p className="text-gray-700 leading-relaxed text-base italic font-bold opacity-80">
            Portable Tents, also known as Pop-Up Gazebos, provide a fast and reliable shelter for any event.
            Perfect for parties, functions, markets, and exhibitions, these tents are designed for quick setup
            and portability without compromising on quality. Our tents feature reinforced frames and water-resistant
            covers to ensure durability and protection from the elements. Whether you need a simple shade for
            your backyard or a series of branded stalls for a commercial event, our portable tents are the
            ideal choice for their versatility and ease of use.
          </p>
        </div>
      </section>

      {/* Product Detail Sections */}
      {PRODUCT_SECTIONS.map((section, idx) => (
        <section key={section.id} className={`py-32 px-4 md:px-8 ${idx % 2 === 1 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Specs */}
            <div className={`space-y-10 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-black uppercase italic tracking-tighter leading-tight">
                  {section.title}
                </h2>
                <div className="w-20 h-2 bg-[#B48E4B] rounded-full" />
              </div>
              <ul className="space-y-5">
                {section.specs.map((spec, i) => (
                  <li key={i} className="flex items-start space-x-4 text-gray-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B48E4B] mt-1.5 shrink-0 shadow-sm shadow-[#B48E4B]/40" />
                    <span className={`text-base font-bold ${spec.toLowerCase().includes('fits') ? 'text-[#B48E4B]' : ''}`}>{spec}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-3xl font-black text-[#B48E4B] italic tracking-tighter">{section.price}</p>
                <button className="bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg active:scale-95">
                  WhatsApp Us
                </button>
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-6">
              <motion.div
                key={activeThumbnails[section.id]}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] border-8 border-white"
              >
                <Image
                  src={section.images[activeThumbnails[section.id] || 0]}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="flex gap-4 justify-center">
                {section.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveThumbnails(prev => ({ ...prev, [section.id]: i }))}
                    className={`relative w-28 aspect-[4/3] rounded-xl overflow-hidden border-4 transition-all duration-300 ${activeThumbnails[section.id] === i ? 'border-[#B48E4B] scale-110 shadow-lg' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'
                      }`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* Pairing Section */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-black uppercase italic tracking-tighter leading-[0.9]">
              Pair with our <br />
              <span className="text-[#B48E4B]">Tables, Chairs <br /> and Fans</span>
            </h2>
          </div>
          <p className="text-gray-700 font-bold leading-relaxed text-lg opacity-80 italic">
            Enhance your event experience by pairing our portable tents with our wide range of premium furniture
            and climate control solutions. From elegant ambassador chairs to powerful air coolers, we provide
            everything you need to create a comfortable and stylish environment for your guests.
          </p>
          <button className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-2xl active:scale-95">
            Explore Furniture
          </button>
        </div>
        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white">
          <Image src="/chronicle_1_1778119918431.png" alt="Event setup" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-[#1a1c1e] text-white px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#B48E4B]/5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">Get your custom <span className="text-[#B48E4B]">quotation</span> now</h2>
            <p className="text-gray-400 font-bold italic text-lg">Fill up the form below and we will get back to you within 24 hours.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.3em] text-[#B48E4B]">Name*</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="Full Name" required />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.3em] text-[#B48E4B]">Contact number*</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="Phone Number" required />
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.3em] text-[#B48E4B]">Email*</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="Email Address" required />
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.3em] text-[#B48E4B]">Message / Required Items*</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20 resize-none" placeholder="Describe your event requirements (date, location, quantity)..." required />
            </div>
            <div className="md:col-span-2 pt-6">
              <button className="w-full bg-[#B48E4B] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-[#a67d3b] transition-all shadow-2xl hover:shadow-[#B48E4B]/30 active:scale-[0.98]">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
