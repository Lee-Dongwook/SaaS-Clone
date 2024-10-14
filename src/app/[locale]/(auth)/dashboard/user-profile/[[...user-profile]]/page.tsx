import { UserProfile } from '@clerk/nextjs';
import { useTranslations } from 'next-intl';

import { DashboardTitleBar } from '@/components';
import { getI18nPath } from '@/utils/getI18nPath';

const UserProfilePage = (props: { params: { locale: string } }) => {
  const t = useTranslations('UserProfile');

  return (
    <>
      <DashboardTitleBar
        title={t('title_bar')}
        description={t('title_bar_description')}
      />
      <UserProfile
        routing="path"
        path={getI18nPath('/dashboard/user-profile', props.params.locale)}
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

export default UserProfilePage;
