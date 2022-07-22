import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Scene } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const SceneShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Scene>({
    metaData: {
      fields: ['id', 'title', 'clip_id', 'created_at', 'updated_at']
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
      <Title level={5}>{t('scene:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property title
       * @type string
       */}
      <Title level={5}>{t('scene:fields.title', 'Title')}</Title>
      <Text>{record?.title}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property clip_id
       * @type integer          * Note:This is a Foreign Key to `clips.id`.<fk table='clips' column='id'/>
       */}
      <Title level={5}>{t('scene:fields.clipId', 'Clip id')}</Title>
      <Text>{record?.clip_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('scene:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('scene:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
