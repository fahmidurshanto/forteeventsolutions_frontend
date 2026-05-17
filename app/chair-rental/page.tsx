"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const CHAIR_PRODUCTS = [
  {
    title: "Tiffany Chairs",
    image: "/tiffany-chair.jpg",
    desc: "Elegant gold Tiffany chairs with white cushions. Perfect for weddings and luxury events.",
  },
  {
    title: "PVC Chairs",
    image: "/pvc-chairs/pvc/pvc-chair-1.jpeg",
    desc: "Durable, lightweight and stackable white PVC chairs for outdoor and casual events.",
    href: "/chair-rental/pvc-chairs",
  },
  {
    title: "Road Closure Equipment",
    image: "/Road%20Closure/road_closure_1.webp",
    desc: "Professional-grade traffic barricades, crowd control barriers, and road closure safety gear.",
    href: "/chair-rental/road-closure",
  },
];

export default function ChairRentalPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <RentalHero title="Chair Rental" />

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            Looking for high-quality seating for your next event? We offer a wide range of premium
            chairs suitable for any occasion — from corporate functions to elegant weddings.
            Explore our collection below.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">
              Our Chair Collection
            </h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CHAIR_PRODUCTS.map((product, i) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10 cursor-pointer h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark overlay always present, stronger on hover */}
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
                        {product.href ? "View Details" : "Enquire Now"}
                      </span>
                    </div>
                  </div>

                  {/* Gold top accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              );

              return product.href ? (
                <Link href={product.href} key={i} className="block h-full">
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

      {/* Service Features */}
      <ServiceFeatures />

      {/* Enquiry Form */}
      <EnquiryForm />
    </main>
  );
}
