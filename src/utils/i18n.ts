import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { AllLocales } from '@/utils/AppConfig';

export default getRequestConfig(async ({ locale }) => {
  if (!AllLocales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
