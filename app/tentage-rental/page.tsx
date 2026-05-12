"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HERO_SLIDES = [
  {
    image: "/hero_tent_1778119496158.webp",
    title: "Best in Singapore Event Solution",
    subtitle: "Professional and reliable event solution for all your needs"
  },
  {
    image: "/clear_span_tent_1778119637488.webp",
    title: "Premium Tentage Rentals",
    subtitle: "High-quality structures for corporate and private events"
  }
];

const USPs = [
  { title: "Best Price Guarantee", desc: "We offer competitive pricing without compromising quality.", icon: "💰" },
  { title: "Rapid Response", desc: "Get your quotation and site visit within 24 hours.", icon: "⚡" },
  { title: "Top Quality Materials", desc: "All our equipment is well-maintained and premium grade.", icon: "🏆" },
  { title: "Professional Support", desc: "Our expert team ensures your event is a success with dedicated end-to-end support.", icon: "🛠️" }
];

const REVIEWS = [
  { name: "Tan Ah Kow", rating: 5, text: "Excellent service and quality tents. Highly recommended for any event!" },
  { name: "Sarah Lim", rating: 5, text: "Very professional team. They handled everything perfectly from start to finish." },
  { name: "John Doe", rating: 5, text: "Best prices in Singapore for such premium quality equipment." }
];

const TENTAGE_ITEMS = [
  { title: "Portable Tent", desc: "Fast and reliable shelter for small events and functions.", image: "/clear_span_tent_1778119637488.webp" },
  { title: "Single Sloping Tentage", desc: "Ideal for walkways and narrow spaces with modern design.", image: "/marquee_tent_1778119583238.webp" },
  { title: "A-Shaped Tentage", desc: "Classic robust structure for large gatherings and exhibitions.", image: "/staging_tent_1778119743118.webp" },
  { title: "Gazebo Tentage", desc: "Elegant and stylish tents for garden parties and high-end events.", image: "/singaporean_wedding_banquet.webp" },
  { title: "Aircon Tentage", desc: "Fully enclosed climate-controlled structures for maximum comfort.", image: "/hero_tent_1778119496158.webp" },
  { title: "Classic Tentage", desc: "Traditional reliable tentage for community and outdoor events.", image: "/clear_span_tent_1778119637488.webp" }
];

const EQUIPMENT_ITEMS = [
  { title: "Chairs", desc: "Ambassador, Cushion, and Event chairs available.", image: "/chronicle_1_1778119918431.webp" },
  { title: "Tables", desc: "Round, Rectangular, and IBM tables for all needs.", image: "/marquee_tent_1778119583238.webp" },
  { title: "Fans / Cooling", desc: "Industrial Air Coolers and Misting Fans.", image: "/hero_tent_1778119496158.webp" },
  { title: "Flooring / Carpet", desc: "Staging, ground leveling, and premium carpets.", image: "/staging_tent_1778119743118.webp" }
];

