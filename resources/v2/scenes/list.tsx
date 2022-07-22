import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Scene } from 'types';

export const SceneList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const clipsIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: clips } = useMany<Clip>({
    resource: 'clips',
    ids: clipsIds
  });

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('scene:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'title',
        Header: t('scene:fields.title', 'Title'),
        accessor: 'title',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'clip_id',
        Header: t('scene:fields.clipId', 'Clip id'),
        accessor: 'clip_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'created_at',
        Header: t('scene:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('scene:fields.updatedAt', 'Updated at'),
        accessor: 'updated_at',
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
      resource="scenes"
    >
      <Table title={t('scene:title', 'scenes')} columns={columns} />
    </Listing>
  );
};
