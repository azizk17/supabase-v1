import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Template } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const TemplateShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Template>({
    metaData: {
      fields: [
        'id',
        'key',
        'name',
        'description',
        'thumb',
        'metadata',
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
      <Title level={5}>{t('template:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property key
       * @type string
       */}
      <Title level={5}>{t('template:fields.key', 'Key')}</Title>
      <Text>{record?.key}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property name
       * @type string
       */}
      <Title level={5}>{t('template:fields.name', 'Name')}</Title>
      <Text>{record?.name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property description
       * @type string
       */}
      <Title level={5}>{t('template:fields.description', 'Description')}</Title>
      <Text>{record?.description}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property thumb
       * @type string
       */}
      <Title level={5}>{t('template:fields.thumb', 'Thumb')}</Title>
      <Text>{record?.thumb}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property metadata
       * @type string
       */}
      <Title level={5}>{t('template:fields.metadata', 'Metadata')}</Title>
      <Text>{record?.metadata}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('template:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('template:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
