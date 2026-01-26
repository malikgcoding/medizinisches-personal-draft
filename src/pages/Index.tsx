import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import ContentSections from '@/components/landing/ContentSections';
import FAQ from '@/components/landing/FAQ';
import Accordion from '@/components/landing/Accordion';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = 'Medizinisches Personal | Domain-Paket für das Gesundheitswesen';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium-Domain-Paket für medizinisches Personal: Strategischer Zugang zum DACH-Gesundheitsmarkt für Kliniken, Zeitarbeit, Jobportale, Verbände, Pflegeheime und Fachverlage.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DisclaimerOverlay />
      <Header />
      <main className="pt-16">
        <Hero />
        <ContentSections />
        <FAQ />
        <Accordion />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
