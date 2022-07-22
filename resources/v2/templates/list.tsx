import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Template } from 'types';

export const TemplateList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('template:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'key',
        Header: t('template:fields.key', 'Key'),
        accessor: 'key',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'name',
        Header: t('template:fields.name', 'Name'),
        accessor: 'name',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'description',
        Header: t('template:fields.description', 'Description'),
        accessor: 'description',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'thumb',
        Header: t('template:fields.thumb', 'Thumb'),
        accessor: 'thumb',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'metadata',
        Header: t('template:fields.metadata', 'Metadata'),
        accessor: 'metadata',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('template:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('template:fields.updatedAt', 'Updated at'),
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
      resource="templates"
    >
      <Table title={t('template:title', 'templates')} columns={columns} />
    </Listing>
  );
};
