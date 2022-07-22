import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Video } from 'types';

export const VideoList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('video:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'title',
        Header: t('video:fields.title', 'Title'),
        accessor: 'title',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'description',
        Header: t('video:fields.description', 'Description'),
        accessor: 'description',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'channel_id',
        Header: t('video:fields.channelId', 'Channel id'),
        accessor: 'channel_id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'chapters',
        Header: t('video:fields.chapters', 'Chapters'),
        accessor: 'chapters',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'metadata',
        Header: t('video:fields.metadata', 'Metadata'),
        accessor: 'metadata',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'status',
        Header: t('video:fields.status', 'Status'),
        accessor: 'status',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'text_tracks_file_url',
        Header: t('video:fields.textTracksFileUrl', 'Text tracks file url'),
        accessor: 'text_tracks_file_url',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'publishing_at',
        Header: t('video:fields.publishingAt', 'Publishing at'),
        accessor: 'publishing_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'thumbs',
        Header: t('video:fields.thumbs', 'Thumbs'),
        accessor: 'thumbs',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'url',
        Header: t('video:fields.url', 'Url'),
        accessor: 'url',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('video:fields.updatedAt', 'Updated at'),
        accessor: 'updated_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('video:fields.createdAt', 'Created at'),
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
      resource="videos"
    >
      <Table title={t('video:title', 'videos')} columns={columns} />
    </Listing>
  );
};
