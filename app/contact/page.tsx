"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Title Section */}
      <section className="py-20 text-center px-4">
        <h1 className="text-5xl font-black uppercase italic tracking-tighter text-black">Contact Us</h1>
        <div className="w-20 h-1.5 bg-[#B48E4B] mx-auto mt-6 rounded-full" />
      </section>

      {/* Main Content Grid */}
      <section className="pb-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left Column: Form */}
          <div className="space-y-10">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-gray-800 border-l-8 border-[#B48E4B] pl-6">
              Request a quote
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2 space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Name *</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">E-Mail *</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Contact Number *</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Date of event *</label>
                <input type="date" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Duration (in hours) and start time of event *</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all" placeholder="e.g. 5 hours, starting 2pm" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Exact Location of Event *</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all" required />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Company name if any</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all" />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Details of items needed *</label>
                <textarea rows={6} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#B48E4B] transition-all resize-none" required />
              </div>

              <div className="md:col-span-2 pt-4">
                <button className="bg-[#5C94E1] text-white px-16 py-4 rounded-lg font-black uppercase tracking-[0.2em] hover:bg-[#4a7ec9] transition-all shadow-xl active:scale-[0.98]">
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-gray-600 font-bold italic">Email us to get a non-obligatory quotation for your event.</p>
              <h3 className="text-xl font-black text-[#5C94E1] italic">Contact us at</h3>
              
              <div className="space-y-8 font-bold italic text-gray-700">
                <div className="space-y-1">
                  <p>Samuel - <span className="text-[#5C94E1]">80232389</span></p>
                  <p className="text-sm text-gray-400">Samuel@tentagerentalsingapore.com</p>
                </div>
                <div className="space-y-1">
                  <p>Jia Hao - <span className="text-[#5C94E1]">80447382</span></p>
                  <p className="text-sm text-gray-400">Jiahao@tentagerentalsingapore.com</p>
                </div>
                <div className="space-y-1">
                  <p>Jonathan - <span className="text-[#5C94E1]">98253390</span></p>
                  <p className="text-sm text-gray-400">Jonathan@tentagerentalsingapore.com</p>
                </div>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div className="relative aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.847123456789!2d103.812345!3d1.281234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da196c81e35d67%3A0x6e7686521f7e3465!2s3791%20Jalan%20Bukit%20Merah%2C%20%2305-19%2C%20Singapore%20159471!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-black uppercase italic tracking-tighter text-gray-800">Our Office Address</h4>
              <p className="text-gray-600 font-bold italic">3791 Jalan Bukit Merah, #05-19, Singapore 159471</p>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">
                Warehouse address is different from office location, please check with our service staff on the location.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Logo */}
        <div className="mt-32 border-t border-gray-100 pt-12 flex justify-start">
           <div className="relative w-48 h-20 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <div className="flex items-center gap-2 h-full">
                <span className="text-4xl font-black text-red-600 italic">biz</span>
                <div className="bg-gray-800 text-white px-2 py-1 text-2xl font-black italic rounded">SAFE</div>
                <span className="text-4xl font-black text-gray-400">3</span>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
