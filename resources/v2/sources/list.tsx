import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Source } from 'types';

export const SourceList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const platformsIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: platforms } = useMany<Platform>({
    resource: 'platforms',
    ids: platformsIds
  });

  const credentialsIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: credentials } = useMany<Credential>({
    resource: 'credentials',
    ids: credentialsIds
  });

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('source:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'username',
        Header: t('source:fields.username', 'Username'),
        accessor: 'username',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'disabled',
        Header: t('source:fields.disabled', 'Disabled'),
        accessor: 'disabled',
        Cell: ({ value }) => (value ? 'Yes' : 'No')
      },
      {
        id: 'screenshots',
        Header: t('source:fields.screenshots', 'Screenshots'),
        accessor: 'screenshots',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'status',
        Header: t('source:fields.status', 'Status'),
        accessor: 'status',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'thumb',
        Header: t('source:fields.thumb', 'Thumb'),
        accessor: 'thumb',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'url',
        Header: t('source:fields.url', 'Url'),
        accessor: 'url',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'platform_name',
        Header: t('source:fields.platformName', 'Platform name'),
        accessor: 'platform_name',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'credential_id',
        Header: t('source:fields.credentialId', 'Credential id'),
        accessor: 'credential_id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('source:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('source:fields.updatedAt', 'Updated at'),
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
      resource="sources"
    >
      <Table title={t('source:title', 'sources')} columns={columns} />
    </Listing>
  );
};
