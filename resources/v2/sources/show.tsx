import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Source } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const SourceShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Source>({
    metaData: {
      fields: [
        'id',
        'username',
        'disabled',
        'screenshots',
        'status',
        'thumb',
        'url',
        'platform_name',
        'credential_id',
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
       * @type integer          * Note:This is a Primary Key.<pk/>
       */}
      <Title level={5}>{t('source:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property username
       * @type string
       */}
      <Title level={5}>{t('source:fields.username', 'Username')}</Title>
      <Text>{record?.username}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property disabled
       * @type boolean
       */}
      <Title level={5}>{t('source:fields.disabled', 'Disabled')}</Title>
      <Text>{record?.disabled}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property screenshots
       * @type string
       */}
      <Title level={5}>{t('source:fields.screenshots', 'Screenshots')}</Title>
      <Text>{record?.screenshots}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property status
       * @type EnumSourceStatus
       */}
      <Title level={5}>{t('source:fields.status', 'Status')}</Title>
      <Text>{record?.status}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property thumb
       * @type string
       */}
      <Title level={5}>{t('source:fields.thumb', 'Thumb')}</Title>
      <Text>{record?.thumb}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property url
       * @type string
       */}
      <Title level={5}>{t('source:fields.url', 'Url')}</Title>
      <Text>{record?.url}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property platform_name
       * @type string          * Note:This is a Foreign Key to `platforms.name`.<fk table='platforms' column='name'/>
       */}
      <Title level={5}>
        {t('source:fields.platformName', 'Platform name')}
      </Title>
      <Text>{record?.platform_name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property credential_id
       * @type string          * Some sources required credentials to gain accessNote:This is a Foreign Key to `credentials.id`.<fk table='credentials' column='id'/>
       */}
      <Title level={5}>
        {t('source:fields.credentialId', 'Credential id')}
      </Title>
      <Text>{record?.credential_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('source:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('source:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
