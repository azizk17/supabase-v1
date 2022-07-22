import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Playlist } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const PlaylistShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Playlist>({
    metaData: {
      fields: [
        'id',
        'name',
        'channel_id',
        'description',
        'thumb',
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
      <Title level={5}>{t('playlist:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property name
       * @type string
       */}
      <Title level={5}>{t('playlist:fields.name', 'Name')}</Title>
      <Text>{record?.name}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property channel_id
       * @type string          * Note:This is a Foreign Key to `channels.id`.<fk table='channels' column='id'/>
       */}
      <Title level={5}>{t('playlist:fields.channelId', 'Channel id')}</Title>
      <Text>{record?.channel_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property description
       * @type string
       */}
      <Title level={5}>{t('playlist:fields.description', 'Description')}</Title>
      <Text>{record?.description}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property thumb
       * @type string
       */}
      <Title level={5}>{t('playlist:fields.thumb', 'Thumb')}</Title>
      <Text>{record?.thumb}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('playlist:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('playlist:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
