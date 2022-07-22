import {
  IResourceComponentsProps,
  useTranslate,
  useList,
  useUpdate,
  LayoutWrapper
} from '@pankod/refine-core';
import React, { useEffect, useState } from 'react';
import { Card, Checkbox, Divider, Toggle } from '@/components/ui2';
import { Pagination } from '@/components/Pagination';
import CardBody from '@/components/ui2/Card/CardBody';
import { Country, Language } from 'types';
import CardTitle from '@/components/ui2/Card/CardTitle';
import { FiChevronRight } from 'react-icons/fi';
import SettingsLayout from '@/components/layout/SettingsLayout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const GeolocationList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const [countryPage, setCountryPage] = useState(0);
  const {
    data: countries,
    error,
    isLoading
  } = useList<Country>({
    resource: 'countries',
    config: {
      pagination: { current: countryPage, pageSize: 10 },
      sort: [{ field: 'name', order: 'asc' }]
    }
  });
  const languages = useList<Language>({
    resource: 'languages',
    config: {
      sort: [{ field: 'name', order: 'asc' }]
    }
  });

  return (
    <SettingsLayout>
      <div>
        <Card>
          <CardBody>
            <CardTitle color="accent">
              {t('country:title', 'Countries')}
            </CardTitle>
            <div className="  justify-start items-center w-full ">
              {countries?.data.map((country) => (
                <CountryItem country={country} />
              ))}
            </div>

            <Pagination
              pageIndex={countryPage}
              pageSize={10}
              total={countries?.total}
              gotoPage={(p) => setCountryPage(p)}
              nextPage={() => setCountryPage(countryPage + 1)}
              previousPage={() => setCountryPage(countryPage - 1)}
            />
          </CardBody>
        </Card>
        <Divider />
        <Card>
          <CardBody>
            <CardTitle>{t('language:title', 'Languages')}</CardTitle>
            <div className="  justify-start items-center w-full ">
              {languages?.data?.data.map((language) => (
                <LanguageItem language={language} />
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </SettingsLayout>
  );
};

const CountryItem: React.FC<{ country: Country }> = ({ country }) => {
  const { mutate } = useUpdate<Country>();

  const toggleCountry = () =>
    mutate({
      resource: 'countries',
      id: country.id,
      values: {
        Enabled: !country.Enabled
      }
    });
  return (
    <div className="flex items-center p-2  w-full">
      <div className="flex-1">{country.name}</div>
      <div className="flex-1">{country.iso3}</div>
      <div className="flex-1">
        {/* <Toggle checked={country.Enabled} /> */}
        <Toggle checked={country.Enabled} onClick={toggleCountry} />
      </div>
    </div>
  );
};

const LanguageItem: React.FC<{ language: Language }> = ({ language }) => {
  const { mutate } = useUpdate<Language>();

  const toggleLanguage = () =>
    mutate({
      resource: 'languages',
      id: language.id,
      values: {
        enabled: !language.enabled
      }
    });
  return (
    <div className="flex items-center p-2  w-full">
      <div className="flex-1">{language.name}</div>
      <div className="flex-1">{language.code}</div>
      <div className="flex-1">
        {/* <Toggle checked={country.Enabled} /> */}
        <Toggle
          checked={language.enabled}
          color="secondary"
          onClick={toggleLanguage}
        />
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', [
        'country',
        'language'
      ]))
    }
  };
};

export default GeolocationList;
