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
    <main className="min-h-screen bg-[#0F172A]">
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
          "/chair_1.jpg",
          "/chair_2.jpg",
          "/chair_3.jpg",
          "/chair_4.jpg",
          "/chair_5.jpg",
          "/chair_6.png",
          "/chair_1.jpg",
          "/chair_2.jpg"
        ]}
        videoSrc="/wedding-hall.mp4"
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
          "/table_1.jpg",
          "/table_2.jpg",
          "/table_1.jpg",
          "/table_4.jpg",
          "/table_1.jpg",
          "/table_2.jpg",
          "/table_1.jpg",
          "/table_4.jpg"
        ]}
        videoSrc="/wedding-reception-in-rural.mp4"
        reverse={true}
      />
    </main>
  );
}
