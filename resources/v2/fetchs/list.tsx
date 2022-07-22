import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Fetch } from 'types';

export const FetchList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('fetch:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'title',
        Header: t('fetch:fields.title', 'Title'),
        accessor: 'title',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'description',
        Header: t('fetch:fields.description', 'Description'),
        accessor: 'description',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'output',
        Header: t('fetch:fields.output', 'Output'),
        accessor: 'output',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'status',
        Header: t('fetch:fields.status', 'Status'),
        accessor: 'status',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'duration',
        Header: t('fetch:fields.duration', 'Duration'),
        accessor: 'duration',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('fetch:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('fetch:fields.updatedAt', 'Updated at'),
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
      resource="fetchs"
    >
      <Table title={t('fetch:title', 'fetchs')} columns={columns} />
    </Listing>
  );
};
