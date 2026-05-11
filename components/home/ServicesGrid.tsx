const services = [
  {
    title: "MARQUEE VILLAGES",
    description: "Custom-designed temporary venues for multi-day festivals and major corporate retreats.",
    image: "/marquee_tent_1778119583238.webp"
  },
  {
    title: "CLEAR-SPAN PAVILIONS",
    description: "Weather-proof, versatile spaces for thousands, without internal supports.",
    image: "/clear_span_tent_1778119637488.webp"
  },
  {
    title: "STAGING & RIGGING",
    description: "Total production support for large concerts, galas, and keynotes.",
    image: "/staging_tent_1778119743118.webp"
  },
  {
    title: "MULTI-ZONE PLANNING",
    description: "Seamless flow and distinct atmospheres, curated within a single structure.",
    image: "/singaporean_wedding_banquet.webp"
  },
  {
    title: "LUXURY WEDDINGS",
    description: "Breathtaking backdrops and elegant structures tailored for your special day.",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "CUSTOM EXHIBITIONS",
    description: "Expansive layouts designed to showcase brands and host large-scale trade shows.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function ServicesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#0F172A] border-t border-b border-[#C5A059]/30">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col border border-[#C5A059]/20 group cursor-pointer hover:bg-[#15203A] transition-colors">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 p-8 text-center border-t border-[#C5A059]/40 flex flex-col justify-center items-center">
            <h3 className="text-[#E8D08D] text-lg md:text-xl font-serif tracking-widest mb-3 uppercase">{service.title}</h3>
            <p className="text-gray-300 text-sm md:text-base font-light px-4">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
