import '@/styles/globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import ClientProvider from '@/core/provider';
import AuthProvider from '@/core/next-auth';
import { DemoBadge } from '@/common/Badge/DemoBadge';
import { AllLocales } from '@/utils/AppConfig';

interface IRootLayout {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: 'SaaS Next Project',
  description: 'Generated by create next app',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return AllLocales.map((locale) => ({ locale }));
}

export default function RootLayout(props: IRootLayout) {
  unstable_setRequestLocale(props.params.locale);

  const messages = useMessages();

  return (
    <ClerkProvider>
      <html lang={props.params.locale}>
        <body className="bg-background text-foreground antialiased">
          <NextIntlClientProvider
            locale={props.params.locale}
            messages={messages}
          >
            <ClientProvider>
              <AuthProvider>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                {props.children}
                <DemoBadge />
              </AuthProvider>
            </ClientProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
