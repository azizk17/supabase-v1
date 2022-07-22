import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Marker } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const MarkerShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Marker>({
    metaData: {
      fields: [
        'id',
        'end_at',
        'start_at',
        'track_id',
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
      <Title level={5}>{t('marker:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property end_at
       * @type string
       */}
      <Title level={5}>{t('marker:fields.endAt', 'End at')}</Title>
      <Text>{record?.end_at}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property start_at
       * @type string
       */}
      <Title level={5}>{t('marker:fields.startAt', 'Start at')}</Title>
      <Text>{record?.start_at}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property track_id
       * @type string
       */}
      <Title level={5}>{t('marker:fields.trackId', 'Track id')}</Title>
      <Text>{record?.track_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('marker:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('marker:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
