"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const GALLERY_IMAGES = [
  "/wash_basin/basin_1.webp",
  "/wash_basin/basin_2.webp",
  "/wash_basin/basin_3.webp",
  "/wash_basin/basin_4.webp",
];

export default function WashBasinPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <RentalHero title="Portable Wash Basin" image="/wash_basin/basin_1.webp" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm font-bold italic">
          <Link href="/accessories" className="text-gray-500 hover:text-[#B48E4B] transition-colors">
            Accessories
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#B48E4B]">Wash Basin</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            Elevate event hygiene and guest comfort with our modern Portable Wash Basins.
            Ideal for food festivals, carnivals, outdoor banquets, and sites where mains plumbing is unavailable,
            these high-capacity stations feature touch-free foot-pump operation and integrated soap/towel dispensers
            to ensure a completely sanitary experience.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-[#0F172A] px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">Product Gallery</h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Image src={img} alt={`Wash Basin ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Wash Basins */}
      <section className="py-24 px-4 md:px-8 bg-[#131B2E] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">
              Why Choose Our <span className="text-[#B48E4B]">Wash Basins</span>?
            </h2>
            <ul className="space-y-5">
              {[
                "100% hands-free foot-pump water operation for ultimate hygiene",
                "Integrated liquid soap and paper towel dispensers on every unit",
                "High-capacity fresh and waste water tanks built inside the station",
                "Sleek, compact, and completely independent of external plumbing",
                "Eco-friendly, food-grade polyethylene build designed for high traffic",
                "Rapid delivery, precise placement, and full maintenance service",
              ].map((f, i) => (
                <li key={i} className="flex items-start space-x-4 text-gray-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B48E4B] mt-1.5 shrink-0 shadow-sm shadow-[#B48E4B]/40" />
                  <span className="text-base font-bold italic">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white/5">
            <Image src="/wash_basin/basin_3.webp" alt="Wash Basin closeup" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </section>

      <ServiceFeatures />
      <EnquiryForm />
    </main>
  );
}
