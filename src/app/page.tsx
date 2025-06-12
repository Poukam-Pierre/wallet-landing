'use client';

import { PageLayout } from '@components';
import Cta from '../components/cta';
import Engagement from '../components/engagement';
import FAQ from '../components/faq';
import Hero from '../components/Hero';
import HowItWorks from '../components/howItWorks/howItWorks';
import LocationSection from '../components/locationSection';
import PaymentMethods from '../components/paymentMethods';
import TrustSection from '../components/trustSection';


export default function Index() {

  return (
    <PageLayout>
      <Hero />
      <LocationSection />
      <TrustSection />
      <Engagement />
      <HowItWorks />
      <PaymentMethods />
      <Cta />
      <FAQ />
    </PageLayout>
  );
}
