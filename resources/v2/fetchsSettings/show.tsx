import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { FetchsSetting } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const FetchsSettingShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<FetchsSetting>({
    metaData: {
      fields: ['rate_limit', 'created_at', 'updated_at']
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Card title={record?.id} isLoading={isLoading}>
      {/*
       * @property rate_limit
       * @type string          * Note:This is a Foreign Key to `platforms.name`.<fk table='platforms' column='name'/>
       */}
      <Title level={5}>
        {t('fetchsSetting:fields.rateLimit', 'Rate limit')}
      </Title>
      <Text>{record?.rate_limit}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>
        {t('fetchsSetting:fields.createdAt', 'Created at')}
      </Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>
        {t('fetchsSetting:fields.updatedAt', 'Updated at')}
      </Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
