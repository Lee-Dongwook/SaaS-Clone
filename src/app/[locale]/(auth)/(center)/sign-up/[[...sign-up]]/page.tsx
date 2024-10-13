import { SignUp } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';
import { getI18nPath } from '@/utils/getI18nPath';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignUpPage = (props: { params: { locale: string } }) => (
  <SignUp path={getI18nPath('/sign-in', props.params.locale)} />
);

export default SignUpPage;
