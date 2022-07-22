import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Income } from 'types';

export const IncomeList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('income:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'amount',
        Header: t('income:fields.amount', 'Amount'),
        accessor: 'amount',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'channel_id',
        Header: t('income:fields.channelId', 'Channel id'),
        accessor: 'channel_id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'transaction_number',
        Header: t('income:fields.transactionNumber', 'Transaction number'),
        accessor: 'transaction_number',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('income:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('income:fields.updatedAt', 'Updated at'),
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
      resource="incomes"
    >
      <Table title={t('income:title', 'incomes')} columns={columns} />
    </Listing>
  );
};
