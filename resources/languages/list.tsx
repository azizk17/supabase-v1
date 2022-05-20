import React from 'react';
import {
  useTable,
  Column,
  usePagination,
  useSortBy,
  useFilters
} from '@pankod/refine-react-table';
import { useNavigation, useDelete } from '@pankod/refine-core';

import { Language } from 'types';

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
export const LanguageList: React.FC = () => {
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
        id: 'code',
        Header: 'Code',
        accessor: 'code',
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
        accessor: 'enabled'
      },
      {
        id: 'updated_at',
        Header: 'Updated_at',
        accessor: 'updated_at'
      },
      {
        id: 'action',
        Header: 'Action',
        accessor: 'id',
        Cell: ({ value }) => (
          <div className="flex gap-2">
            <button
              className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
              onClick={() => edit('languages', value)}
            >
              <FiEdit />
            </button>
            <button
              className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
              onClick={() => show('languages', value)}
            >
              <FiEye />
            </button>
            <button
              className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-red-500 hover:text-white"
              onClick={() => mutate({ id: value, resource: 'languages' })}
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
  // } = useTable<Language>({ columns }, useFilters, useSortBy, usePagination);

  return (
    <Listing
      canCreate={undefined}
      title={undefined}
      createButtonProps={undefined}
      pageHeaderProps={undefined}
      resource="languages"
    >
      <Table columns={columns} />
    </Listing>
  );
};
