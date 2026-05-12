"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "+6598253390"; // Update this with the real number
const EMAIL = "contact@forteeventsolutions.com";

export default function FloatingButtons() {
  const [hoveredBtn, setHoveredBtn] = useState<"whatsapp" | "email" | null>(null);

  return (
    <div className="fixed bottom-8 right-6 z-[9999] flex flex-col items-end gap-4">

      {/* WhatsApp Button */}
      <div className="relative flex items-center gap-3">
        {/* Tooltip */}
        <div
          className={`
            bg-[#1a1a2e] text-white text-xs font-bold px-4 py-2 rounded-full border border-white/10
            shadow-xl whitespace-nowrap transition-all duration-300
            ${hoveredBtn === "whatsapp" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}
          `}
        >
          Chat on WhatsApp
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredBtn("whatsapp")}
          onMouseLeave={() => setHoveredBtn(null)}
          aria-label="Chat on WhatsApp"
          className="
            relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl
            bg-[#25D366] hover:bg-[#20b858]
            transition-all duration-300 hover:scale-110 active:scale-95
            shadow-[#25D366]/30 hover:shadow-[#25D366]/50
          "
          style={{ boxShadow: "0 8px 32px rgba(37, 211, 102, 0.35)" }}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7 relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.533 5.843L.057 23.486a.5.5 0 0 0 .614.612l5.739-1.503A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.607-.5-5.112-1.373l-.366-.214-3.406.893.908-3.32-.234-.381A9.96 9.96 0 0 1 2 12C2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z" />
          </svg>
        </a>
      </div>

      {/* Email Button */}
      <div className="relative flex items-center gap-3">
        {/* Tooltip */}
        <div
          className={`
            bg-[#1a1a2e] text-white text-xs font-bold px-4 py-2 rounded-full border border-white/10
            shadow-xl whitespace-nowrap transition-all duration-300
            ${hoveredBtn === "email" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}
          `}
        >
          {EMAIL}
        </div>

        <a
          href={`mailto:${EMAIL}`}
          onMouseEnter={() => setHoveredBtn("email")}
          onMouseLeave={() => setHoveredBtn(null)}
          aria-label="Send us an email"
          className="
            relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl
            bg-[#B48E4B] hover:bg-[#c9a45a]
            transition-all duration-300 hover:scale-110 active:scale-95
          "
          style={{ boxShadow: "0 8px 32px rgba(180, 142, 75, 0.35)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
