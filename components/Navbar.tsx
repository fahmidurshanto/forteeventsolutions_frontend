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
      <div className="hidden lg:flex items-center space-x-7 text-[15px]">
        <Link href="/" className="font-bold text-black tracking-tight">Home</Link>
        <Link href="/chair-table-rental" className="font-semibold text-gray-400 hover:text-black transition-colors tracking-tight">Chair & Table Rental</Link>
        <Link href="/portable-tent" className="font-semibold text-gray-400 hover:text-black transition-colors tracking-tight">Portable Tent</Link>
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
