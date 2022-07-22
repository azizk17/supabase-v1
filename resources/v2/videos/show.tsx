import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Video } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const VideoShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Video>({
    metaData: {
      fields: [
        'id',
        'title',
        'description',
        'channel_id',
        'chapters',
        'metadata',
        'status',
        'text_tracks_file_url',
        'publishing_at',
        'thumbs',
        'url',
        'updated_at',
        'created_at'
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
      <Title level={5}>{t('video:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property title
       * @type string
       */}
      <Title level={5}>{t('video:fields.title', 'Title')}</Title>
      <Text>{record?.title}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property description
       * @type string
       */}
      <Title level={5}>{t('video:fields.description', 'Description')}</Title>
      <Text>{record?.description}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property channel_id
       * @type string
       */}
      <Title level={5}>{t('video:fields.channelId', 'Channel id')}</Title>
      <Text>{record?.channel_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property chapters
       * @type string
       */}
      <Title level={5}>{t('video:fields.chapters', 'Chapters')}</Title>
      <Text>{record?.chapters}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property metadata
       * @type string
       */}
      <Title level={5}>{t('video:fields.metadata', 'Metadata')}</Title>
      <Text>{record?.metadata}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property status
       * @type Enumvideostatus
       */}
      <Title level={5}>{t('video:fields.status', 'Status')}</Title>
      <Text>{record?.status}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property text_tracks_file_url
       * @type string
       */}
      <Title level={5}>
        {t('video:fields.textTracksFileUrl', 'Text tracks file url')}
      </Title>
      <Text>{record?.text_tracks_file_url}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property publishing_at
       * @type Date
       */}
      <Title level={5}>{t('video:fields.publishingAt', 'Publishing at')}</Title>
      <DateField format="LLL" value={record?.publishing_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property thumbs
       * @type string
       */}
      <Title level={5}>{t('video:fields.thumbs', 'Thumbs')}</Title>
      <Text>{record?.thumbs}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property url
       * @type string
       */}
      <Title level={5}>{t('video:fields.url', 'Url')}</Title>
      <Text>{record?.url}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('video:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('video:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
