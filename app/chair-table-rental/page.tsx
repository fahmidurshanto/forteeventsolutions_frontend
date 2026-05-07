import React from 'react';
import RentalHero from '@/components/rental/RentalHero';
import CTASection from '@/components/rental/CTASection';
import RentalProductSection from '@/components/rental/RentalProductSection';

export const metadata = {
  title: 'Chair & Table Rental | Forte Event Solutions',
  description: 'Premium chair and table rental services for events, weddings, and gatherings.',
};

export default function ChairTableRentalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <RentalHero title="Chairs and Table Rental" />
      
      <CTASection />

      <RentalProductSection 
        title="Chairs Rental"
        description="We have a wide selection of chairs available in any quantity. Whether for a formal event such as a wedding, a small gathering, a one day event. We even handle purchases in small or large quantities. If you do not see what you need in the list, or need any help with a recommendation based on your event, please email or contact us."
        items={[
          "PVC Chairs (White/Red)",
          "Cushion Chairs (Red)",
          "Gold Tiffany chairs with white cushion",
          "Bar stools ( to pair with cocktail tables)",
          "Foldable chairs (Black)",
          "Picnic Benches"
        ]}
        buttonText="See the full Range of Chairs"
        accessoriesTitle="Accessories"
        accessories={[
          "Seat cover (for PVC and Cushion chairs)",
          "Ribbon (for PVC and Cushion Chairs)"
        ]}
        images={[
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517456793572-1d8efd6ad13e?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741621693-8859ad06ca6b?q=80&w=800&auto=format&fit=crop",
        ]}
        videoEmbedCode="chair-overview"
      />

      <RentalProductSection 
        title="Tables Rental"
        description="Tables are essential for any event. Whether it is to display items for a store, display presents at a party or even for formal ceremonies such as weddings. They can be tailored to fit nicely into any event with our added accessories. We have a large range of sizes available, if you need a custom size or particular colour of cloth, we can fabricate and cater specially for your event. Email or call us to find out more."
        items={[
          "Square tables (3ft x 3ft)",
          "Rectangle tables (2ft x 4ft)",
          "GS table (2ft x 6ft)",
          "Round tables (3ft-5ft)",
          "Coffee table (2ft, 60cm x 70cm low aluminum table)",
          "Cocktail table (2ft, 60cm X 110cm aluminum high table)",
          "Ceremonial tables (2ft x 4ft with skirting, tablecloth)",
          "Picnic Table which can be paired with our Picnic Benches (2m x 0.6m wood finish)"
        ]}
        buttonText="View our full range of tables"
        accessoriesTitle="Accessories for Tables"
        accessories={[
          "Formal Tablecloth (in many designs and colours)",
          "Table Skirting (red/blue/black/custom)",
          "Centrepiece"
        ]}
        images={[
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1470753937643-efdd931202a4?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505373633560-fa90143a8018?q=80&w=800&auto=format&fit=crop",
        ]}
        videoEmbedCode="table-overview"
        reverse={true}
      />
    </main>
  );
}
