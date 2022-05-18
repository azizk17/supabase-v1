import React, { useEffect } from 'react';

import NextRouter from '@pankod/refine-nextjs-router';
import { useRouter } from 'next/router';
import { useGetLocale } from '@pankod/refine-core';
const { Link } = NextRouter;
export const LocaleChanger: React.FC = () => {
  const locale = useGetLocale();
  const { locales } = useRouter();
  const currentLocale = locale();
  const otherLocale = currentLocale === 'en' ? 'ar' : 'en';
  const otherLocaleLable = otherLocale === 'en' ? 'English' : 'العربية';

  useEffect(() => {
    let dir = currentLocale == 'ar' ? 'rtl' : 'ltr';
    let lang = currentLocale == 'ar' ? 'ar' : 'en';
    document.querySelector('html').setAttribute('dir', dir);
    document.querySelector('html').setAttribute('lang', lang);
  }, [currentLocale]);

  return (
    <Link href="/" locale={otherLocale}>
      <a className="flex items-center">
        <div className="w-4 rounded">
          <img
            src={`/images/flags/${otherLocale}.svg`}
            alt={otherLocaleLable}
          />
        </div>
        <span>{otherLocaleLable}</span>
      </a>
    </Link>
  );
};
