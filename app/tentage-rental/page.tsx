"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HERO_SLIDES = [
  {
    image: "/hero_tent_1778119496158.png",
    title: "Best in Singapore Event Solution",
    subtitle: "Professional and reliable event solution for all your needs"
  },
  {
    image: "/clear_span_tent_1778119637488.png",
    title: "Premium Tentage Rentals",
    subtitle: "High-quality structures for corporate and private events"
  }
];

const USPs = [
  { title: "Best Price Guarantee", desc: "We offer competitive pricing without compromising quality.", icon: "💰" },
  { title: "Rapid Response", desc: "Get your quotation and site visit within 24 hours.", icon: "⚡" },
  { title: "Top Quality Materials", desc: "All our equipment is well-maintained and premium grade.", icon: "🏆" },
  { title: "Reliability & Experience", desc: "Over 14 years of excellence in the event industry.", icon: "🤝" }
];

const REVIEWS = [
  { name: "Tan Ah Kow", rating: 5, text: "Excellent service and quality tents. Highly recommended for any event!" },
  { name: "Sarah Lim", rating: 5, text: "Very professional team. They handled everything perfectly from start to finish." },
  { name: "John Doe", rating: 5, text: "Best prices in Singapore for such premium quality equipment." }
];

const TENTAGE_ITEMS = [
  { title: "Portable Tent", desc: "Fast and reliable shelter for small events and functions.", image: "/clear_span_tent_1778119637488.png" },
  { title: "Single Sloping Tentage", desc: "Ideal for walkways and narrow spaces with modern design.", image: "/marquee_tent_1778119583238.png" },
  { title: "A-Shaped Tentage", desc: "Classic robust structure for large gatherings and exhibitions.", image: "/staging_tent_1778119743118.png" },
  { title: "Gazebo Tentage", desc: "Elegant and stylish tents for garden parties and high-end events.", image: "/multi_zone_tent_1778119810462.png" },
  { title: "Aircon Tentage", desc: "Fully enclosed climate-controlled structures for maximum comfort.", image: "/hero_tent_1778119496158.png" },
  { title: "Classic Tentage", desc: "Traditional reliable tentage for community and outdoor events.", image: "/clear_span_tent_1778119637488.png" }
];

const EQUIPMENT_ITEMS = [
  { title: "Chairs", desc: "Ambassador, Cushion, and Event chairs available.", image: "/chronicle_1_1778119918431.png" },
  { title: "Tables", desc: "Round, Rectangular, and IBM tables for all needs.", image: "/marquee_tent_1778119583238.png" },
  { title: "Fans / Cooling", desc: "Industrial Air Coolers and Misting Fans.", image: "/hero_tent_1778119496158.png" },
  { title: "Flooring / Carpet", desc: "Staging, ground leveling, and premium carpets.", image: "/staging_tent_1778119743118.png" }
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
    <div className="min-h-screen bg-white">

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
              className="object-cover brightness-50"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter"
          >
            {HERO_SLIDES[currentSlide].title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold mb-10 opacity-90"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl">
              Call us now
            </button>
            <button className="bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 bg-gray-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {USPs.map((usp, i) => (
            <div key={i} className="text-center space-y-4 group">
              <div className="text-4xl group-hover:scale-125 transition-transform duration-300 inline-block">{usp.icon}</div>
              <h3 className="text-lg font-black uppercase tracking-tighter italic">{usp.title}</h3>
              <p className="text-gray-600 text-sm font-medium">{usp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-red-700 py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="text-white text-center lg:text-left space-y-4 shrink-0">
            <h2 className="text-5xl font-black italic tracking-tighter leading-none">Google Reviews</h2>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-4xl font-black">4.8</span>
              <div className="flex text-yellow-400 text-2xl">★★★★★</div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-6 animate-marquee">
              {[...REVIEWS, ...REVIEWS].map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl min-w-[320px] shadow-xl">
                  <div className="flex text-yellow-500 mb-4">★★★★★</div>
                  <p className="text-gray-800 font-bold italic mb-4 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                  <p className="text-[#B48E4B] font-black uppercase text-xs tracking-widest">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Title */}
      <section className="py-24 text-center px-4">
        <h2 className="text-5xl md:text-6xl font-black text-black uppercase italic tracking-tighter leading-tight mb-4">
          Tentage and Equipment for Rental
        </h2>
        <div className="w-24 h-2 bg-[#B48E4B] mx-auto rounded-full" />
      </section>

      {/* Tentage Grid */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-black text-[#B48E4B] uppercase italic mb-12 border-l-8 border-[#B48E4B] pl-6 tracking-widest">Tentage Rental</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {TENTAGE_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="space-y-6 group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-black text-black uppercase italic tracking-tighter leading-none group-hover:text-[#B48E4B] transition-colors">{item.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-black text-[#B48E4B] uppercase italic mb-12 border-l-8 border-[#B48E4B] pl-6 tracking-widest">Equipment Rental</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {EQUIPMENT_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="space-y-6 group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-black text-black uppercase italic tracking-tighter leading-none group-hover:text-[#B48E4B] transition-colors">{item.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-[0.9]">
              More than 500 companies have trust us since 2010
            </h2>
            <div className="w-16 h-1.5 bg-[#B48E4B] rounded-full" />
            <div className="flex text-yellow-400 text-xl">★★★★★</div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-3 md:grid-cols-4 gap-8 opacity-40">
            {/* Logo placeholders with text labels */}
            {["Sheng Siong", "Citibank", "Shell", "DBS", "DSTA", "CapitaLand", "FairPrice", "UOB"].map((logo) => (
              <div key={logo} className="h-20 bg-gray-100 rounded-lg flex items-center justify-center font-black uppercase text-[10px] tracking-widest text-gray-400 grayscale hover:grayscale-0 transition-all border border-gray-200">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Navigation List */}
      <section className="py-24 bg-[#1a1c1e] text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">What kind of tentages and equipment you want? find it in the list below</h2>
            <div className="w-20 h-1 bg-[#B48E4B] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm text-gray-400 font-bold uppercase tracking-widest">
            <ul className="space-y-3">
              <li>Air-cooled Tentage</li>
              <li>Festive Tentage</li>
              <li>Exhibition Tentage</li>
              <li>Portable Tent/Gazebo</li>
              <li>Large Marquee Tentage</li>
            </ul>
            <ul className="space-y-3">
              <li>Air-Conditioner</li>
              <li>Industrial Air Cooler / Evap. Cooler</li>
              <li>Misting System / Fans</li>
              <li>Generator Set</li>
              <li>Light Fitting</li>
            </ul>
            <ul className="space-y-3">
              <li>Ambassador Chairs</li>
              <li>Cushion Chair</li>
              <li>Event Chairs and Tables</li>
              <li>Staging and Ground Leveling</li>
              <li>System Panel / Exhibition Booth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Contact Form */}
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
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Event Date*</label>
              <input type="date" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-black" required />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Event Location*</label>
              <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-black" placeholder="Where will the event be held?" required />
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
