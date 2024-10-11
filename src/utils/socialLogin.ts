/* eslint-disable @typescript-eslint/no-explicit-any */
import { signIn } from 'next-auth/react';

export const handleSocialLogin = async (provider: any) => signIn(provider);
