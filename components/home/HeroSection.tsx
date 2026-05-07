export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image (Using standard img for external placeholder to avoid Next.js domain config errors) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_tent_1778119496158.png"
          alt="Large Event Tent Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0F172A]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#E8D08D] mb-6 leading-tight drop-shadow-lg tracking-wide">
          ENGINEERING SPECTACULAR <br className="hidden md:block" /> MOMENTS ON A GRAND SCALE.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-10 font-light tracking-widest uppercase drop-shadow-md">
          Forte Solutions <span className="italic normal-case text-[#C5A059]">for</span> Mega-Events & Beyond.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-[#B48E4B] via-[#E8D08D] to-[#B48E4B] text-[#0F172A] font-bold text-sm md:text-base uppercase tracking-widest rounded-sm hover:brightness-110 transition-all shadow-lg border border-[#E8D08D]/50">
          Launch Full Marquee Portfolio
        </button>
      </div>
    </section>
  );
}
