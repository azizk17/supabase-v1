import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { GeneratesMedia } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const GeneratesMediaShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<GeneratesMedia>({
    metaData: {
      fields: ['generate_id', 'media_id', 'created_at', 'updated_at']
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Card title={record?.id} isLoading={isLoading}>
      {/*
       * @property generate_id
       * @type integer          * Note:This is a Foreign Key to `generates.id`.<fk table='generates' column='id'/>
       */}
      <Title level={5}>
        {t('generatesMedia:fields.generateId', 'Generate id')}
      </Title>
      <Text>{record?.generate_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property media_id
       * @type integer          * Note:This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
       */}
      <Title level={5}>{t('generatesMedia:fields.mediaId', 'Media id')}</Title>
      <Text>{record?.media_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>
        {t('generatesMedia:fields.createdAt', 'Created at')}
      </Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>
        {t('generatesMedia:fields.updatedAt', 'Updated at')}
      </Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
