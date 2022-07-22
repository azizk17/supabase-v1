import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Generate } from 'types';

export const GenerateList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const templatesIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: templates } = useMany<Template>({
    resource: 'templates',
    ids: templatesIds
  });

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('generate:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'template_id',
        Header: t('generate:fields.templateId', 'Template id'),
        accessor: 'template_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'metadata',
        Header: t('generate:fields.metadata', 'Metadata'),
        accessor: 'metadata',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'status',
        Header: t('generate:fields.status', 'Status'),
        accessor: 'status',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'created_at',
        Header: t('generate:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('generate:fields.updatedAt', 'Updated at'),
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
      resource="generates"
    >
      <Table title={t('generate:title', 'generates')} columns={columns} />
    </Listing>
  );
};
