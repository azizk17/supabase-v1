import { IResourceComponentsProps, useTranslate } from "@pankod/refine-core";
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import {
  Column,
} from '@pankod/refine-react-table';
import {
  FiEdit,
  FiEye,
  FiTrash2,
  FiMoreVertical
} from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Setting } from "type3";

export const SettingList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();
   
 
  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t("setting:fields.id", "Id"),
        accessor: 'id',
                    Cell: ({ value }) => (value ? JSON.stringify(value) : '')
            },
      {
        id: 'name',
        Header: t("setting:fields.name", "Name"),
        accessor: 'name',
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
            onClick: () => mutate({ id: value, resource: 'definition.__resource' })
            }
        ]}
        >
        </ColumnActions>
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
      resource="settings"
    >
      <Table title={t('setting:title', 'settings')} columns={columns} />
    </Listing>
  );
};
