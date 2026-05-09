export default function EventChronicles() {
  const images = [
    "/chronicle_1_1778119918431.png",
    "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=1000&auto=format&fit=crop"
  ];

  return (
    <section className="bg-[#0F172A] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-[#E8D08D] text-2xl md:text-3xl font-serif text-center mb-12 tracking-widest uppercase">
          Event Chronicles
        </h2>
        
        <div className="relative group">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 z-10 p-2 text-[#E8D08D] hover:text-white transition-colors hidden md:block">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {images.map((src, idx) => (
              <div key={idx} className="relative h-[300px] md:h-[450px] overflow-hidden border border-[#C5A059]/20 shadow-lg">
                <img src={src} alt={`Event Chronicle ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 z-10 p-2 text-[#E8D08D] hover:text-white transition-colors hidden md:block">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
