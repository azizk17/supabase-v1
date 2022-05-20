import React from 'react';
import {
  useTable,
  Column,
  usePagination,
  useSortBy,
  useFilters
} from '@pankod/refine-react-table';
import { useNavigation, useDelete } from '@pankod/refine-core';

import { Country } from 'types';

import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiEdit,
  FiEye,
  FiTrash2,
  FiPlusSquare
} from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { Table } from '@/components/crud/Table';
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
          <div className="flex gap-2">
            <button
              className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
              onClick={() => edit('Countrys', value)}
            >
              <FiEdit />
            </button>
            <button
              className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
              onClick={() => show('Countrys', value)}
            >
              <FiEye />
            </button>
            <button
              className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-red-500 hover:text-white"
              onClick={() => mutate({ id: value, resource: 'Countrys' })}
            >
              <FiTrash2 />
            </button>
          </div>
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
    <Listing
      canCreate={undefined}
      title={undefined}
      createButtonProps={undefined}
      pageHeaderProps={undefined}
      resource="countries"
    >
      <Table columns={columns} />
    </Listing>
  );
};
