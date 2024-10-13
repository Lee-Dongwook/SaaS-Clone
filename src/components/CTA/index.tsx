import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/common';
import { LandingCTABanner } from '@/components/LandingCTABanner';
import { LandingSection } from '@/components/LandingSection';

export const CTA = () => {
  const t = useTranslations();

  return (
    <LandingSection>
      <LandingCTABanner
        title={t('title')}
        description={t('description')}
        buttons={
          <a
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
            })}
          >
            <GitHubLogoIcon className="mr-2 size-5" />
            {t('button_text')}
          </a>
        }
      />
    </LandingSection>
  );
};
