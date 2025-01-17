import { fileURLToPath } from 'node:url';

import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import createJiti from 'jiti';
import withNextIntl from 'next-intl/plugin';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/utils/Env');

const withNextIntlConfig = withNextIntl('./src/utils/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default withSentryConfig(
  bundleAnalyzer(
    withNextIntlConfig({
      eslint: {
        dirs: ['.'],
      },
      poweredByHeader: false,
      reactStrictMode: true,
      experimental: {
        serverComponentsExternalPackages: ['@electric-sql/pglite'],
      },
    }),
  ),
  {
    org: 'nextjs-boilerplate-org',
    project: 'nextjs-boilerplate',

    silent: !process.env.CI,

    widenClientFileUpload: true,

    tunnelRoute: '/monitoring',

    hideSourceMaps: true,

    disableLogger: true,

    automaticVercelMonitors: true,

    telemetry: false,
  },
);
