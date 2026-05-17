"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const GALLERY_IMAGES = [
  "/%27Wayang%27%20Tent%20and%20Stage/wayang_tent_1.webp",
  "/%27Wayang%27%20Tent%20and%20Stage/wayang_tent_2.webp",
  "/%27Wayang%27%20Tent%20and%20Stage/wayang_tent_3.webp",
];

export default function WayangTentPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <RentalHero title="'Wayang' Tent and Stage" image="/%27Wayang%27%20Tent%20and%20Stage/wayang_tent_1.webp" />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm font-bold italic">
          <Link href="/portable-tent" className="text-gray-500 hover:text-[#B48E4B] transition-colors">Portable Tent</Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#B48E4B]">&apos;Wayang&apos; Tent and Stage</span>
        </div>
      </div>

      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            The Wayang Tent and Stage is a traditional tent structure with an integrated stage,
            purpose-built for Chinese opera (wayang), cultural performances, prayer ceremonies, and
            community celebrations. Our complete setup includes the tentage, stage platform, and
            all necessary support structures.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0F172A] px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">Gallery</h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -8 }} className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border border-white/10 group">
                <Image src={img} alt={`Wayang Tent ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 bg-[#131B2E] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">
              Why Choose Our <span className="text-[#B48E4B]">Wayang Tent</span>?
            </h2>
            <ul className="space-y-5">
              {["Complete tent and stage setup for cultural performances", "Traditional wayang-style structure for authentic presentation", "Suitable for Chinese opera, prayer events, and community celebrations", "Includes stage platform with all necessary support structures", "Professional installation by experienced crew", "Can be paired with lighting, sound systems, and seating"].map((f, i) => (
                <li key={i} className="flex items-start space-x-4 text-gray-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B48E4B] mt-1.5 shrink-0 shadow-sm shadow-[#B48E4B]/40" />
                  <span className="text-base font-bold italic">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white/5">
            <Image src="/%27Wayang%27%20Tent%20and%20Stage/wayang_tent_2.webp" alt="Wayang Tent" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </section>

      <ServiceFeatures />
      <EnquiryForm />
    </main>
  );
}
