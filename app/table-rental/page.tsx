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
              className="px-10 py-3 btn-golden"
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
        mainImage="/table_1.webp"
        imageGrid={[
          "/table_2.webp",
          "/table_1.webp",
          "/table_4.webp",
          "/table_2.webp"
        ]}
      />

      <ProductDetailSection 
        title="Rectangle Tables"
        description="Versatile rectangle tables for exhibition booths, registration counters, and buffet lines. Available in multiple lengths."
        details={['GS TABLES (2ft x 6ft)', 'CUSTOM SKIRTING AVAILABLE', 'HEAVY DUTY']}
        mainImage="/table_2.webp"
        imageGrid={[
          "/table_1.webp",
          "/table_4.webp",
          "/table_2.webp",
          "/table_1.webp"
        ]}
        reverse={true}
      />

      <ProductDetailSection 
        title="Cocktail / High Tables"
        description="Elegant high tables for networking sessions and cocktail parties. Pair them with our bar stools for a complete look."
        details={['2ft ALUMINUM TOP', 'STYLISH SPANDEX COVERS', 'MODERN LOOK']}
        mainImage="/table_4.webp"
        imageGrid={[
          "/table_2.webp",
          "/table_1.webp",
          "/table_4.webp",
          "/table_1.webp"
        ]}
      />

      <ProductDetailSection 
        title="Picnic Tables"
        description="Sturdy wooden picnic tables with attached benches. Ideal for outdoor carnivals, rustic themes, and communal dining."
        details={['SOLID WOOD FINISH', 'INTEGRATED BENCHES', 'COMMUNAL SEATING']}
        mainImage="/table_1.webp"
        imageGrid={[
          "/table_4.webp",
          "/table_2.webp",
          "/table_1.webp",
          "/table_4.webp"
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
