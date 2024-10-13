import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher, buttonVariants, Logo } from '@/common';
import { LandingCenteredMenu } from '@/components/LandingCenteredMenu';
import { LandingSection } from '@/components/LandingSection';

export const NavBar = () => {
  const t = useTranslations('NavBar');

  return (
    <LandingSection className="px-3 py-6">
      <LandingCenteredMenu
        logo={<Logo />}
        rightMenu={
          <>
            <li>
              <LocaleSwitcher />
            </li>
            <li>
              <Link href="/sign-in">{t('sign_in')}</Link>
            </li>
            <li>
              <Link className={buttonVariants()} href="/sign-up">
                {t('sign_up')}
              </Link>
            </li>
          </>
        }
      >
        <li>
          <Link href="/sign-up">{t('product')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('docs')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('blog')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('community')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('company')}</Link>
        </li>
      </LandingCenteredMenu>
    </LandingSection>
  );
};
