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
        mainImage="/chair_6.png"
        imageGrid={[
          "/chair_1.jpg",
          "/image.jpg",
          "/chair_3.jpg",
          "/chair_4.jpg"
        ]}
      />

      <ProductDetailSection 
        title="Cushion Chairs"
        description="Premium red cushion chairs for conferences, seminars, and formal indoor events. Comfort meets professionalism."
        details={['RED FABRIC', 'STURDY METAL FRAME', 'CONFERENCE STYLE']}
        mainImage="/chair_5.jpg"
        imageGrid={[
          "/chair_4.jpg",
          "/chair_3.jpg",
          "/image.jpg",
          "/chair_1.jpg"
        ]}
        reverse={true}
      />

      <ProductDetailSection 
        title="Tiffany Chairs"
        description="Elegant gold Tiffany chairs with white cushions. The perfect choice for weddings and luxury celebrations."
        details={['GOLD FINISH', 'WHITE LEATHER CUSHION', 'WEDDING SPECIAL']}
        mainImage="/chair_3.jpg"
        imageGrid={[
          "/chair_1.jpg",
          "/chair_5.jpg",
          "/chair_4.jpg",
          "/image.jpg"
        ]}
      />

      {/* Service Features */}
      <ServiceFeatures />

      {/* Enquiry Form */}
      <EnquiryForm />
    </main>
  );
}
