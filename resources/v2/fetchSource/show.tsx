import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { FetchSource } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const FetchSourceShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<FetchSource>({
    metaData: {
      fields: [
        'id',
        'title',
        'dexcription',
        'output',
        'status',
        'source_id',
        'fetch_id',
        'duration',
        'resultes',
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
      <Title level={5}>{t('fetchSource:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property title
       * @type string
       */}
      <Title level={5}>{t('fetchSource:fields.title', 'Title')}</Title>
      <Text>{record?.title}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property dexcription
       * @type string
       */}
      <Title level={5}>
        {t('fetchSource:fields.dexcription', 'Dexcription')}
      </Title>
      <Text>{record?.dexcription}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property output
       * @type string
       */}
      <Title level={5}>{t('fetchSource:fields.output', 'Output')}</Title>
      <Text>{record?.output}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property status
       * @type EnumFetchStatus
       */}
      <Title level={5}>{t('fetchSource:fields.status', 'Status')}</Title>
      <Text>{record?.status}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property source_id
       * @type integer          * Note:This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
       */}
      <Title level={5}>{t('fetchSource:fields.sourceId', 'Source id')}</Title>
      <Text>{record?.source_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property fetch_id
       * @type integer          * Note:This is a Foreign Key to `fetchs.id`.<fk table='fetchs' column='id'/>
       */}
      <Title level={5}>{t('fetchSource:fields.fetchId', 'Fetch id')}</Title>
      <Text>{record?.fetch_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property duration
       * @type number
       */}
      <Title level={5}>{t('fetchSource:fields.duration', 'Duration')}</Title>
      <Text>{record?.duration}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property resultes
       * @type string
       */}
      <Title level={5}>{t('fetchSource:fields.resultes', 'Resultes')}</Title>
      <Text>{record?.resultes}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('fetchSource:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('fetchSource:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
