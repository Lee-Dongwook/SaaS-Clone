import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

interface ILandingCenteredFooter {
  logo: React.ReactNode;
  name: string;
  iconList: React.ReactNode;
  legalLinks: React.ReactNode;
  children: React.ReactNode;
}

export const LandingCenteredFooter = (props: ILandingCenteredFooter) => {
  const t = useTranslations('Footer');

  return (
    <div className="flex flex-col items-center text-center">
      {props.logo}

      <ul className="mt-4 flex gap-x-8 text-lg max-sm:flex-col [&_a:hover]:opacity-100 [&_a]:opacity-60">
        {props.children}
      </ul>

      <ul className="mt-4 flex flex-row gap-x-5 text-muted-foreground [&_svg:hover]:text-primary [&_svg:hover]:opacity-100 [&svg]:size-5 [&_svg]:opacity-60">
        {props.iconList}
      </ul>

      <div className="mt-6 flex w-full items-center justify-between gap-y-2 border-t pt-3 text-sm text-muted-foreground max-md:flex-col">
        <div>
          {`© Copyright ${new Date().getFullYear()} ${props.name}.`}
          {t.rich('designed_by', {
            author: () => (
              <Link
                className="text-blue-500 hover:text-blue-600"
                href="https://creativedesignsguru.com"
              >
                Creative Designs Guru
              </Link>
            ),
          })}
        </div>

        <ul className="flex gap-x-4 font-medium [&_a:hover]:opacity-100 [&_a]:opacity-60">
          {props.legalLinks}
        </ul>
      </div>
    </div>
  );
};
