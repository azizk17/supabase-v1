import { IResourceComponentsProps, useList, useTranslate } from '@pankod/refine-core';
import React, { useState } from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Station } from 'types';
import { Sheet } from '@/components/Sheet';
import ListCard from '@/components/ListCard';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import StationCreateForm from './create.form';
import Link from 'next/link';
import { useModalForm } from '@pankod/refine-react-hook-form';

export const StationList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();
  const [createModal, setCreateModal] = useState<boolean>(false)

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('station:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'name',
        Header: t('station:fields.name', 'Name'),
        accessor: 'name',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'description',
        Header: t('station:fields.description', 'Description'),
        accessor: 'description',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'thumb',
        Header: t('station:fields.thumb', 'Thumb'),
        accessor: 'thumb',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('station:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('station:fields.updatedAt', 'Updated at'),
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
  const {
    data,
    error,
    isLoading,
    refetch,
  } = useList<Station>({
    resource: 'stations',
    metaData: {
      select: "name, id, description",
    },
    config: {
      // sort: [{ field: 'created_at', order: 'asc' }],
    },

  });

  const createModalFormReturnValues = useModalForm({
    refineCoreProps: { action: "create" },
    modalProps: {
      autoResetForm: true
    }
    
  });
  const {
    modal: { show: showCreateModal,  },
  } = createModalFormReturnValues;
  return (
    <Sheet
      canCreate={true}
      createButtonProps={
        {
          onClick: () => showCreateModal()

        }
      }
      pageHeaderProps={undefined}
      resource="stations"
      title={t('stations:title', 'Stations')} columns={undefined} loading={false}    >
      <StationCreateForm  {...createModalFormReturnValues} />
      <div className=' grid grid-cols-4 gap-5'>

        {data?.data.map((item) => (
          // <Link href={`stations/${item.id}`}>
            <div onClick={() => show('stations', item.id)} className="card hover:cursor-pointer hover:opacity-60 w-full bg-neutral shadow-xl">
              <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>{item.description}</p>
                {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div> */}
              </div>
            </div>
          // </Link>

        ))}
      </div>

      {/* <Table title={t('station:title', 'stations')} columns={columns} /> */}
    </Sheet>
  );
};
