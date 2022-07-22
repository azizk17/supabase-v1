import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight
} from 'react-icons/fi';

interface PaginationProps {
  pageIndex: number;
  pageSize: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageOptions: Array<number>;
  pageCount: number;
  gotoPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (pageSize: number) => void;
  total: number;
}
export const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  pageSize,
  //   canPreviousPage,
  //   canNextPage,
  //   pageOptions,
  gotoPage,
  nextPage,
  previousPage,
  total
  //   setPageSize
}) => {
  const pageCount = Math.ceil(total / pageSize);
  const canPreviousPage = pageIndex > 0;
  const canNextPage = pageIndex < pageCount - 1;
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
      <div className="hidden sm:visible sm:flex items-center  max-w-sm  space-x-1 rtl:space-x-reverse">
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
        {/* <strong className=" flex space-x-1 rtl:space-x-reverse">
          <span>of</span>
          <span>{pageOptions.length}</span>
        </strong> */}
      </div>

      {/* <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
        className="hidden sm:visible sm:flex select select-sm select-bordered  max-w-xs"
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select> */}
    </div>
  );
};
