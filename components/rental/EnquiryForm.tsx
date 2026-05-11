import React from 'react';

export default function EnquiryForm() {
  return (
    <section className="py-32 bg-[#0F172A] px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#E8D08D] mb-16 uppercase italic tracking-tighter">
          Enquire About Rental
        </h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-[10px] font-black text-[#B48E4B] uppercase tracking-[0.3em] ml-2">Name *</label>
            <input 
              type="text" 
              id="name" 
              required
              className="bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20"
              placeholder="Your Full Name"
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-[10px] font-black text-[#B48E4B] uppercase tracking-[0.3em] ml-2">Email *</label>
            <input 
              type="email" 
              id="email" 
              required
              className="bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20"
              placeholder="Your Email Address"
            />
          </div>
          
          <div className="flex flex-col gap-3 md:col-span-2">
            <label htmlFor="phone" className="text-[10px] font-black text-[#B48E4B] uppercase tracking-[0.3em] ml-2">Phone *</label>
            <input 
              type="tel" 
              id="phone" 
              required
              className="bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20"
              placeholder="Your Phone Number"
            />
          </div>
          
          <div className="flex flex-col gap-3 md:col-span-2">
            <label htmlFor="message" className="text-[10px] font-black text-[#B48E4B] uppercase tracking-[0.3em] ml-2">Your Message *</label>
            <textarea 
              id="message" 
              rows={5}
              required
              className="bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-[#B48E4B] transition-all text-white placeholder:text-white/20 resize-none"
              placeholder="Tell us about your event requirements..."
            ></textarea>
          </div>
          
          <div className="md:col-span-2 text-center mt-10">
            <button 
              type="submit"
              className="px-16 py-6 btn-golden"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
