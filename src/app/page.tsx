'use client';

import HeroSection from '@/components/index/01Hero';
import FeaturesSection from '@/components/index/03Features';
import UseReasonsSection from '@/components/index/04UseReasons';
import VerificationStepsSection from '@/components/index/05VerificationSteps';
import FunctionalitiesSection from '@/components/index/06Functionalities';
import UseCasesSection from '@/components/index/07UseCases';
// import CustomerServiceSection from '@/components/index/08CustomerService';
import FAQSection from '@/components/index/09FAQ';
import ContactSection from '@/components/index/10Contact';

export default function Home() {
  return (
    <main className='d-flex flex-column gap-8 overflow-hidden'>
      <HeroSection />
      <FeaturesSection />
      <UseReasonsSection />
      <VerificationStepsSection />
      <FunctionalitiesSection />
      <UseCasesSection />
      {/* <CustomerServiceSection /> */}
      <FAQSection />
      <ContactSection />
    </main>
  );
}
