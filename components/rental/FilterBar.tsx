import React from 'react';

export default function FilterBar() {
  const filters = ['ALL CHAIRS', 'PLASTIC', 'TIFFANY'];
  
  return (
    <div className="bg-[#0F172A] py-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-4">
        {filters.map((filter) => (
          <button 
            key={filter}
            className="border border-[#B48E4B]/40 text-[#E8D08D] hover:bg-[#B48E4B] hover:text-[#0F172A] px-10 py-3 rounded-full font-black text-xs tracking-[0.2em] transition-all duration-300 uppercase shadow-lg shadow-[#B48E4B]/5 active:scale-95"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
