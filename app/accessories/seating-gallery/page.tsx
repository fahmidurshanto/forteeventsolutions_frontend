"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const GALLERY_IMAGES = [
  {
    title: "Premium Tiered Gallery Seating",
    image: "/Seating%20Gallery/seating_gallery_1.webp",
    desc: "Elevated, multi-tiered spectator seating systems offering optimal sightlines for concerts, sporting matches, and ceremonies.",
  },
  {
    title: "Comfortable Audience Seating Setup",
    image: "/Seating%20Gallery/seating_gallery_2.webp",
    desc: "Durable, high-capacity modular gallery seating configured for ultimate guest comfort and smooth crowd flows.",
  },
];

export default function SeatingGalleryPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <RentalHero title="Seating Gallery" image="/Seating%20Gallery/seating_gallery_1.webp" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm font-bold italic">
          <Link href="/accessories" className="text-gray-500 hover:text-[#B48E4B] transition-colors">
            Accessories
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#B48E4B]">Seating Gallery</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            Ensure your guests have the perfect view with our professional Seating Gallery systems. 
            Designed for durability, quick installation, and excellent safety compliance, our modular tiered 
            seating solutions are ideal for ceremonies, sporting events, outdoor rallies, and live concerts.
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">
              Elevated <span className="text-[#B48E4B]">Spectator Seating</span>
            </h2>
            <ul className="space-y-5">
              {[
                "Highly stable, heavy-duty modular steel framework",
                "Tiered design for unobstructed, panoramic views of the main stage",
                "Non-slip walkways and steps equipped with robust safety handrails",
                "Configurable layouts to scale from small VIP groups to large public audiences",
                "Fast, efficient assembly by our professional deployment team",
                "Fully weather-resistant materials for indoor and outdoor venues",
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
              src="/Seating%20Gallery/seating_gallery_2.webp"
              alt="Seating Gallery setup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {GALLERY_IMAGES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10 group flex flex-col h-full bg-[#0F172A] cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-xl font-black uppercase italic tracking-tight text-white group-hover:text-[#E8D08D] transition-colors duration-300 leading-none">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs font-medium italic mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatures />
      <EnquiryForm />
    </main>
  );
}
