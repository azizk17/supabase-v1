import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Channel } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const ChannelShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Channel>({
    metaData: {
      fields: [
        'id',
        'name',
        'apikey',
        'country_id',
        'credential_id',
        'language_id',
        'metadata',
        'orginal_url',
        'station_id',
        'platform_name',
        'thumb',
        'description',
        'logo',
        'watermark',
        'created_at',
        'updated_at'
      ]
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Card title={record?.id} isLoading={isLoading}>
      {/*
       * @property id
       * @type string          * Note:This is a Primary Key.<pk/>
       */}
      <Title level={5}>{t('channel:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property name
       * @type string
       */}
      <Title level={5}>{t('channel:fields.name', 'Name')}</Title>
      <Text>{record?.name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property apikey
       * @type string
       */}
      <Title level={5}>{t('channel:fields.apikey', 'Apikey')}</Title>
      <Text>{record?.apikey}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property country_id
       * @type integer          * Note:This is a Foreign Key to `countries.id`.<fk table='countries' column='id'/>
       */}
      <Title level={5}>{t('channel:fields.countryId', 'Country id')}</Title>
      <Text>{record?.country_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property credential_id
       * @type string          * Note:This is a Foreign Key to `credentials.id`.<fk table='credentials' column='id'/>
       */}
      <Title level={5}>
        {t('channel:fields.credentialId', 'Credential id')}
      </Title>
      <Text>{record?.credential_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property language_id
       * @type integer          * Note:This is a Foreign Key to `languages.id`.<fk table='languages' column='id'/>
       */}
      <Title level={5}>{t('channel:fields.languageId', 'Language id')}</Title>
      <Text>{record?.language_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property metadata
       * @type string
       */}
      <Title level={5}>{t('channel:fields.metadata', 'Metadata')}</Title>
      <Text>{record?.metadata}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property orginal_url
       * @type string
       */}
      <Title level={5}>{t('channel:fields.orginalUrl', 'Orginal url')}</Title>
      <Text>{record?.orginal_url}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property station_id
       * @type string          * Note:This is a Foreign Key to `stations.id`.<fk table='stations' column='id'/>
       */}
      <Title level={5}>{t('channel:fields.stationId', 'Station id')}</Title>
      <Text>{record?.station_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property platform_name
       * @type string          * Note:This is a Foreign Key to `platforms.name`.<fk table='platforms' column='name'/>
       */}
      <Title level={5}>
        {t('channel:fields.platformName', 'Platform name')}
      </Title>
      <Text>{record?.platform_name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property thumb
       * @type string
       */}
      <Title level={5}>{t('channel:fields.thumb', 'Thumb')}</Title>
      <Text>{record?.thumb}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property description
       * @type string
       */}
      <Title level={5}>{t('channel:fields.description', 'Description')}</Title>
      <Text>{record?.description}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property logo
       * @type string
       */}
      <Title level={5}>{t('channel:fields.logo', 'Logo')}</Title>
      <Text>{record?.logo}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property watermark
       * @type string
       */}
      <Title level={5}>{t('channel:fields.watermark', 'Watermark')}</Title>
      <Text>{record?.watermark}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('channel:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('channel:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
