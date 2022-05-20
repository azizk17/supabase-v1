import 'styles/main.css';
import 'styles/chrome-bug.css';

import React from 'react';
import { AppProps } from 'next/app';

import { Refine } from '@pankod/refine-core';
// import {
//   notificationProvider,
//   ReadyPage,
//   ErrorComponent,
//   ConfigProvider,
// } from "@pankod/refine-antd";
import routerProvider from '@pankod/refine-nextjs-router';

import { dataProvider } from '@pankod/refine-supabase';

import { authProvider } from 'utils/authProvider';
import { supabaseClient } from 'utils';
// import {
//   Title,
//   Header,
//   Sider,
//   Footer,
//   Layout,
//   OffLayoutArea,
// } from "@components/layout";
import { Layout } from '@/components/layout/Layout';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { ThemeProvider, useTheme } from 'next-themes';

import { DashboardPage } from 'pages/dashboard';
import { SignIn } from 'pages/signin';
import { LanguageList } from 'resources/languages';
import { CountryList } from 'resources/countries';
import { FiGlobe, FiMapPin } from 'react-icons/fi';
// import { CustomErrorComponent } from '@/components/errors';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { t, i18n } = useTranslation('common');

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language
  };
  const { theme, setTheme } = useTheme();

  // const currThemes = {
  //   dark: `${process.env.PUBLIC_URL}/antd.dark-theme.css`,
  //   light: `${process.env.PUBLIC_URL}/antd.light-theme.css`,
  // };
  // i18nProvider.getLocale() === "ar" ? "rtl" : "ltr"

  return (
    <ThemeProvider defaultTheme="dark">
      <Refine
        routerProvider={routerProvider}
        // notificationProvider={notificationProvider}
        // ReadyPage={ReadyPage}
        // catchAll={<CustomErrorComponent />}
        dataProvider={dataProvider(supabaseClient)}
        authProvider={authProvider}
        DashboardPage={DashboardPage}
        LoginPage={SignIn}
        // Title={Title}
        // Header={Header}
        // Sider={Sider}
        // Footer={Footer}
        Layout={Layout}
        // OffLayoutArea={OffLayoutArea}
        i18nProvider={i18nProvider}
        resources={[
          {
            name: 'languages',
            list: LanguageList,
            icon: <FiGlobe />
          },
          {
            name: 'countries',
            list: CountryList,
            icon: <FiMapPin />
          }
        ]}
      >
        {/* <ConfigProvider
          direction={i18nProvider.getLocale() === "ar" ? "rtl" : "ltr"}
        > */}
        <Component {...pageProps} />
        {/* </ConfigProvider> */}
      </Refine>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
