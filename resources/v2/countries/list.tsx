import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Country } from 'types';

export const CountryList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('country:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'name',
        Header: t('country:fields.name', 'Name'),
        accessor: 'name',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'iso2',
        Header: t('country:fields.iso2', 'Iso2'),
        accessor: 'iso2',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'iso3',
        Header: t('country:fields.iso3', 'Iso3'),
        accessor: 'iso3',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'local_name',
        Header: t('country:fields.localName', 'Local name'),
        accessor: 'local_name',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'continent',
        Header: t('country:fields.continent', 'Continent'),
        accessor: 'continent',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'Enabled',
        Header: t('country:fields.Enabled', 'Enabled'),
        accessor: 'Enabled',
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
      resource="countries"
    >
      <Table title={t('country:title', 'countries')} columns={columns} />
    </Listing>
  );
};
