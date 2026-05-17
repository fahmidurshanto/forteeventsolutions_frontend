"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RentalHero from "@/components/rental/RentalHero";
import ServiceFeatures from "@/components/rental/ServiceFeatures";
import EnquiryForm from "@/components/rental/EnquiryForm";

const BARRICADES = [
  {
    title: "Water Barrier",
    image: "/barricades/barricades.jpg",
    desc: "Heavy-duty plastic water-filled barriers for crowd control, traffic management, and site safety.",
    href: "/accessories/barricades/water-barrier",
  },
  {
    title: "Metal Barricade",
    image: "/metal-barricades/Gemini_Generated_Image_2z60dd2z60dd2z60.png",
    desc: "Sturdy galvanized steel barriers with interlocking hooks for secure perimeter fencing and heavy crowd pressure.",
    href: "/accessories/barricades/metal-barricade",
  },
  {
    title: "Q-Pole (Queue Pole)",
    image: "/q-pole/q-pole-1.jpg",
    desc: "Professional stainless steel retractable belt stanchions for orderly queuing and VIP sections.",
    href: "/accessories/barricades/q-pole",
  },
];

export default function BarricadesPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <RentalHero title="Barricades & Crowd Control" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm font-bold italic">
          <Link href="/accessories" className="text-gray-500 hover:text-[#B48E4B] transition-colors">
            Accessories
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#B48E4B]">Barricades</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-[#131B2E] border-b border-white/5 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed italic font-medium opacity-90">
            Ensure the safety and organization of your event with our professional crowd control solutions. 
            Our range includes heavy-duty water barriers and elegant Q-poles for all venue types.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-4 md:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#E8D08D]">
              Barricade Solutions
            </h2>
            <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto rounded-full shadow-lg shadow-[#B48E4B]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BARRICADES.map((item, i) => (
              <Link key={i} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10 cursor-pointer h-full"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatures />
      <EnquiryForm />
    </main>
  );
}
