import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { CollectionsSource } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const CollectionsSourceShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<CollectionsSource>({
    metaData: {
      fields: ['id', 'source_id', 'collection_id', 'created_at', 'updated_at']
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
      <Title level={5}>{t('collectionsSource:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property source_id
       * @type integer          * Note:This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
       */}
      <Title level={5}>
        {t('collectionsSource:fields.sourceId', 'Source id')}
      </Title>
      <Text>{record?.source_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property collection_id
       * @type integer          * Note:This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/>
       */}
      <Title level={5}>
        {t('collectionsSource:fields.collectionId', 'Collection id')}
      </Title>
      <Text>{record?.collection_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>
        {t('collectionsSource:fields.createdAt', 'Created at')}
      </Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>
        {t('collectionsSource:fields.updatedAt', 'Updated at')}
      </Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
