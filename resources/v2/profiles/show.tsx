import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Profile } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const ProfileShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Profile>({
    metaData: {
      fields: ['id', 'updated_at', 'username', 'avatar_url', 'website']
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Card title={record?.id} isLoading={isLoading}>
      {/*
       * @property id
       * @type string
       */}
      <Title level={5}>{t('profile:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('profile:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property username
       * @type string
       */}
      <Title level={5}>{t('profile:fields.username', 'Username')}</Title>
      <Text>{record?.username}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property avatar_url
       * @type string
       */}
      <Title level={5}>{t('profile:fields.avatarUrl', 'Avatar url')}</Title>
      <Text>{record?.avatar_url}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property website
       * @type string
       */}
      <Title level={5}>{t('profile:fields.website', 'Website')}</Title>
      <Text>{record?.website}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
