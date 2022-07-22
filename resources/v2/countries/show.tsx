import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Country } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const CountryShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Country>({
    metaData: {
      fields: [
        'id',
        'name',
        'iso2',
        'iso3',
        'local_name',
        'continent',
        'Enabled'
      ]
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Card title={record?.id} isLoading={isLoading}>
      {/*
       * @property id
       * @type integer          * Note:This is a Primary Key.<pk/>
       */}
      <Title level={5}>{t('country:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property name
       * @type string          * Full country name.
       */}
      <Title level={5}>{t('country:fields.name', 'Name')}</Title>
      <Text>{record?.name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property iso2
       * @type string          * ISO 3166-1 alpha-2 code.
       */}
      <Title level={5}>{t('country:fields.iso2', 'Iso2')}</Title>
      <Text>{record?.iso2}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property iso3
       * @type string          * ISO 3166-1 alpha-3 code.
       */}
      <Title level={5}>{t('country:fields.iso3', 'Iso3')}</Title>
      <Text>{record?.iso3}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property local_name
       * @type string          * Local variation of the name.
       */}
      <Title level={5}>{t('country:fields.localName', 'Local name')}</Title>
      <Text>{record?.local_name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property continent
       * @type Continent
       */}
      <Title level={5}>{t('country:fields.continent', 'Continent')}</Title>
      <Text>{record?.continent}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property Enabled
       * @type boolean
       */}
      <Title level={5}>{t('country:fields.Enabled', 'Enabled')}</Title>
      <Text>{record?.Enabled}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
