'use client';

import { useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { translations } from '@/lib/translations';
import Background3D from '@/components/Background3D';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const t = translations[lang];

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen relative">
      {/* 3D Background - Fixed for entire page */}
      <Background3D />
      
      {/* Main Content - All sections transparent to show 3D background */}
      <div className="relative z-0">
        <Navigation 
          lang={lang}
          setLang={setLang}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          t={t}
        />
        
        <HeroSection t={t} heroY={heroY} heroOpacity={heroOpacity} />
        
        <FeaturesSection t={t} />
        
        <div className="bg-gradient-to-br from-orange-50/70 to-amber-50/70 backdrop-blur-sm">
          <StatsSection t={t} />
        </div>
        
        <HowItWorksSection t={t} />
        
        <BenefitsSection t={t} />
        
        <TestimonialsSection t={t} />
        
        <ContactSection t={t} lang={lang} />
        
        <div className="bg-gradient-to-br from-orange-100/70 to-amber-100/70 backdrop-blur-md">
          <CTASection t={t} />
        </div>
        
        <div className="bg-gray-900/95 backdrop-blur-lg">
          <Footer t={t} />
        </div>
      </div>
    </div>
  );
}
