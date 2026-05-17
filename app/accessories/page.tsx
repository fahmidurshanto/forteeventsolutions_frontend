"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const ACCESSORY_CATEGORIES = [
  {
    title: "Barricades",
    image: "/barricades/barricades.jpg",
    desc: "Heavy-duty water barriers and elegant Q-poles for crowd control and traffic management.",
    href: "/accessories/barricades",
  },
  {
    title: "Lighting Solutions",
    image: "/UV%20Lights/uv_lights_1.webp",
    desc: "Fairy lights, stage lighting, and professional UV blacklights to illuminate and transform your event venue.",
    href: "/accessories/lighting-solutions",
  },
  {
    title: "Cooling Systems",
    image: "/Accessories/accessories_3.webp",
    desc: "High-capacity air coolers and industrial fans to keep your guests comfortable.",
    href: "/accessories/cooling-systems",
  },
  {
    title: "Flooring & Carpet",
    image: "/Accessories/accessories_7.webp",
    desc: "Premium needle-punch carpets and wooden flooring for a polished event look.",
    href: "/accessories",
  },
  {
    title: "Table Cloth & Skirting",
    image: "/Table%20Cloths/table_cloths_1.webp",
    desc: "Premium table cloths and skirting arrangements to elevate your event setup.",
    href: "/accessories/table-cloth-skirting",
  },
  {
    title: "Seating Gallery",
    image: "/Seating%20Gallery/seating_gallery_1.webp",
    desc: "Premium tiered seating systems and gallery setups for audience comfort.",
    href: "/accessories/seating-gallery",
  },
  {
    title: "Mobile Toilets",
    image: "/mobile%20toilets/mobile_toilet_1.webp",
    desc: "Premium, sanitary portable toilet units for outdoor festivals, concerts, and event venues.",
    href: "/accessories/mobile-toilet",
  },
  {
    title: "Wash Basin",
    image: "/wash_basin/basin_1.webp",
    desc: "Premium, hygiene-focused portable wash basin stations with foot-pump water operation for events.",
    href: "/accessories/wash-basin",
  },
  {
    title: "Custom Racks",
    image: "/Custom%20Rack/custom_rack_1.webp",
    desc: "Heavy-duty custom garment racks, coat hangers, and luggage tiers for backstage, exhibitions, and VIP events.",
    href: "/accessories/custom-rack",
  },
  {
    title: "Flower Arrangements",
    image: "/Flower%20arrangement/flower_arrangement_2.webp",
    desc: "Exquisite fresh floral arrangements, podium centerpieces, and table decorations to elevate your event aesthetic.",
    href: "/accessories/flower-arrangement",
  },
];

const ACCESSORIES_SHOWCASE = [
  { name: "Double-Tier Garment Rack", src: "/Accessories/accessories_1.webp" },
  { name: "Heavy-Duty Prop Fan", src: "/Accessories/accessories_2.webp" },
  { name: "Industrial Evaporative Air Cooler", src: "/Accessories/accessories_3.webp" },
  { name: "Elegance Q-Pole Gold", src: "/Accessories/accessories_4.webp" },
  { name: "Standard Chrome Q-Pole", src: "/Accessories/accessories_5.webp" },
  { name: "Premium Red Velvet Rope", src: "/Accessories/accessories_6.webp" },
  { name: "Royal Needle-Punch Red Carpet", src: "/Accessories/accessories_7.webp" },
  { name: "Elegant Black Carpet Runner", src: "/Accessories/accessories_8.webp" },
  { name: "Safety Water Barricade", src: "/Accessories/accessories_9.webp" },
  { name: "Galvanized Metal Crowd Gate", src: "/Accessories/accessories_10.webp" },
  { name: "Fairy String Lights", src: "/Accessories/accessories_11.webp" },
  { name: "Professional Stage PAR Light", src: "/Accessories/accessories_12.webp" },
  { name: "UV Blacklight Bar", src: "/Accessories/accessories_13.webp" },
  { name: "Event Directional Signage Board", src: "/Accessories/accessories_14.webp" },
  { name: "Heavy-Duty Cable Protector (2-Channel)", src: "/Accessories/accessories_15.webp" },
  { name: "Standard 3-Pin Extension Reel", src: "/Accessories/accessories_16.webp" },
  { name: "Commercial Air-Con Unit", src: "/Accessories/accessories_17.webp" },
  { name: "Fitted Spandex Table Cover", src: "/Accessories/accessories_18.webp" },
  { name: "Elegant Satin Ribbon Bows", src: "/Accessories/accessories_19.webp" },
  { name: "Premium Pleated Table Skirting", src: "/Accessories/accessories_20.webp" },
];

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <RentalHero title="Event Accessories" />

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            Complete your event with our extensive range of premium accessories. 
            From safety barricades to atmospheric lighting and climate control, 
            we provide the essential details that make an event successful.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">
              Accessory Categories
            </h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ACCESSORY_CATEGORIES.map((cat, i) => (
              <Link key={i} href={cat.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10 cursor-pointer h-full"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black uppercase italic tracking-tight text-white group-hover:text-[#E8D08D] transition-colors duration-300 leading-none">
                      {cat.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium italic mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Showcase Gallery */}
      <section className="py-24 px-4 md:px-8 bg-[#131B2E] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">
              Accessories Showcase
            </h2>
            <p className="text-gray-400 text-sm font-bold italic tracking-wide">
              Explore our diverse, high-quality inventory of supporting hardware & setups
            </p>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {ACCESSORIES_SHOWCASE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[20px] overflow-hidden shadow-xl border border-white/5 bg-[#0F172A]/40 backdrop-blur-sm"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="block text-[10px] text-[#B48E4B] font-bold uppercase tracking-wider mb-1">
                    Item {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <h4 className="text-xs font-black uppercase italic tracking-wide text-gray-200 group-hover:text-[#E8D08D] transition-colors leading-tight">
                    {item.name}
                  </h4>
                </div>
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
