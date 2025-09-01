import { useEffect, useState } from 'react';
import { type Table as ReactTable } from '@tanstack/react-table';
import { PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
  FaPause,
  FaPlay,
} from 'react-icons/fa';

type PaginationMode = 'manual' | 'auto';
interface PaginationControllerProps<TData> {
  table: ReactTable<TData>;
}

function PaginationController<TData>({
  table,
}: PaginationControllerProps<TData>) {
  const [pageSize, setPageSize] = useState(
    table.getState().pagination.pageSize
  );
  const [paginationMode, setPaginationMode] =
    useState<PaginationMode>('manual');

  const [countdown, setCountdown] = useState(20);

  const totalPages = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;
  const totalItems = table.getFilteredRowModel().rows.length;
  const startIndex = totalItems > 0 ? currentPage * pageSize + 1 : 0;
  const endIndex = Math.min((currentPage + 1) * pageSize, totalItems);

  const handlePageSizeChange = (value: string) => {
    const size = parseInt(value);
    setPageSize(size);
    table.setPageSize(size);
  };

  // auto pagination every 15 seconds
  useEffect(() => {
    if (paginationMode !== 'auto') {
      setCountdown(20);
      return;
    }
    setCountdown(20);
    if (paginationMode !== 'auto') return;
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          const currentPageIndex = table.getState().pagination.pageIndex;
          const pageCount = table.getPageCount();
          if (pageCount > 0) {
            if (currentPageIndex < pageCount - 1) {
              table.nextPage();
            } else {
              table.setPageIndex(0);
            }
          }
          return 20;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [paginationMode, table]);

  // Helper to determine disabled state for Previous/Next
  const isPreviousDisabled = currentPage === 0;
  const isNextDisabled = currentPage === totalPages - 1;

  // controller between manual and auto pagination
  const isControllerDisabled = paginationMode === 'auto';

  const togglePaginationMode = () => {
    if (paginationMode === 'manual') {
      setPaginationMode('auto');
    } else {
      setPaginationMode('manual');
    }
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 py-4 w-full overflow-x-auto">
      <div className="text-sm text-gray-600">
        {totalItems > 0
          ? `${startIndex}-${endIndex} of ${totalItems} row(s)`
          : '0 of 0 row(s)'}
      </div>
      <div className="flex items-center gap-4">
        <Select
          value={pageSize.toString()}
          onValueChange={handlePageSizeChange}
          disabled={isControllerDisabled}
        >
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Rows per page" />
          </SelectTrigger>
          <SelectContent>
            {[5, 10].map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm whitespace-nowrap">
          Page {currentPage + 1} of {totalPages}
        </span>
        <div className="flex items-center gap-1">
          <Button
            onClick={() => table.setPageIndex(0)}
            size="sm"
            variant="outline"
            disabled={isControllerDisabled || currentPage === 0}
            className="transition-colors duration-200"
            aria-label="Go to first page"
          >
            <FaAngleDoubleLeft />
          </Button>
          <div
            className={
              isControllerDisabled || isPreviousDisabled
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
            onClick={() =>
              !isControllerDisabled &&
              !isPreviousDisabled &&
              table.previousPage()
            }
            aria-disabled={isPreviousDisabled}
            aria-label="Go to previous page"
          >
            <PaginationPrevious>
              <FaAngleLeft />
            </PaginationPrevious>
          </div>
          <div
            className={
              isControllerDisabled || isNextDisabled
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
            onClick={() =>
              !isControllerDisabled && !isNextDisabled && table.nextPage()
            }
            aria-disabled={isNextDisabled}
            aria-label="Go to next page"
          >
            <PaginationNext>
              <FaAngleRight />
            </PaginationNext>
          </div>
          <Button
            onClick={() => table.setPageIndex(totalPages - 1)}
            size="sm"
            variant="outline"
            disabled={isControllerDisabled || currentPage === totalPages - 1}
            className="transition-colors duration-200"
            aria-label="Go to last page"
          >
            <FaAngleDoubleRight />
          </Button>
        </div>
        <Button
          onClick={togglePaginationMode}
          size="sm"
          variant="ghost"
          aria-label="Toggle pagination mode"
          title={`Pagination mode: ${paginationMode}`}
        >
          {paginationMode === 'manual' && <FaPlay className="text-green-600" />}
          {paginationMode === 'auto' && <FaPause className="text-yellow-600" />}
        </Button>
        {paginationMode === 'auto' && (
          <span className="text-xs text-gray-500">
            Next page in {countdown}s
          </span>
        )}
      </div>
    </div>
  );
}

export default PaginationController;
