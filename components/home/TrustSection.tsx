"use client";

import { motion } from "framer-motion";

const USPs = [
 
  {
  title: "Creative Event Solutions",
  desc: "Transforming ideas into immersive and memorable event experiences.",
  icon: "🏆"
},
  {
    title: "Rapid Site Survey",
    desc: "Our team provides onsite consultations and quotations within 24 hours of your request.",
    icon: "⚡"
  },
  {
    title: "Premium Logistics",
    desc: "Own fleet of vehicles and well-maintained inventory ensures zero delays and top quality.",
    icon: "🚚"
  },
  {
    title: "Certified Safety",
    desc: "bizSAFE 3 certified operations ensuring every structure meets the highest safety standards.",
    icon: "🛡️"
  }
];



export default function TrustSection() {
  return (
    <section className="pt-32 bg-[#0F172A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Value Propositions */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#B48E4B] font-black uppercase tracking-[0.4em] text-xs italic block mb-4"
          >
            The Forte Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter"
          >
            Commitment to <span className="text-[#B48E4B]">Excellence</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#B48E4B] mx-auto mt-8 rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {USPs.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-[#B48E4B]/30 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">
                {usp.icon}
              </div>
              <h3 className="text-xl font-black text-white uppercase italic mb-4 tracking-tighter group-hover:text-[#B48E4B] transition-colors">
                {usp.title}
              </h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                {usp.desc}
              </p>
            </motion.div>
          ))}
        </div>

     

      </div>
    </section>
  );
}
