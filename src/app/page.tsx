import Hero from '@/components/features/home/Hero';
import Metrics from '@/components/features/home/Metrics';
import CategoryGrid from '@/components/features/home/CategoryGrid';
import FactoryPreview from '@/components/features/home/FactoryPreview';
import TrustSection from '@/components/features/home/TrustSection';
import Testimonials from '@/components/features/home/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <CategoryGrid />
      <FactoryPreview />
      <Testimonials />
      <TrustSection />
    </>
  );
}
