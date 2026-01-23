import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import ContentSections from '@/components/landing/ContentSections';
import FAQ from '@/components/landing/FAQ';
import Accordion from '@/components/landing/Accordion';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
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
