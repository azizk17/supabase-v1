import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { GeneratesMedia } from 'types';

export const GeneratesMediaList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const generatesIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: generates } = useMany<Generate>({
    resource: 'generates',
    ids: generatesIds
  });

  const sourcesIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: sources } = useMany<Source>({
    resource: 'sources',
    ids: sourcesIds
  });

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'generate_id',
        Header: t('generatesMedia:fields.generateId', 'Generate id'),
        accessor: 'generate_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'media_id',
        Header: t('generatesMedia:fields.mediaId', 'Media id'),
        accessor: 'media_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'created_at',
        Header: t('generatesMedia:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('generatesMedia:fields.updatedAt', 'Updated at'),
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
      resource="generatesMedia"
    >
      <Table
        title={t('generatesMedia:title', 'generatesMedia')}
        columns={columns}
      />
    </Listing>
  );
};
