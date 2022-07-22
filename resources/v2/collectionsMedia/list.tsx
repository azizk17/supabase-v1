import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { CollectionsMedia } from 'types';

export const CollectionsMediaList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const collectionsIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: collections } = useMany<Collection>({
    resource: 'collections',
    ids: collectionsIds
  });

  const sourcesIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  const { data: sources } = useMany<Source>({
    resource: 'sources',
    ids: sourcesIds
  });

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('collectionsMedia:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'collection_id',
        Header: t('collectionsMedia:fields.collectionId', 'Collection id'),
        accessor: 'collection_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'media_id',
        Header: t('collectionsMedia:fields.mediaId', 'Media id'),
        accessor: 'media_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'created_at',
        Header: t('collectionsMedia:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('collectionsMedia:fields.updatedAt', 'Updated at'),
        accessor: 'updated_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'deleted',
        Header: t('collectionsMedia:fields.deleted', 'Deleted'),
        accessor: 'deleted',
        Cell: ({ value }) => (value ? 'Yes' : 'No')
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
      resource="collectionsMedia"
    >
      <Table
        title={t('collectionsMedia:title', 'collectionsMedia')}
        columns={columns}
      />
    </Listing>
  );
};
