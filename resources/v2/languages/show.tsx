import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Language } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const LanguageShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Language>({
    metaData: {
      fields: ['id', 'code', 'name', 'enabled', 'updated_at']
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
      <Title level={5}>{t('language:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property code
       * @type string
       */}
      <Title level={5}>{t('language:fields.code', 'Code')}</Title>
      <Text>{record?.code}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property name
       * @type string
       */}
      <Title level={5}>{t('language:fields.name', 'Name')}</Title>
      <Text>{record?.name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property enabled
       * @type boolean
       */}
      <Title level={5}>{t('language:fields.enabled', 'Enabled')}</Title>
      <Text>{record?.enabled}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('language:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
