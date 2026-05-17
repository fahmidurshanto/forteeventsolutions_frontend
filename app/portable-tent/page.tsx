"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TENT_TYPES = [
  {
    id: "dome-tent",
    title: "Dome Tent",
    image: "/photos_from_pdf/WhatsApp Image 2026-05-16 at 10.10.58 AM.jpeg",
    desc: "Versatile curved-roof structure for events of all sizes. Available in widths: 10ft, 20ft, 33ft, 40ft, 52ft, and 60ft.",
    href: "/portable-tent/dome-tent",
  },
  {
    id: "a-shaped-tent",
    title: "A-Shaped Tent",
    image: "/staging_tent_1778119743118.webp",
    desc: "Classic peaked-roof tentage ideal for large gatherings and exhibitions. Available in widths: 20ft, 24ft, 28ft, 32ft, 37ft, 40ft, and 52ft.",
    href: "/portable-tent/a-shaped-tent",
  },
  {
    id: "slope-tent",
    title: "Slope Tent",
    image: "/marquee_tent_1778119583238.webp",
    desc: "Single-slope design perfect for walkways and narrow spaces. Available in widths: 8ft, 10ft, 12ft, 14ft, 16ft, 18.5ft, and 20ft.",
    href: "/portable-tent/slope-tent",
  },
  {
    id: "gazebo-tent",
    title: "Gazebo Tent",
    image: "/singaporean_wedding_banquet.webp",
    desc: "Elegant and portable gazebo tents for garden parties, roadshows, and outdoor functions.",
    href: "/portable-tent/gazebo-tent",
  },
  {
    id: "air-cooler-tent",
    title: "Air Cooler Tent",
    image: "/clear_span_tent_1778119637488.webp",
    desc: "Fully enclosed climate-controlled tentage with built-in air cooling for maximum guest comfort.",
    href: "/portable-tent/air-cooler-tent",
  },
  {
    id: "wayang-tent",
    title: "'Wayang' Tent and Stage",
    image: "/%27Wayang%27%20Tent%20and%20Stage/wayang_tent_1.webp",
    desc: "Traditional wayang-style tent with integrated stage setup for cultural performances and community events.",
    href: "/portable-tent/wayang-tent",
  },
];

export default function PortableTentPage() {

  return (
    <div className="min-h-screen bg-[#0F172A]">

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero_tent_1778119496158.webp"
          alt="Portable Tent Hero"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic uppercase leading-none"
          >
            Easy solution for <span className="text-[#B48E4B]">small parties</span> or functions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold opacity-90 tracking-wide"
          >
            Professional and premium portable pop up gazebos for all types of events
          </motion.p>
        </div>
      </section>

      {/* Grid Selection */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-black mb-16 text-[#E8D08D] uppercase tracking-widest italic">Click to see the various sizes available</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TENT_TYPES.map((tent, i) => (
            <Link key={tent.id} href={tent.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="relative rounded-[24px] overflow-hidden shadow-2xl group cursor-pointer border border-white/10 h-full"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={tent.image}
                    alt={tent.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Hover Overlay - Solid layer for maximum contrast */}
                <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/60 transition-colors duration-500 z-0" />

                {/* Gradient Overlay - Smooth transition for top/bottom text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <h3 className="text-lg font-black uppercase italic tracking-tight text-white group-hover:text-[#E8D08D] transition-colors duration-300 leading-tight">
                    {tent.title}
                  </h3>
                  
                  <div className="space-y-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-gray-300 text-sm font-medium italic leading-relaxed">
                      {tent.desc}
                    </p>
                    <span className="inline-block border border-[#B48E4B] text-[#B48E4B] text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full">
                      Enquire Now
                    </span>
                  </div>
                </div>

                {/* Gold top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#B48E4B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20">
          <button className="px-12 py-5 btn-golden">
            Call us now
          </button>
          <button className="px-12 py-5 flex items-center justify-center gap-3 btn-golden">
            <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            <span>WhatsApp Us</span>
          </button>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-[#131B2E] px-4 md:px-8 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-10 text-[#E8D08D] uppercase tracking-tighter italic">Portable Gazebo Tents</h2>
          <p className="text-gray-300 leading-relaxed text-base italic font-bold opacity-90">
            Portable Tents, also known as Pop-Up Gazebos, provide a fast and reliable shelter for any event.
            Perfect for parties, functions, markets, and exhibitions, these tents are designed for quick setup
            and portability without compromising on quality. Our tents feature reinforced frames and water-resistant
            covers to ensure durability and protection from the elements. Whether you need a simple shade for
            your backyard or a series of branded stalls for a commercial event, our portable tents are the
            ideal choice for their versatility and ease of use.
          </p>
        </div>
      </section>

      {/* Pairing Section */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
              Pair with our <br />
              <span className="text-[#B48E4B]">Tables, Chairs <br /> and Fans</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold leading-relaxed text-lg opacity-90 italic">
            Enhance your event experience by pairing our portable tents with our wide range of premium furniture
            and climate control solutions. From elegant ambassador chairs to powerful air coolers, we provide
            everything you need to create a comfortable and stylish environment for your guests.
          </p>
          <button className="px-12 py-5 btn-golden">
            Explore Furniture
          </button>
        </div>
        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white/5">
          <Image src="/image.webp" alt="Event setup" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-[#0A0C0E] text-white px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#B48E4B]/5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-[#E8D08D]">Get your custom <span className="text-[#B48E4B]">quotation</span> now</h2>
            <p className="text-gray-400 font-bold italic text-lg">Fill up the form below and we will get back to you within 24 hours.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.3em] text-[#B48E4B]">Name*</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="Full Name" required />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.3em] text-[#B48E4B]">Contact number*</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="Phone Number" required />
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.3em] text-[#B48E4B]">Email*</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="Email Address" required />
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.3em] text-[#B48E4B]">Message / Required Items*</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20 resize-none" placeholder="Describe your event requirements (date, location, quantity)..." required />
            </div>
            <div className="md:col-span-2 pt-6">
              <button className="w-full py-6 btn-golden">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
