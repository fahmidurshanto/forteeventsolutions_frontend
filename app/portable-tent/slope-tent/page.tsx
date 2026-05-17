"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const AVAILABLE_WIDTHS = ["8ft", "10ft", "12ft", "14ft", "16ft", "18.5ft", "20ft"];

const GALLERY_IMAGES = [
  "/Slope%20Tent/slope_tent_1.webp",
  "/Slope%20Tent/slope_tent_2.webp",
  "/marquee_tent_1778119583238.webp",
];

export default function SlopeTentPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <RentalHero title="Slope Tent" image="/Slope%20Tent/slope_tent_1.webp" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm font-bold italic">
          <Link href="/portable-tent" className="text-gray-500 hover:text-[#B48E4B] transition-colors">
            Portable Tent
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#B48E4B]">Slope Tent</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            The Slope Tent features a single-slope design that is perfect for walkways, corridors, and
            narrow spaces. Its lean-to structure allows it to be attached alongside buildings or used
            independently, making it an extremely versatile option for events of all kinds.
          </p>
        </div>
      </section>

      {/* Available Sizes */}
      <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">
              Available Widths
            </h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
            <p className="text-gray-400 italic font-medium text-lg mt-4">
              Select the width that best fits your event space
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
            {AVAILABLE_WIDTHS.map((width, i) => (
              <motion.div
                key={width}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group relative bg-[#131B2E] border border-white/10 rounded-2xl p-8 text-center cursor-pointer hover:border-[#B48E4B]/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#B48E4B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <span className="text-3xl md:text-4xl font-black text-white group-hover:text-[#E8D08D] transition-colors duration-300 italic tracking-tighter">
                    {width}
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mt-3 group-hover:text-[#B48E4B] transition-colors">
                    Width
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#131B2E] border-y border-white/5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">Gallery</h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border border-white/10 group"
              >
                <Image src={img} alt={`Slope Tent gallery ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">
              Why Choose Our <span className="text-[#B48E4B]">Slope Tent</span>?
            </h2>
            <ul className="space-y-5">
              {[
                "Single-slope design ideal for walkways, corridors, and sheltered paths",
                "Available in 7 widths ranging from 8ft to 20ft",
                "Can be attached to buildings or used as standalone structures",
                "Excellent for food stalls, registration areas, and covered walkways",
                "Lightweight yet durable frame with waterproof coverings",
                "Professional installation with minimal disruption to your venue",
              ].map((feature, i) => (
                <li key={i} className="flex items-start space-x-4 text-gray-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B48E4B] mt-1.5 shrink-0 shadow-sm shadow-[#B48E4B]/40" />
                  <span className="text-base font-bold italic">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white/5">
            <Image src="/Slope%20Tent/slope_tent_2.webp" alt="Slope Tent setup" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </section>

      <ServiceFeatures />
      <EnquiryForm />
    </main>
  );
}
