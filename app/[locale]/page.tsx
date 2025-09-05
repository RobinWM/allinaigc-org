import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ProductsSection } from '@/components/sections/products-section';
import { AboutSection } from '@/components/sections/about-section';

import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
    </div>
  );
}