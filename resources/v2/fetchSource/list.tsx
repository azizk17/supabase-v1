import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { FetchSource } from 'types';

export const FetchSourceList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const sourcesIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: sources } = useMany<Source>({
    resource: 'sources',
    ids: sourcesIds
  });

  const fetchsIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: fetchs } = useMany<Fetch>({
    resource: 'fetchs',
    ids: fetchsIds
  });

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('fetchSource:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'title',
        Header: t('fetchSource:fields.title', 'Title'),
        accessor: 'title',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'dexcription',
        Header: t('fetchSource:fields.dexcription', 'Dexcription'),
        accessor: 'dexcription',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'output',
        Header: t('fetchSource:fields.output', 'Output'),
        accessor: 'output',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'status',
        Header: t('fetchSource:fields.status', 'Status'),
        accessor: 'status',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'source_id',
        Header: t('fetchSource:fields.sourceId', 'Source id'),
        accessor: 'source_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'fetch_id',
        Header: t('fetchSource:fields.fetchId', 'Fetch id'),
        accessor: 'fetch_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'duration',
        Header: t('fetchSource:fields.duration', 'Duration'),
        accessor: 'duration',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'resultes',
        Header: t('fetchSource:fields.resultes', 'Resultes'),
        accessor: 'resultes',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('fetchSource:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('fetchSource:fields.updatedAt', 'Updated at'),
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
      resource="fetchSource"
    >
      <Table title={t('fetchSource:title', 'fetchSource')} columns={columns} />
    </Listing>
  );
};
