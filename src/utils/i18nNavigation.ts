import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { AllLocales } from './AppConfig';

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: AllLocales,
  localePrefix: 'always',
});
