import * as Sentry from '@sentry/nextjs';
import * as Spotlight from '@spotlightjs/spotlight';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  tracesSampleRate: 1,

  debug: false,

  replaysOnErrorSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});

if (process.env.NODE_ENV === 'development') {
  Spotlight.init();
}
