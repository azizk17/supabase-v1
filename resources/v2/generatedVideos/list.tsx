import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { GeneratedVideo } from 'types';

export const GeneratedVideoList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const channelsIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: channels } = useMany<Channel>({
    resource: 'channels',
    ids: channelsIds
  });

  const generatesIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: generates } = useMany<Generate>({
    resource: 'generates',
    ids: generatesIds
  });

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('generatedVideo:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'title',
        Header: t('generatedVideo:fields.title', 'Title'),
        accessor: 'title',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'description',
        Header: t('generatedVideo:fields.description', 'Description'),
        accessor: 'description',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'channel_id',
        Header: t('generatedVideo:fields.channelId', 'Channel id'),
        accessor: 'channel_id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'generate_id',
        Header: t('generatedVideo:fields.generateId', 'Generate id'),
        accessor: 'generate_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'metadata',
        Header: t('generatedVideo:fields.metadata', 'Metadata'),
        accessor: 'metadata',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'status',
        Header: t('generatedVideo:fields.status', 'Status'),
        accessor: 'status',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'text_tracks_file_url',
        Header: t(
          'generatedVideo:fields.textTracksFileUrl',
          'Text tracks file url'
        ),
        accessor: 'text_tracks_file_url',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'publishing_at',
        Header: t('generatedVideo:fields.publishingAt', 'Publishing at'),
        accessor: 'publishing_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'thumbs',
        Header: t('generatedVideo:fields.thumbs', 'Thumbs'),
        accessor: 'thumbs',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'url',
        Header: t('generatedVideo:fields.url', 'Url'),
        accessor: 'url',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('generatedVideo:fields.updatedAt', 'Updated at'),
        accessor: 'updated_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('generatedVideo:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },

      {
        id: 'action',
        Header: 'Action',
        accessor: 'id',
        Cell: ({ value }) => (
          <ColumnActions
            label={<FiMoreVertical />}
            items={[
              {
                label: t('actions.show', 'Show'),
                icon: <FiEye />,
                onClick: () => show('definition.__resource', value)
              },
              {
                label: t('actions.edit', 'Edit'),
                icon: <FiEdit />,
                onClick: () => edit('definition.__resource', value)
              },
              {
                label: t('actions.delete', 'Delete'),
                icon: <FiTrash2 />,
                onClick: () =>
                  mutate({ id: value, resource: 'definition.__resource' })
              }
            ]}
          ></ColumnActions>
        )
      }
    ],
    []
  );

  return (
    <Listing
      canCreate={undefined}
      createButtonProps={undefined}
      pageHeaderProps={undefined}
      resource="generatedVideos"
    >
      <Table
        title={t('generatedVideo:title', 'generatedVideos')}
        columns={columns}
      />
    </Listing>
  );
};
