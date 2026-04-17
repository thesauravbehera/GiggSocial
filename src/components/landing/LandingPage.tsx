import React from 'react';
import { LandingNavbar } from '../navigation/LandingNavbar';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { StatsSection } from './StatsSection';
import { BentoSection } from './BentoSection';
import { DemoSection } from './DemoSection';
import { PricingSection } from './PricingSection';
import { TestimonialsSection } from './TestimonialsSection';
import { CTASection } from './CTASection';
import { FooterSection } from './FooterSection';

interface LandingPageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export function LandingPage({ onGetStarted, onSignIn }: LandingPageProps) {
  const handleNavigate = (section: string) => {
    // Scroll to section handled in LandingNavbar
  };

  return (
    <div className="relative overflow-hidden bg-black">
      <LandingNavbar 
        onNavigate={handleNavigate}
        onSignIn={onSignIn}
        onGetStarted={onGetStarted}
      />
      
      <div id="home">
        <HeroSection onGetStarted={onGetStarted} />
      </div>
      
      <StatsSection />
      
      <div id="features">
        <FeaturesSection />
      </div>
      
      <div id="demo">
        <DemoSection />
      </div>
      
      <BentoSection />
      
      <div id="pricing">
        <PricingSection onGetStarted={onGetStarted} />
      </div>
      
      <TestimonialsSection />
      
      <div id="about">
        <CTASection onGetStarted={onGetStarted} />
      </div>
      
      <FooterSection />
    </div>
  );
}