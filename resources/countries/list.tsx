import React, { useEffect, useReducer, useState } from 'react';
import {
  useTable,
  Column,
  usePagination,
  useSortBy,
  useFilters
} from '@pankod/refine-react-table';
import { useNavigation, useDelete } from '@pankod/refine-core';
import { Country } from 'types';
import { Sheet } from '@/components/index';
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiEdit,
  FiEye,
  FiTrash2,
  FiPlusSquare,
  FiMoreVertical
} from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';
import Drawer from '@/components/ui/Drawer';
export const CountryList: React.FC = () => {
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: 'ID',
        accessor: 'id'
      },
      {
        id: 'iso3',
        Header: 'Iso3',
        accessor: 'iso3',
        filter: 'contains'
      },
      {
        id: 'name',
        Header: 'Name',
        accessor: 'name'
      },
      {
        id: 'enabled',
        Header: 'Enabled',
        accessor: 'enabled',
        Cell: ({ value }) => (value ? 'Yes' : 'No')
      },

      {
        id: 'action',
        Header: 'Action',
        accessor: 'id',
        Cell: ({ value }) => (
          <ColumnActions label={<FiMoreVertical />}>
            <ul className=" flex  items-center gap-2   p-2 shadow bg-base-100 rounded-box w-32">
              <li>
                <button
                  className="btn btn-sm "
                  onClick={() => edit('countries', value)}
                >
                  <FiEdit />
                </button>
              </li>
              <li>
                <button
                  className="btn btn-sm "
                  onClick={() => show('countries', value)}
                >
                  <FiEye />
                </button>
              </li>
              <li>
                <button
                  className=" btn btn-sm btn-error"
                  onClick={() => mutate({ id: value, resource: 'countries' })}
                >
                  <FiTrash2 />
                </button>
              </li>
            </ul>
          </ColumnActions>
        )
      }
    ],
    []
  );

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   prepareRow,
  //   page,
  //   canPreviousPage,
  //   canNextPage,
  //   pageOptions,
  //   pageCount,
  //   gotoPage,
  //   nextPage,
  //   previousPage,
  //   setPageSize,
  //   setFilter,
  //   state: { pageIndex, pageSize, filters }
  // } = useTable<Country>({ columns }, useFilters, useSortBy, usePagination);

  return (
    <Sheet
      canCreate={undefined}
      title={"Countries"}
      createButtonProps={undefined}
      pageHeaderProps={undefined}
      resource="countries"
      columns={undefined}
    >
      <Table title="Countries" columns={columns} />
      {/* <Drawer open={edit} direction={'left'}>
        <div className="flex flex-col">
          <p className=" text-3xl ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            beatae culpa nobis optio ipsam quae maxime eius? Aut blanditiis sed
            ab expedita cupiditate, vitae ratione aliquid veritatis voluptas,
            enim culpa.
          </p>
        </div>
      </Drawer> */}
    </Sheet>
  );
};
