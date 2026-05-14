"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      
      {/* Title Section */}
      <section className="py-24 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-[#E8D08D] leading-tight">Contact Us</h1>
        <div className="w-24 h-2 bg-[#B48E4B] mx-auto mt-8 rounded-full shadow-lg shadow-[#B48E4B]/20" />
      </section>

      {/* Main Content Grid */}
      <section className="pb-40 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column: Form */}
          <div className="space-y-12 bg-[#131B2E] p-10 md:p-16 rounded-[40px] border border-white/5 shadow-2xl">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-[#E8D08D] border-l-8 border-[#B48E4B] pl-8">
              Request a quote
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Name *</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">E-Mail *</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Contact Number *</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Date of event *</label>
                <input type="date" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Duration (in hours) and start time of event *</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" placeholder="e.g. 5 hours, starting 2pm" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Exact Location of Event *</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Company name if any</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20" />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B48E4B]">Details of items needed *</label>
                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20 resize-none" required />
              </div>

              <div className="md:col-span-2 pt-6">
                <button className="px-16 py-6 btn-golden">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="space-y-16 py-6 lg:sticky lg:top-32">
            <div className="space-y-10">
              <p className="text-gray-400 font-bold italic text-xl leading-relaxed opacity-80">Email us to get a non-obligatory quotation for your event.</p>
              <h3 className="text-2xl font-black text-[#E8D08D] italic uppercase tracking-widest leading-none">Contact us at</h3>
              
              <div className="space-y-10 font-bold italic text-gray-200">
                <div className="space-y-2 group">
                  <p className="text-xl">Samuel - <span className="text-[#B48E4B] group-hover:underline underline-offset-8">80232389</span></p>
                  <p className="text-sm text-gray-500 font-medium">Samuel@forteeventsolutions.com</p>
                </div>
                <div className="space-y-2 group">
                  <p className="text-xl">Jia Hao - <span className="text-[#B48E4B] group-hover:underline underline-offset-8">80447382</span></p>
                  <p className="text-sm text-gray-500 font-medium">Jiahao@forteeventsolutions.com</p>
                </div>
                <div className="space-y-2 group">
                  <p className="text-xl">Jonathan - <span className="text-[#B48E4B] group-hover:underline underline-offset-8">9123 4567</span></p>
                  <p className="text-sm text-gray-500 font-medium">Jonathan@forteeventsolutions.com</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="relative aspect-[16/10] bg-white/5 rounded-[40px] overflow-hidden border-8 border-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.847123456789!2d103.812345!3d1.281234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da196c81e35d67%3A0x6e7686521f7e3465!2s3791%20Jalan%20Bukit%20Merah%2C%20%2305-19%2C%20Singapore%20159471!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%)' }} 
                allowFullScreen={true} 
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase italic tracking-tighter text-[#E8D08D]">Our Office Address</h4>
              <p className="text-gray-300 font-bold italic text-lg leading-relaxed">3791 Jalan Bukit Merah, #05-19, Singapore 159471</p>
              <p className="text-sm text-gray-500 font-bold italic opacity-60 leading-relaxed max-w-md">
                Warehouse address is different from office location, please check with our service staff on the location.
              </p>
            </div>

            {/* Certification Logo */}
            <div className="pt-12 flex justify-start">
               <div className="relative p-6 rounded-3xl bg-white/5 border border-white/5 flex items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-red-500 italic leading-none">biz</span>
                    <div className="bg-white text-[#0F172A] px-3 py-1.5 text-xl font-black italic rounded-lg leading-none">SAFE</div>
                    <span className="text-3xl font-black text-white italic leading-none">3</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
