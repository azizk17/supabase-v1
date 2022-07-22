import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Trendlist } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const TrendlistShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Trendlist>({
    metaData: {
      fields: ['id', 'date', 'trends', 'created_at', 'updated_at']
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
      <Title level={5}>{t('trendlist:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property date
       * @type Date
       */}
      <Title level={5}>{t('trendlist:fields.date', 'Date')}</Title>
      <DateField format="LLL" value={record?.date} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property trends
       * @type string
       */}
      <Title level={5}>{t('trendlist:fields.trends', 'Trends')}</Title>
      <Text>{record?.trends}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('trendlist:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('trendlist:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
