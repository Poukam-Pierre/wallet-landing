'use client';

import {
  ContactUsSection,
  Cta,
  Engagement,
  FAQ,
  Hero,
  HowItWorks,
  LocationSection,
  PageLayout,
  PaymentMethods,
  TrustSection
} from '@components';


export default function Index() {

  return (
    <PageLayout>
      <Hero />
      <LocationSection />
      <TrustSection />
      <Engagement />
      <HowItWorks />
      <ContactUsSection />
      <PaymentMethods />
      <Cta />
      <FAQ />
    </PageLayout>
  );
}
