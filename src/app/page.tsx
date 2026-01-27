import Hero from '@/components/features/home/Hero';
import Metrics from '@/components/features/home/Metrics';
import CategoryGrid from '@/components/features/home/CategoryGrid';
import FactoryPreview from '@/components/features/home/FactoryPreview';
import TrustSection from '@/components/features/home/TrustSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Metrics />
      <CategoryGrid />
      <FactoryPreview />
      <TrustSection />
    </main>
  );
}
