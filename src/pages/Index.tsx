
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AudienceSection from '@/components/AudienceSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <AudienceSection />
      <BenefitsSection />
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
