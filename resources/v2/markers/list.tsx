import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Marker } from 'types';

export const MarkerList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('marker:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'end_at',
        Header: t('marker:fields.endAt', 'End at'),
        accessor: 'end_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'start_at',
        Header: t('marker:fields.startAt', 'Start at'),
        accessor: 'start_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'track_id',
        Header: t('marker:fields.trackId', 'Track id'),
        accessor: 'track_id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('marker:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('marker:fields.updatedAt', 'Updated at'),
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
      resource="markers"
    >
      <Table title={t('marker:title', 'markers')} columns={columns} />
    </Listing>
  );
};
