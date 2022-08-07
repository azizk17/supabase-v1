import React, { FC } from 'react'

import {
    useTable,
    Column,
    HeaderGroup,
    Cell,
    UseTableColumnProps,
    UseTableRowProps,
    usePagination,
    useSortBy,
    useFilters,
} from "@pankod/refine-react-table";

import { Icon } from '@iconify/react';
import caretDoubleLeftBold from '@iconify/icons-ph/caret-double-left-bold';
import caretLeftBold from '@iconify/icons-ph/caret-left-bold';

import caretDoubleRightBold from '@iconify/icons-ph/caret-double-right-bold';
import caretRightBold from '@iconify/icons-ph/caret-right-bold';



type AppTableProps = {
    columns: Array<Column>,
    resourceType: any

}
export interface IFilter {
    id: string;
    value: string;
}
const AppTable: FC<AppTableProps> = ({ columns, resourceType }) => {
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
        state: { pageIndex, pageSize, filters },
    } = useTable<typeof resourceType>({ columns }, useFilters, useSortBy, usePagination);
    return (
        <div className="container mx-auto pb-4">
            <div className="mb-3 mt-1 flex items-center justify-between">
                <div>
                    <label className="mr-1" htmlFor="title">
                        Title:
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="rounded border border-gray-200 p-1 text-gray-700"
                        placeholder="Filter by title"
                        value={
                            filters.find((filter: IFilter) => filter.id === "title")
                                ?.value
                        }
                        onChange={(event) =>
                            setFilter("title", event.target.value)
                        }
                    />
                </div>
            </div>

            <table
                className="min-w-full table-fixed divide-y divide-gray-200 border"
                {...getTableProps()}
            >
                <thead className="bg-gray-100">
                    {headerGroups.map((headerGroup: HeaderGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: UseTableColumnProps) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps(),
                                    )}
                                    className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 "
                                >
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? " 🔽"
                                                : " 🔼"
                                            : ""}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody
                    {...getTableBodyProps()}
                    className="divide-y divide-gray-200 bg-white"
                >
                    {page.map((row: UseTableRowProps,) => {
                        prepareRow(row);
                        return (
                            <tr
                                {...row.getRowProps()}
                                className="transition hover:bg-gray-100"
                            >
                                {row.cells.map((cell: Cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="whitespace-nowrap py-2 px-6 text-sm font-medium text-gray-900"
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="mt-2 flex items-center justify-end gap-4">
                <div className="flex gap-1">
                    <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                        className="flex items-center justify-between gap-1 rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white disabled:bg-gray-200 hover:disabled:text-black"
                    >
                        <Icon icon={caretDoubleLeftBold} />
                    </button>
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className="flex items-center justify-between gap-1 rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white disabled:bg-gray-200 hover:disabled:text-black"
                    >
                        <Icon icon={caretLeftBold} />
                    </button>
                    <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className="flex items-center justify-between gap-1 rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white disabled:bg-gray-200 hover:disabled:text-black"
                    >
                        <Icon icon={caretRightBold} />
                    </button>
                    <button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                        className="flex items-center justify-between gap-1 rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white disabled:bg-gray-200 hover:disabled:text-black"
                    >
                        <Icon icon={caretDoubleRightBold} />
                    </button>
                </div>
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                <span>
                    Go to page:
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            gotoPage(page);
                        }}
                        className="w-12 rounded border border-gray-200 p-1 text-gray-700"
                    />
                </span>
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                    className="rounded border border-gray-200 p-1 text-gray-700"
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default AppTable