export default function TentageRentalPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A]">

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[currentSlide].image}
              alt="Hero"
              fill
              sizes="100vw"
              className="object-cover brightness-[0.25]"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-black mb-6 uppercase italic tracking-tighter text-[#E8D08D] leading-none"
          >
            {HERO_SLIDES[currentSlide].title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold mb-12 opacity-80 italic"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-5 btn-golden">
              Call us now
            </button>
            <button className="px-12 py-5 btn-golden">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-24 bg-[#131B2E] px-4 md:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {USPs.map((usp, i) => (
            <div key={i} className="text-center space-y-6 group">
              <div className="text-5xl group-hover:scale-125 transition-transform duration-500 inline-block drop-shadow-2xl">{usp.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tighter italic text-[#E8D08D]">{usp.title}</h3>
              <p className="text-gray-400 text-sm font-medium italic opacity-80">{usp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#450a0a] py-24 px-4 md:px-8 overflow-hidden border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="text-white text-center lg:text-left space-y-6 shrink-0">
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter leading-none text-[#E8D08D]">Google Reviews</h2>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-5xl font-black">4.8</span>
              <div className="flex text-yellow-400 text-2xl drop-shadow-lg">★★★★★</div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-8 animate-marquee">
              {[...REVIEWS, ...REVIEWS].map((review, i) => (
                <div key={i} className="bg-[#0F172A] p-10 rounded-[32px] min-w-[380px] shadow-2xl border border-white/10">
                  <div className="flex text-yellow-500 mb-6 text-lg">★★★★★</div>
                  <p className="text-gray-300 font-bold italic mb-6 text-base leading-relaxed opacity-90">&ldquo;{review.text}&rdquo;</p>
                  <p className="text-[#B48E4B] font-black uppercase text-xs tracking-[0.3em]">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Title */}
      <section className="py-32 text-center px-4">
        <h2 className="text-5xl md:text-7xl font-black text-[#E8D08D] uppercase italic tracking-tighter leading-tight mb-8">
          Tentage and Equipment for Rental
        </h2>
        <div className="w-24 h-2 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
      </section>

      {/* Tentage Grid */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-black text-[#B48E4B] uppercase italic mb-16 border-l-8 border-[#B48E4B] pl-8 tracking-[0.2em]">Tentage Rental</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {TENTAGE_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-4 border-white/5">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none group-hover:text-[#B48E4B] transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed italic opacity-80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-black text-[#B48E4B] uppercase italic mb-16 border-l-8 border-[#B48E4B] pl-8 tracking-[0.2em]">Equipment Rental</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {EQUIPMENT_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-4 border-white/5">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none group-hover:text-[#B48E4B] transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed italic opacity-80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-32 bg-[#131B2E] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight text-white">
              Building trust with leading corporations across Singapore
            </h2>
            <div className="w-16 h-2 bg-[#B48E4B] rounded-full mx-auto lg:mx-0 shadow-lg shadow-[#B48E4B]/20" />
            <div className="flex text-yellow-400 text-2xl justify-center lg:justify-start drop-shadow-lg">★★★★★</div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-20 hover:opacity-100 transition-opacity duration-1000 grayscale hover:grayscale-0">
            {["Sheng Siong", "Citibank", "Shell", "DBS", "DSTA", "CapitaLand", "FairPrice", "UOB"].map((logo) => (
              <div key={logo} className="h-24 bg-white/5 rounded-2xl flex items-center justify-center font-black uppercase text-[11px] tracking-[0.3em] text-white border border-white/5 hover:border-[#B48E4B]/30 transition-all hover:bg-white/10">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Navigation List */}
      <section className="py-32 bg-[#0A0C0E] text-white px-4 md:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-[#E8D08D] leading-tight max-w-4xl mx-auto">What kind of tentages and equipment do you need?</h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-sm text-gray-400 font-bold uppercase tracking-[0.3em] italic">
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Air-cooled Tentage</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Festive Tentage</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Exhibition Tentage</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Portable Tent/Gazebo</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Large Marquee Tentage</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Air-Conditioner</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Industrial Air Cooler</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Misting System / Fans</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Generator Set</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Light Fitting</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Ambassador Chairs</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Cushion Chair</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Event Chairs and Tables</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> Staging and Ground Leveling</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B48E4B] rounded-full" /> System Panel Booth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Contact Form */}
      <section className="py-32 bg-[#0F172A] px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-[#E8D08D]">Connect with us to <span className="text-[#B48E4B]">start</span> your event</h2>
            <p className="text-gray-500 font-bold italic text-lg tracking-wide">Tell us about your event and we will get back to you shortly.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Full Name*</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Email Address*</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Phone Number*</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="+65 0000 0000" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Event Date*</label>
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white" required />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Event Location*</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="Where will the event be held?" required />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Message*</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20 resize-none" placeholder="Details of your request..." required />
            </div>
            <div className="md:col-span-2 pt-8 text-center">
              <button className="px-16 py-6 btn-golden">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>


      {/* Custom Styles for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
