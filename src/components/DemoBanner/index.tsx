import React from 'react';

import Link from 'next/link';

import { LandingStickyBanner } from '@/components/LandingStickyBanner';

export const DemoBanner = () => {
  return (
    <LandingStickyBanner>
      Live Demo of SaaS Boilerplate -{' '}
      <Link href="/sign-up">Explore the User Dashboard</Link>
    </LandingStickyBanner>
  );
};
