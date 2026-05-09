import React from 'react';
import RentalHero from '@/components/rental/RentalHero';
import FilterBar from '@/components/rental/FilterBar';
import ProductDetailSection from '@/components/rental/ProductDetailSection';
import ServiceFeatures from '@/components/rental/ServiceFeatures';
import EnquiryForm from '@/components/rental/EnquiryForm';

export const metadata = {
  title: 'Table Rental Services | Forte Event Solutions',
  description: 'Premium table rental services for events, weddings, and professional gatherings.',
};

export default function TableRentalPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <RentalHero title="Table Rental" />

      {/* Filter Bar - Custom for Tables */}
      <div className="bg-[#0F172A] py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-4">
          {['ALL TABLES', 'ROUND', 'RECTANGLE', 'COCKTAIL'].map((filter) => (
            <button 
              key={filter}
              className="border border-[#B48E4B]/40 text-[#E8D08D] hover:bg-[#B48E4B] hover:text-[#0F172A] px-10 py-3 rounded-full font-black text-xs tracking-[0.2em] transition-all duration-300 uppercase shadow-lg shadow-[#B48E4B]/5 active:scale-95"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 bg-[#131B2E] border-y border-white/5 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-xl leading-relaxed italic font-medium opacity-90">
            "Tables are essential for any event, providing the foundation for dining, displays, and networking. Explore our wide selection of high-quality tables and custom skirting options."
          </p>
        </div>
      </section>

      {/* Product Sections */}
      <ProductDetailSection 
        title="Round Tables"
        description="Classic round tables available in various sizes (3ft to 5ft). Perfect for wedding banquets, gala dinners, and social gatherings."
        details={['VARIOUS SIZES', 'PREMIUM TABLECLOTH OPTIONS', 'STURDY FOLDABLE LEGS']}
        mainImage="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop"
        imageGrid={[
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1470753937643-efdd931202a4?q=80&w=400&auto=format&fit=crop"
        ]}
      />

      <ProductDetailSection 
        title="Rectangle Tables"
        description="Versatile rectangle tables for exhibition booths, registration counters, and buffet lines. Available in multiple lengths."
        details={['GS TABLES (2ft x 6ft)', 'CUSTOM SKIRTING AVAILABLE', 'HEAVY DUTY']}
        mainImage="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop"
        imageGrid={[
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=400&auto=format&fit=crop"
        ]}
        reverse={true}
      />

      <ProductDetailSection 
        title="Cocktail / High Tables"
        description="Elegant high tables for networking sessions and cocktail parties. Pair them with our bar stools for a complete look."
        details={['2ft ALUMINUM TOP', 'STYLISH SPANDEX COVERS', 'MODERN LOOK']}
        mainImage="https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800&auto=format&fit=crop"
        imageGrid={[
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1470753937643-efdd931202a4?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?q=80&w=400&auto=format&fit=crop"
        ]}
      />

      <ProductDetailSection 
        title="Picnic Tables"
        description="Sturdy wooden picnic tables with attached benches. Ideal for outdoor carnivals, rustic themes, and communal dining."
        details={['SOLID WOOD FINISH', 'INTEGRATED BENCHES', 'COMMUNAL SEATING']}
        mainImage="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=800&auto=format&fit=crop"
        imageGrid={[
          "https://images.unsplash.com/photo-1505373633560-fa90143a8018?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=400&auto=format&fit=crop"
        ]}
        reverse={true}
      />

      {/* Service Features */}
      <ServiceFeatures />

      {/* Enquiry Form */}
      <EnquiryForm />
    </main>
  );
}
