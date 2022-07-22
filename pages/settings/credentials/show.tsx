import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Credential } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const CredentialShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Credential>({
    metaData: {
      fields: [
        'id',
        'username',
        'nickname',
        'email',
        'password',
        'apikey',
        'avatar',
        'status',
        'url',
        'enabled',
        'updated_at',
        'created_at'
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
      <Title level={5}>{t('credential:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property username
       * @type string
       */}
      <Title level={5}>{t('credential:fields.username', 'Username')}</Title>
      <Text>{record?.username}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property nickname
       * @type string
       */}
      <Title level={5}>{t('credential:fields.nickname', 'Nickname')}</Title>
      <Text>{record?.nickname}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property email
       * @type string
       */}
      <Title level={5}>{t('credential:fields.email', 'Email')}</Title>
      <Text>{record?.email}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property password
       * @type string
       */}
      <Title level={5}>{t('credential:fields.password', 'Password')}</Title>
      <Text>{record?.password}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property apikey
       * @type string
       */}
      <Title level={5}>{t('credential:fields.apikey', 'Apikey')}</Title>
      <Text>{record?.apikey}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property avatar
       * @type string
       */}
      <Title level={5}>{t('credential:fields.avatar', 'Avatar')}</Title>
      <Text>{record?.avatar}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property status
       * @type EnumCredentialStatus
       */}
      <Title level={5}>{t('credential:fields.status', 'Status')}</Title>
      <Text>{record?.status}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property url
       * @type string
       */}
      <Title level={5}>{t('credential:fields.url', 'Url')}</Title>
      <Text>{record?.url}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property enabled
       * @type boolean
       */}
      <Title level={5}>{t('credential:fields.enabled', 'Enabled')}</Title>
      <Text>{record?.enabled}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('credential:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('credential:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
