import React, { useEffect } from 'react';

import NextRouter from '@pankod/refine-nextjs-router';
import { useRouter } from 'next/router';
import { useGetLocale } from '@pankod/refine-core';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
const { Link } = NextRouter;
export const LocaleChanger: React.FC = () => {
  const locale = useGetLocale();
  // const { locales } = useRouter();
  const { pathname, asPath, query, locales, push } = useRouter();

  const currentLocale = locale();
  // const otherLocale = currentLocale === 'en' ? 'ar' : 'en';
  // const otherLocaleLable = otherLocale === 'en' ? 'English' : 'العربية';

  useEffect(() => {
    let dir = currentLocale == 'ar' ? 'rtl' : 'ltr';
    let lang = currentLocale == 'ar' ? 'ar' : 'en';
    document.querySelector('html').setAttribute('dir', dir);
    document.querySelector('html').setAttribute('lang', lang);
  }, [currentLocale]);

  const otherLocales = locales?.filter((locale) => locale !== currentLocale);

  const handleClick = (nextLocale: string) => {
    push({ pathname, query }, asPath, { locale: nextLocale });
  };
  return (
    <div className="">
      {otherLocales?.map((locale) => (
        <a
          className="flex items-center justify-start space-x-2 rtl:space-x-reverse"
          onClick={() => handleClick(locale)}
          key={locale}
        >
          <div className="w-4 rounded">
            <img src={`/images/flags/${locale}.svg`} alt={locale} />
          </div>
          <span>{locale === 'en' ? 'English' : 'العربية'}</span>
        </a>
      ))}
    </div>
  );
};
