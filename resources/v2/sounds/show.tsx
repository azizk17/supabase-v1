import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Sound } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const SoundShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Sound>({
    metaData: {
      fields: [
        'id',
        'title',
        'duration',
        'metadata',
        'source_id',
        'thumb',
        'url',
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
      <Title level={5}>{t('sound:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property title
       * @type string
       */}
      <Title level={5}>{t('sound:fields.title', 'Title')}</Title>
      <Text>{record?.title}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property duration
       * @type number
       */}
      <Title level={5}>{t('sound:fields.duration', 'Duration')}</Title>
      <Text>{record?.duration}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property metadata
       * @type string
       */}
      <Title level={5}>{t('sound:fields.metadata', 'Metadata')}</Title>
      <Text>{record?.metadata}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property source_id
       * @type integer
       */}
      <Title level={5}>{t('sound:fields.sourceId', 'Source id')}</Title>
      <Text>{record?.source_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property thumb
       * @type string
       */}
      <Title level={5}>{t('sound:fields.thumb', 'Thumb')}</Title>
      <Text>{record?.thumb}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property url
       * @type string
       */}
      <Title level={5}>{t('sound:fields.url', 'Url')}</Title>
      <Text>{record?.url}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('sound:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('sound:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
