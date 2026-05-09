import HeroSection from '@/components/home/HeroSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import EventChronicles from '@/components/home/EventChronicles';
import TrustSection from '@/components/home/TrustSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A]">
      <HeroSection />
      <ServicesGrid />
      <EventChronicles />
      <TrustSection />
    </div>
  );
}
