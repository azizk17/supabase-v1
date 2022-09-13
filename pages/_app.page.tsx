import 'styles/main.css';
import 'styles/image-zoom.css';
import 'styles/chrome-bug.css';
import React from 'react';
import { AppProps } from 'next/app';
import { Refine } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-nextjs-router';
import { dataProvider } from '@pankod/refine-supabase';
import { authProvider } from 'utils/authProvider';
import {default as restDataProvider} from "@pankod/refine-simple-rest";

import { notificationProvider } from '@/utils/notificationProvider'
import { supabaseClient } from 'utils';
import { Layout } from '@/components/layout/Layout';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { DashboardPage } from 'pages/dashboard';
import { SignIn } from 'pages/signin.page';
import { StationCreate, StationList, StationShow } from 'resources/v2/stations';
import {
  CountryCreate,
  CountryEdit,
  CountryList,
  CountryShow
} from 'resources/countries';
import { FiGlobe, FiMapPin } from 'react-icons/fi';
import { PlatformCreate, PlatformList } from 'resources/v2/platforms';
import { CustomErrorComponent } from '@/components/errors';
import SettingsPage from './settings/index.page';
import CredentialList from './settings/credentials/index.page';
import { ChannelEdit, ChannelList, ChannelShow } from 'resources/v2/channels';
import { VideoShow } from 'resources/v2/videos';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { t, i18n } = useTranslation('common');

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language
  };
  return (
    <ThemeProvider defaultTheme="dark">
      <Refine
        routerProvider={routerProvider}
        notificationProvider={notificationProvider}
        // ReadyPage={ReadyPage}
        catchAll={<CustomErrorComponent />}
        dataProvider={{
          default: dataProvider(supabaseClient), 
          lab: restDataProvider(process.env.NEXT_PUBLIC_LAB_URL)}}
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
            name: 'stations',
            list: StationList,
            show: StationShow,
            // label: "Stations",
          },
          {
            name: 'channels',
            show: ChannelShow,
            edit: ChannelEdit,
          },

          {
            name: 'countries',
            icon: <FiMapPin />,
            list: CountryList,
            edit: CountryEdit,
            create: CountryCreate,
            show: CountryShow
          },
         
          {
            name: "Settings",
            list: SettingsPage,
            options: {
              route: "settings"
            }
          },
          {
            name: "videos",
            show: VideoShow,
          },
          // Settings
          {
            name: 'cre',
            parentName: 'Settings',
            list: CredentialList,
            options: {
              route: 'cre'
            }
          }
        ]}
      >
        <Component {...pageProps} />
      </Refine>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
