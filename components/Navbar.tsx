import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 lg:px-8 h-24 bg-white border-b border-gray-200">
      {/* Logo */}
      <div className="flex-shrink-0 h-full">
        <Link href="/" className="block h-full py-1">
          <Image 
            src="/forteeventsolutions_logo.jpeg" 
            alt="Forte Event Solutions Logo" 
            width={300} 
            height={100} 
            className="object-contain h-full w-auto"
            priority
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-7 text-[15px] h-full">
        <Link href="/" className="font-bold text-black tracking-tight">Home</Link>
        <div className="relative group h-full flex items-center">
          <Link href="/chair-table-rental" className="font-semibold text-gray-400 group-hover:text-black transition-colors tracking-tight">
            Chair & Table Rental
          </Link>
          {/* Submenu */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-t border-gray-100 py-8 px-20 flex justify-between opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0 z-50">
            <Link href="/chair-rental" className="text-lg font-bold text-black hover:opacity-70 transition-opacity">
              Chair Rental
            </Link>
            <Link href="/table-rental" className="text-lg font-bold text-black hover:opacity-70 transition-opacity">
              Table Rental
            </Link>
          </div>
        </div>
        <div className="relative group h-full flex items-center">
          <Link href="/portable-tent" className="font-semibold text-gray-400 group-hover:text-black transition-colors tracking-tight">
            Portable Tent
          </Link>
          {/* Submenu */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-[#fffef0] shadow-[0_15px_40px_rgba(0,0,0,0.12)] border-t border-gray-100 py-6 px-8 grid grid-cols-2 gap-x-8 gap-y-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0 z-50">
            <Link href="/portable-tent" className="flex flex-col items-center group/item text-center">
              <div className="relative w-full aspect-[4/3] mb-3 overflow-hidden rounded-sm bg-white border border-yellow-100 shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?q=80&w=400&auto=format&fit=crop" 
                  alt="3m x 3m Tent" 
                  fill 
                  className="object-cover group-hover/item:scale-110 transition-transform duration-500" 
                />
              </div>
              <span className="text-[10px] font-bold text-black uppercase tracking-tight">3m x 3m tent</span>
              <span className="text-[8px] text-gray-600 font-semibold leading-tight mt-1 px-1">Fits 1 x 4ft round table with 5-6pax</span>
            </Link>

            <Link href="/portable-tent" className="flex flex-col items-center group/item text-center">
              <div className="relative w-full aspect-[4/3] mb-3 overflow-hidden rounded-sm bg-white border border-yellow-100 shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1510133513360-1e569206764a?q=80&w=400&auto=format&fit=crop" 
                  alt="3m x 4.5m Tent" 
                  fill 
                  className="object-cover group-hover/item:scale-110 transition-transform duration-500" 
                />
              </div>
              <span className="text-[10px] font-bold text-black uppercase tracking-tight">3m x 4.5m tent</span>
              <span className="text-[8px] text-gray-600 font-semibold leading-tight mt-1 px-1">Fits 2 x 2ft x 6ft rectangle table with 6-8pax</span>
            </Link>

            <Link href="/portable-tent" className="flex flex-col items-center group/item text-center col-span-2 max-w-[180px] mx-auto w-full">
              <div className="relative w-full aspect-[4/3] mb-3 overflow-hidden rounded-sm bg-white border border-yellow-100 shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04cb21c7?q=80&w=400&auto=format&fit=crop" 
                  alt="3m x 6m Tent" 
                  fill 
                  className="object-cover group-hover/item:scale-110 transition-transform duration-500" 
                />
              </div>
              <span className="text-[10px] font-bold text-black uppercase tracking-tight">3m x 6m tent</span>
              <span className="text-[8px] text-gray-600 font-semibold leading-tight mt-1 px-1">Fits 2 x 4ft round table with 8-10pax</span>
            </Link>
          </div>
        </div>
        <Link href="/tentage-rental" className="font-bold text-black tracking-tight">Tentage Rental</Link>
        <Link href="/equipment-rental" className="font-semibold text-gray-400 hover:text-black transition-colors tracking-tight">Equipment Rental</Link>
        <Link href="/system-exhibition-panel" className="font-semibold text-gray-400 hover:text-black transition-colors tracking-tight">System/Exhibition Panel</Link>
        <Link href="/contact" className="font-semibold text-gray-400 hover:text-black transition-colors tracking-tight">Contact Us</Link>
      </div>

      {/* Search Icon */}
      <div className="flex items-center ml-4">
        <button className="p-2 text-gray-500 hover:text-black transition-colors focus:outline-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
