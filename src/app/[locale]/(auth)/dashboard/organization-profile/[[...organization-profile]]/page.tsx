import { OrganizationProfile } from '@clerk/nextjs';
import { useTranslations } from 'next-intl';

import { DashboardTitleBar } from '@/components';
import { getI18nPath } from '@/utils/getI18nPath';

const OrganizationProfilePage = (props: { params: { locale: string } }) => {
  const t = useTranslations('OrganizationProfile');

  return (
    <>
      <DashboardTitleBar
        title={t('title_bar')}
        description={t('title_bar_description')}
      />
      <OrganizationProfile
        routing="path"
        path={getI18nPath(
          '/dashboard/organization-profile',
          props.params.locale,
        )}
        appearance={{
          elements: {
            rootBox: 'w-full',
            cardBox: 'w-full flex',
          },
        }}
      />
    </>
  );
};

export default OrganizationProfilePage;
