import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React, { useState } from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Platform } from 'types';
import { Sheet } from '@/components/Sheet';
import { Button } from '@/components/ui2';
import Drawer from '@/components/Drawer'

export const PlatformList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'name',
        Header: t('platform:fields.name', 'Name'),
        accessor: 'name',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'label',
        Header: t('platform:fields.label', 'Label'),
        accessor: 'label',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'status',
        Header: t('platform:fields.status', 'Status'),
        accessor: 'status',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'url',
        Header: t('platform:fields.url', 'Url'),
        accessor: 'url',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },

      // {
      //   id: 'action',
      //   Header: 'Action',
      //   accessor: 'id',
      //   Cell: ({ value }) => (
      //     <ColumnActions
      //       label={<FiMoreVertical />}
      //       items={[
      //         {
      //           label: t('actions.show', 'Show'),
      //           icon: <FiEye />,
      //           onClick: () => show('definition.__resource', value)
      //         },
      //         {
      //           label: t('actions.edit', 'Edit'),
      //           icon: <FiEdit />,
      //           onClick: () => edit('definition.__resource', value)
      //         },
      //         {
      //           label: t('actions.delete', 'Delete'),
      //           icon: <FiTrash2 />,
      //           onClick: () =>
      //             mutate({ id: value, resource: 'definition.__resource' })
      //         }
      //       ]}
      //     ></ColumnActions>
      //   )
      // }
    ],
    []
  );

  const [drawer, setDrawer] = useState<boolean>(false);
  return (
    <Sheet
      canCreate={true}
      createButtonProps={undefined}
      pageHeaderProps={undefined}
      resource="platforms"
      title={t('platform:title', 'platforms')}
    >
      <div>

      <Button onClick={() => setDrawer(!drawer)} >
        Open
      </Button>
      <Drawer full isOpen={drawer} id={''} dir={"rtl"} setIsOpen={setDrawer}>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea inventore quibusdam illum, molestiae quod vero nam expedita. Modi quos a officia soluta commodi sunt iure excepturi asperiores ipsum, architecto laborum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea inventore quibusdam illum, molestiae quod vero nam expedita. Modi quos a officia soluta commodi sunt iure excepturi asperiores ipsum, architecto laborum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea inventore quibusdam illum, molestiae quod vero nam expedita. Modi quos a officia soluta commodi sunt iure excepturi asperiores ipsum, architecto laborum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea inventore quibusdam illum, molestiae quod vero nam expedita. Modi quos a officia soluta commodi sunt iure excepturi asperiores ipsum, architecto laborum!
        </div>
        </Drawer>

      <Table title={t('platform:title', 'platforms')} columns={columns} />
      </div>
    </Sheet>
  );
};
