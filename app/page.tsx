'use client';

import { useState } from 'react';
import { ThemeProvider, FloatingThemeToggle } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LogoTicker } from '@/components/LogoTicker';
import { FeaturesSection } from '@/components/FeaturesSection';
import { WorkspaceGrid } from '@/components/WorkspaceGrid';
import { CommandsSection } from '@/components/CommandsSection';
import { ShowcaseSection } from '@/components/ShowcaseSection';
import { BentoSection } from '@/components/BentoSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FaqSection } from '@/components/FaqSection';
import { CtaBanner } from '@/components/CtaBanner';
import { Footer } from '@/components/Footer';

import { DownloadModal } from '@/components/DownloadModal';
import { SignInModal } from '@/components/SignInModal';

export default function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const handleSelectPlan = (planName: string) => {
    setDownloadModalOpen(true);
  };

  return (
    // <ThemeProvider>
      <main className="min-h-screen bg-[#F8FAF9] dark:bg-[#0B0B09] text-slate-900 dark:text-zinc-100 selection:bg-[#17CF97]/30 selection:text-[#047857] dark:selection:text-[#17CF97] transition-colors duration-300">
        {/* Sticky Header */}
        <Navbar
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
          onOpenSignInModal={() => setSignInModalOpen(true)}
        />

        {/* Hero Section */}
        <Hero onOpenDownloadModal={() => setDownloadModalOpen(true)} />

        {/* Logo Ticker */}
        <LogoTicker />

        {/* Consolidated Features Section */}
        <FeaturesSection />

        {/* Complete AI Coding Workspace Grid */}
        <WorkspaceGrid />

        {/* Built-in Agent Commands */}
        <CommandsSection />

        {/* Community Gallery / Showcase */}
        {/* <ShowcaseSection /> */}

        {/* Navigate, Plan, Execute Bento Grid */}
        <BentoSection />

        {/* Models & Tools Integrations */}
        <IntegrationsSection />

        {/* Testimonials & Reviews */}
        <TestimonialsSection />

        {/* Pricing Section */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Download CTA Banner */}
        <CtaBanner onOpenDownloadModal={() => setDownloadModalOpen(true)} />

        {/* Footer & Newsletter */}
        <Footer />

        {/* Modals */}
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
        />

        <SignInModal
          isOpen={signInModalOpen}
          onClose={() => setSignInModalOpen(false)}
        />

        {/* Quick floating theme toggle in bottom corner */}
        {/*<FloatingThemeToggle />*/}
      </main>
    // </ThemeProvider>
  );
}
