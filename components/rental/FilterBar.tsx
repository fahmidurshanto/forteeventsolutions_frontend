import React from 'react';

export default function FilterBar() {
  const filters = ['ALL CHAIRS', 'PLASTIC', 'TIFFANY'];
  
  return (
    <div className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-center gap-4 px-4">
        {filters.map((filter) => (
          <button 
            key={filter}
            className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-2 rounded-sm font-bold text-sm tracking-widest transition-colors uppercase shadow-sm"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
