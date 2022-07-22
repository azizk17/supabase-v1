import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { CollectionsMedia } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const CollectionsMediaShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<CollectionsMedia>({
    metaData: {
      fields: [
        'id',
        'collection_id',
        'media_id',
        'created_at',
        'updated_at',
        'deleted'
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
      <Title level={5}>{t('collectionsMedia:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property collection_id
       * @type integer          * Note:This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/>
       */}
      <Title level={5}>
        {t('collectionsMedia:fields.collectionId', 'Collection id')}
      </Title>
      <Text>{record?.collection_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property media_id
       * @type integer          * Note:This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
       */}
      <Title level={5}>
        {t('collectionsMedia:fields.mediaId', 'Media id')}
      </Title>
      <Text>{record?.media_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>
        {t('collectionsMedia:fields.createdAt', 'Created at')}
      </Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>
        {t('collectionsMedia:fields.updatedAt', 'Updated at')}
      </Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property deleted
       * @type boolean
       */}
      <Title level={5}>{t('collectionsMedia:fields.deleted', 'Deleted')}</Title>
      <Text>{record?.deleted}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
