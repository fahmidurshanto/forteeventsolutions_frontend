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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <RentalHero title="Chair Rental" />

      {/* Filter Bar */}
      <FilterBar />

      {/* Introduction */}
      <section className="py-12 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed italic">
            "Looking for high-quality seating for your next event? We offer a wide range of premium chairs suitable for any occasion, from corporate functions to elegant weddings. Explore our collection below."
          </p>
        </div>
      </section>

      {/* Product Sections */}
      <ProductDetailSection 
        title="PVC Plastic Chairs"
        description="Ideal for outdoor events, carnivals, and casual gatherings. Durable, lightweight, and stackable."
        details={['WHITE/RED COLOURS', 'STACKABLE DESIGN', 'OUTDOOR FRIENDLY']}
        mainImage="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop"
        imageGrid={[
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517456793572-1d8efd6ad13e?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741621693-8859ad06ca6b?q=80&w=400&auto=format&fit=crop"
        ]}
      />

      <ProductDetailSection 
        title="Cushion Chairs"
        description="Premium red cushion chairs for conferences, seminars, and formal indoor events. Comfort meets professionalism."
        details={['RED FABRIC', 'STURDY METAL FRAME', 'CONFERENCE STYLE']}
        mainImage="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop"
        imageGrid={[
          "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517456793572-1d8efd6ad13e?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=400&auto=format&fit=crop"
        ]}
        reverse={true}
      />

      <ProductDetailSection 
        title="Tiffany Chairs"
        description="Elegant gold Tiffany chairs with white cushions. The perfect choice for weddings and luxury celebrations."
        details={['GOLD FINISH', 'WHITE LEATHER CUSHION', 'WEDDING SPECIAL']}
        mainImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
        imageGrid={[
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?q=80&w=400&auto=format&fit=crop"
        ]}
      />

      {/* Service Features */}
      <ServiceFeatures />

      {/* Enquiry Form */}
      <EnquiryForm />
    </main>
  );
}
