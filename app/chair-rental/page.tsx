import React from 'react';
import RentalHero from '@/components/rental/RentalHero';
import FilterBar from '@/components/rental/FilterBar';
import ProductDetailSection from '@/components/rental/ProductDetailSection';
import ServiceFeatures from '@/components/rental/ServiceFeatures';
import EnquiryForm from '@/components/rental/EnquiryForm';

export const metadata = {
  title: 'Chair Rental Services | Forte Event Solutions',
  description: 'Premium chair rental services for events, weddings, and professional gatherings.',
};

export default function ChairRentalPage() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <RentalHero title="Chair Rental" />

      {/* Filter Bar */}
      <FilterBar />

      {/* Introduction */}
      <section className="py-20 bg-[#131B2E] border-y border-white/5 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-xl leading-relaxed italic font-medium opacity-90">
            "Looking for high-quality seating for your next event? We offer a wide range of premium chairs suitable for any occasion, from corporate functions to elegant weddings. Explore our collection below."
          </p>
        </div>
      </section>

      {/* Product Sections */}
      <ProductDetailSection 
        title="PVC Plastic Chairs"
        description="Ideal for outdoor events, carnivals, and casual gatherings. Durable, lightweight, and stackable."
        details={['WHITE/RED COLOURS', 'STACKABLE DESIGN', 'OUTDOOR FRIENDLY']}
        mainImage="/chair_6.webp"
        imageGrid={[
          "/chair_1.webp",
          "/image.webp",
          "/chair_3.webp",
          "/chair_4.webp"
        ]}
      />

      <ProductDetailSection 
        title="Cushion Chairs"
        description="Premium red cushion chairs for conferences, seminars, and formal indoor events. Comfort meets professionalism."
        details={['RED FABRIC', 'STURDY METAL FRAME', 'CONFERENCE STYLE']}
        mainImage="/chair_5.webp"
        imageGrid={[
          "/chair_4.webp",
          "/chair_3.webp",
          "/image.webp",
          "/chair_1.webp"
        ]}
        reverse={true}
      />

      <ProductDetailSection 
        title="Tiffany Chairs"
        description="Elegant gold Tiffany chairs with white cushions. The perfect choice for weddings and luxury celebrations."
        details={['GOLD FINISH', 'WHITE LEATHER CUSHION', 'WEDDING SPECIAL']}
        mainImage="/chair_3.webp"
        imageGrid={[
          "/chair_1.webp",
          "/chair_5.webp",
          "/chair_4.webp",
          "/image.webp"
        ]}
      />

      {/* Service Features */}
      <ServiceFeatures />

      {/* Enquiry Form */}
      <EnquiryForm />
    </main>
  );
}
