/* eslint-disable @typescript-eslint/no-empty-object-type */

import type { OrgPermission, OrgRole } from '@/types/Auth';

type Messages = typeof import('../locales/en.json');

declare interface IntlMessages extends Message {}

declare global {
  interface ClerkAuthorization {
    permission: OrgPermission;
    role: OrgRole;
  }
}
