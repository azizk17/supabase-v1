import {
  Column,
  useFilters,
  usePagination,
  useSortBy,
  useTable
} from '@pankod/refine-react-table';
import React from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight
} from 'react-icons/fi';
import { Language } from 'types';

type TableProps = {
  columns: Array<Column>;
};
export const Table: React.FC<TableProps> = ({ columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setFilter,
    state: { pageIndex, pageSize, filters }
  } = useTable<Language>({ columns }, useFilters, useSortBy, usePagination);
  return (
    <div className="flex flex-col">
      <table className="table table-zebra border border-base-300 w-full">
        {/* <!-- head --> */}
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 "
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="transition hover:bg-gray-100"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="whitespace-nowrap py-2 px-6 text-sm font-medium text-gray-900"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className=" flex relative  w-full min-w-full">
        {TabelPaginnation({
          pageIndex,
          pageSize,
          canPreviousPage,
          canNextPage,
          pageOptions,
          pageCount,
          gotoPage,
          nextPage,
          previousPage,
          setPageSize
        })}
      </div>
    </div>
  );
};

const TabelPaginnation = ({
  pageIndex,
  pageSize,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize
}) => {
  return (
    <div className="mt-2 flex items-center justify-end gap-4 w-full">
      <div className="flex gap-1 w-full">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="btn btn-sm"
        >
          <FiChevronsLeft />
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="btn btn-sm"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="btn btn-sm"
        >
          <FiChevronRight />
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="btn btn-sm"
        >
          <FiChevronsRight />
        </button>
      </div>
      {/* <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span> */}
      <div className="flex items-center  max-w-sm  space-x-1 rtl:space-x-reverse">
        <strong>Page:</strong>
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          className=" w-14 input input-sm input-bordered"
        />
        <strong className=" flex space-x-1 rtl:space-x-reverse">
          <span>of</span>
          <span>{pageOptions.length}</span>
        </strong>
      </div>

      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
        className="select select-bordered  max-w-xs"
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
