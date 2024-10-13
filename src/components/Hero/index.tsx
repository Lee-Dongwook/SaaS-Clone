import React from 'react';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/common';
import { LandingCenteredHero } from '@/components/LandingCenteredHero';
import { LandingSection } from '@/components/LandingSection';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <LandingSection className="py-36">
      <LandingCenteredHero
        banner={{
          href: 'https://twitter.com/ixartz',
          text: (
            <>
              <TwitterLogoIcon className="mr-1 size-5" /> {t('follow_twitter')}
            </>
          ),
        }}
        title={t.rich('title', {
          important: (chunks) => (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={
          <>
            <a
              className={buttonVariants({ size: 'lg' })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              {t('primary_button')}
            </a>
            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              <GitHubLogoIcon className="mr-2 size-5" />
              {t('secondary_button')}
            </a>
          </>
        }
      />
    </LandingSection>
  );
};
