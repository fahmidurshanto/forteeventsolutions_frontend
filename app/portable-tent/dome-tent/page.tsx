"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const AVAILABLE_WIDTHS = ["10ft", "20ft", "33ft", "40ft", "52ft", "60ft"];

const GALLERY_IMAGES = [
  "/photos_from_pdf/WhatsApp Image 2026-05-16 at 10.10.58 AM.jpeg",
  "/photos_from_pdf/WhatsApp Image 2026-05-16 at 10.11.23 AM.jpeg",
  "/DomeTent/domTent.png",
  "/DomeTent/domTent1.png",
  "/DomeTent/domTent2.png",
  "/DomeTent/domTent3.png",
  "/DomeTent/dome-tent-4.jpg",
  "/DomeTent/domTent5.png",
  "/DomeTent/domTent6.png",
  "/DomeTent/domTent7.png",
  "/DomeTent/domTent8.png",
  "/DomeTent/domTent9.png",
  "/DomeTent/domTent10.png",
  "/DomeTent/domTent_contert1.png",
  "/DomeTent/domeTent_concert2.jpg",
  "/DomeTent/domeTent_concert3.jpg",
];

export default function DomeTentPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <RentalHero title="Dome Tent" image="/DomeTent/domTent.png" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm font-bold italic">
          <Link href="/portable-tent" className="text-gray-500 hover:text-[#B48E4B] transition-colors">
            Portable Tent
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#B48E4B]">Dome Tent</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
              The Dome Tent features a curved-roof structure that provides excellent headroom and
              weather resistance. Its versatile design makes it suitable for a wide range of events —
              from intimate celebrations to large-scale corporate functions.
            </p>
          </div>

          {/* Professional Advice Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0F172A] border-2 border-dashed border-[#B48E4B]/30 rounded-[2rem] p-8 md:p-12 text-center space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-black text-[#E8D08D] uppercase italic tracking-tighter">
              Customized Technical Specifications
            </h3>
            <div className="space-y-4">
              <p className="text-white text-xl md:text-2xl font-black uppercase italic tracking-tight">
                ** Wide range of <span className="text-[#B48E4B] underline">LENGTH</span> and <span className="text-[#B48E4B] underline">HEIGHT</span> FOR TENT.
              </p>
              <p className="text-gray-400 text-lg font-bold italic leading-relaxed max-w-2xl mx-auto">
                Please advise the sizes and measurement you need, 
                and we will provide you with our professional advice to ensure the perfect fit for your venue.
              </p>
            </div>
          </motion.div>
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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
                <Image
                  src={img}
                  alt={`Dome Tent gallery ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
              Why Choose Our <span className="text-[#B48E4B]">Dome Tent</span>?
            </h2>
            <ul className="space-y-5">
              {[
                "Modern curved-roof design for superior aesthetics and headroom",
                "Wide range of widths from 10ft to 60ft to suit any event size",
                "Ideal for National Day parties, community festivals, and corporate events",
                "Highly resistant to wind and rain with its aerodynamic shape",
                "Versatile setup options including air-conditioning and luxury flooring",
                "Professional on-site technical support and rapid installation",
              ].map((feature, i) => (
                <li key={i} className="flex items-start space-x-4 text-gray-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B48E4B] mt-1.5 shrink-0 shadow-sm shadow-[#B48E4B]/40" />
                  <span className="text-base font-bold italic">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white/5">
            <Image
              src="/photos_from_pdf/WhatsApp Image 2026-05-16 at 10.11.23 AM.jpeg"
              alt="Dome Tent setup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </section>

      <ServiceFeatures />
      <EnquiryForm />
    </main>
  );
}
