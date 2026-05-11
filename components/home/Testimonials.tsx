const testimonials = [
  {
    quote: "\"Forte transformed our entire festival site with their structures. Peerless execution.\"",
    author: "Couple Msuite",
    image: "/sg_human_1.jpg"
  },
  {
    quote: "\"Their multi-zone tent solutions for our global convention was a masterpiece.\"",
    author: "Corporate Event",
    image: "/sg_human_2.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#0F172A] py-16 md:py-24 border-t border-[#C5A059]/30 relative overflow-hidden">
      {/* Decorative background swashes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C5A059]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#C5A059]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        <h2 className="text-[#E8D08D] text-2xl md:text-3xl font-serif mb-6 tracking-widest uppercase">
          Heartfelt Praise
        </h2>
        
        {/* Stars */}
        <div className="flex justify-center space-x-2 mb-16">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-6 h-6 text-[#C5A059] fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <img src={t.image} alt={t.author} className="w-24 h-24 rounded-full border-2 border-[#C5A059] object-cover flex-shrink-0" />
              <div>
                <p className="text-gray-300 text-lg md:text-xl font-light italic mb-4 leading-relaxed">
                  {t.quote}
                </p>
                <p className="text-[#E8D08D] text-sm uppercase tracking-wider font-semibold">
                  {t.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
