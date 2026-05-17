"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const GALLERY_IMAGES = [
  {
    title: "Premium Solar Ellipse Light",
    image: "/Solar%20Ellipse/solar_ellipse_1.webp",
    desc: "Modern, high-efficiency solar-powered ellipsoidal light providing eco-friendly illumination and a sophisticated structural design for outdoor events.",
  },
];

export default function SolarEllipsePage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <RentalHero title="Solar Ellipse" image="/Solar%20Ellipse/solar_ellipse_1.webp" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm font-bold italic">
          <Link href="/accessories" className="text-gray-500 hover:text-[#B48E4B] transition-colors">
            Accessories
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/accessories/lighting-solutions" className="text-gray-500 hover:text-[#B48E4B] transition-colors">
            Lighting Solutions
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#B48E4B]">Solar Ellipse</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            Combine modern elegance with sustainable energy using our Solar Ellipse lighting fixtures. 
            Designed for premium outdoor event setups, pathways, and VIP entries, these solar-powered lights 
            require no external power grid or wiring, ensuring rapid deployment and zero operating costs.
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">
              Eco-Friendly <span className="text-[#B48E4B]">Sleek Illumination</span>
            </h2>
            <ul className="space-y-5">
              {[
                "Highly efficient integrated solar panels with fast daytime charging",
                "Long-lasting internal lithium battery bank for continuous night-time power",
                "Robust, weatherproof design suited for all-weather outdoor environments",
                "Advanced dusk-to-dawn sensors for automatic operational efficiency",
                "Zero cabling or electrical installation required, ensuring high event safety",
                "Contemporary ellipsoidal shape adding a high-end architectural look to venues",
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
              src="/Solar%20Ellipse/solar_ellipse_1.webp"
              alt="Solar Ellipse setup"
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
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
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
