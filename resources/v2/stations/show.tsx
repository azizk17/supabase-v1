import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Station } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const StationShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Station>({
    metaData: {
      fields: ['id', 'name', 'description', 'thumb', 'created_at', 'updated_at']
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
      <Title level={5}>{t('station:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property name
       * @type string
       */}
      <Title level={5}>{t('station:fields.name', 'Name')}</Title>
      <Text>{record?.name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property description
       * @type string
       */}
      <Title level={5}>{t('station:fields.description', 'Description')}</Title>
      <Text>{record?.description}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property thumb
       * @type string
       */}
      <Title level={5}>{t('station:fields.thumb', 'Thumb')}</Title>
      <Text>{record?.thumb}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('station:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('station:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
