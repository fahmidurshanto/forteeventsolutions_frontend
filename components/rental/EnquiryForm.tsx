import React from 'react';

export default function EnquiryForm() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 uppercase tracking-wider">
          Enquire About Chair Rental
        </h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Name *</label>
            <input 
              type="text" 
              id="name" 
              required
              className="bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email *</label>
            <input 
              type="email" 
              id="email" 
              required
              className="bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone *</label>
            <input 
              type="tel" 
              id="phone" 
              required
              className="bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Message *</label>
            <textarea 
              id="message" 
              rows={5}
              required
              className="bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-blue-500 transition-colors"
            ></textarea>
          </div>
          
          <div className="md:col-span-2 text-center mt-4">
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-sm font-bold tracking-widest transition-all shadow-md transform hover:scale-105"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
