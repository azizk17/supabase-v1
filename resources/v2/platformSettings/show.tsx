import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { PlatformSetting } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const PlatformSettingShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<PlatformSetting>({
    metaData: {
      fields: ['platform_name', 'created_at', 'updated_at']
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Card title={record?.id} isLoading={isLoading}>
      {/*
       * @property platform_name
       * @type string          * Note:This is a Foreign Key to `platforms.name`.<fk table='platforms' column='name'/>
       */}
      <Title level={5}>
        {t('platformSetting:fields.platformName', 'Platform name')}
      </Title>
      <Text>{record?.platform_name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>
        {t('platformSetting:fields.createdAt', 'Created at')}
      </Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>
        {t('platformSetting:fields.updatedAt', 'Updated at')}
      </Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
