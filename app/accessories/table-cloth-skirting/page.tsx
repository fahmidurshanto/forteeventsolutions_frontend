"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const ARRANGEMENTS = [
  {
    title: "Classic White Table Cloth",
    image: "/Table%20Cloths/table_cloths_1.webp",
    desc: "Elegant and versatile white table cloths suitable for weddings, banquets, and corporate events.",
    href: "/accessories/table-cloth-skirting/classic-white-cloths",
  },
  {
    title: "Premium Table Coverings",
    image: "/Table%20Cloths/table_cloths_2.webp",
    desc: "High-quality, stain-resistant table coverings designed to enhance your dining and display areas.",
  },
  {
    title: "Standard Table Linens",
    image: "/Table%20Cloths/table_cloths_3.webp",
    desc: "Durable and pristine standard tablecloths designed for exhibitions, buffets, and general gatherings.",
  },
  {
    title: "Banquet Skirting Setup",
    image: "/Tables%20Arrangements/tables_arrangements_1.webp",
    desc: "Professional table skirting setups, perfect for buffet lines, registration desks, and VIP tables.",
  },
  {
    title: "Complete Table Arrangement",
    image: "/Tables%20Arrangements/tables_arrangements_2.webp",
    desc: "Comprehensive table arrangements featuring beautiful skirts, overlays, and matching chair accents.",
  },
  {
    title: "Custom Event Skirting",
    image: "/Tables%20Arrangements/tables_arrangements_3.webp",
    desc: "Tailored skirting options in various colors and styles to perfectly match your event's theme.",
  },
];

export default function TableClothSkirtingPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <RentalHero title="Table Cloth & Skirting" image="/Table%20Cloths/table_cloths_1.webp" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm font-bold italic">
          <Link href="/accessories" className="text-gray-500 hover:text-[#B48E4B] transition-colors">
            Accessories
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#B48E4B]">Table Cloth & Skirting</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            Elevate your event setup with our premium table cloth and skirting options. 
            Whether you&apos;re organizing a formal banquet, a corporate gathering, or an elegant wedding, 
            our tailored arrangements provide the perfect finishing touch.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">
              Our Arrangements
            </h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARRANGEMENTS.map((item, i) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10 h-full flex flex-col cursor-pointer animate-fade-in"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black uppercase italic tracking-tight text-white group-hover:text-[#E8D08D] transition-colors duration-300 leading-none">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium italic mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              );

              return item.href ? (
                <Link href={item.href} key={i} className="block h-full">
                  {CardContent}
                </Link>
              ) : (
                <div key={i} className="h-full">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceFeatures />
      <EnquiryForm />
    </main>
  );
}
