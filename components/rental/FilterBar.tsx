import React from 'react';

export default function FilterBar() {
  const filters = ['ALL CHAIRS', 'PLASTIC', 'TIFFANY'];
  
  return (
    <div className="bg-[#0F172A] py-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-4">
        {filters.map((filter) => (
          <button 
            key={filter}
            className="px-10 py-3 btn-golden"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
