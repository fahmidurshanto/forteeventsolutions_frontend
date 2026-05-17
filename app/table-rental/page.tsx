"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";
import Link from "next/link";

const TABLE_PRODUCTS = [
  {
    title: "Cocktail Tables",
    image: "/table_4.webp",
    desc: "Elegant high tables for networking sessions and cocktail parties. Pair with our bar stools.",
  },
  {
    title: "Picnic Tables",
    image: "/table_1.webp",
    desc: "Solid wood picnic tables with integrated benches. Ideal for outdoor carnivals and rustic events.",
  },
];

export default function TableRentalPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <RentalHero title="Table Rental" />

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            Tables are essential for any event — providing the foundation for dining, displays, and
            networking. Explore our wide selection of high-quality tables and custom skirting options.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">
              Our Table Collection
            </h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
          </div>

          {/* 2-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TABLE_PRODUCTS.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black uppercase italic tracking-tight text-white group-hover:text-[#E8D08D] transition-colors duration-300 leading-none">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium italic mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="inline-block border border-[#B48E4B] text-[#B48E4B] text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full">
                      Enquire Now
                    </span>
                  </div>
                </div>

                {/* Gold top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paired Section */}
      <section className="py-24 bg-[#131B2E] border-y border-white/5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">
              Perfectly paired with our <span className="text-[#B48E4B]">Dome Tents</span>
            </h2>
            <p className="text-gray-400 text-lg font-bold italic opacity-90 leading-relaxed">
              Our Dome Tents provide the ultimate shelter for large outdoor events, festivals, and
              street parties. Pair our high-quality tables with these premium structures to create
              a professional and comfortable environment for thousands of guests.
            </p>
            <Link href="/portable-tent/dome-tent" className="inline-block px-10 py-4 btn-golden text-sm">
              Explore Dome Tents
            </Link>
          </div>
          <div className="lg:w-1/2 relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/5 group">
            <Image
              src="/photos_from_pdf/WhatsApp Image 2026-05-16 at 10.10.58 AM.jpeg"
              alt="Dome Tent with table setup"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </section>

      {/* Service Features */}
      <ServiceFeatures />

      {/* Enquiry Form */}
      <EnquiryForm />
    </main>
  );
}
