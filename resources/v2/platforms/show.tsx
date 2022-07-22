import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Platform } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const PlatformShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Platform>({
    metaData: {
      fields: ['name', 'label', 'status', 'url']
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Card title={record?.id} isLoading={isLoading}>
      {/*
       * @property name
       * @type string          * Note:This is a Primary Key.<pk/>
       */}
      <Title level={5}>{t('platform:fields.name', 'Name')}</Title>
      <Text>{record?.name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property label
       * @type string
       */}
      <Title level={5}>{t('platform:fields.label', 'Label')}</Title>
      <Text>{record?.label}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property status
       * @type EnumPlatformStatus
       */}
      <Title level={5}>{t('platform:fields.status', 'Status')}</Title>
      <Text>{record?.status}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property url
       * @type string
       */}
      <Title level={5}>{t('platform:fields.url', 'Url')}</Title>
      <Text>{record?.url}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
