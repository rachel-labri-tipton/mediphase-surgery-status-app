import  { useState } from 'react';
import { type Table as ReactTable } from '@tanstack/react-table';
import {
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
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
} from 'react-icons/fa';

// type PaginationMode = 'manual' | 'auto' | 'paused';
interface PaginationControllerProps<TData> {
  table: ReactTable<TData>;
}

function PaginationController<TData>({
  table,
}: PaginationControllerProps<TData>) {
  const [pageSize, setPageSize] = useState(
    table.getState().pagination.pageSize
  );

  const totalPages = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;
  const totalItems = table.getFilteredRowModel().rows.length;
  const startIndex = totalItems > 0 ? currentPage * pageSize + 1:0;
  const endIndex = Math.min((currentPage + 1) * pageSize, totalItems);

  const handlePageSizeChange = (value: string) => {
    const size = parseInt(value);
    setPageSize(size);
    table.setPageSize(size);
  };

  //TODO: Implement auto pagination mode


  // Helper to determine disabled state for Previous/Next
  const isPreviousDisabled = currentPage === 0;
  const isNextDisabled = currentPage === totalPages - 1;

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <div className="text-sm text-gray-600">
        {totalItems > 0
          ? `${startIndex}-${endIndex} of ${totalItems} row(s)`
          : '0 of 0 row(s)'}
      </div>
      <div className="flex items-center gap-4">
        <Select
          value={pageSize.toString()}
          onValueChange={handlePageSizeChange}
        >
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Rows per page" />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 20, 50].map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm">
          Page {currentPage + 1} of {totalPages}
        </span>
        <div className="flex items-center gap-1">
          <Button
            onClick={() => table.setPageIndex(0)}
            size="sm"
            variant="outline"
            disabled={currentPage === 0}
            className="transition-colors duration-200"
            aria-label="Go to first page"
          >
            <FaAngleDoubleLeft />
          </Button>
          <div
            className={
              isPreviousDisabled
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
            onClick={() => !isPreviousDisabled && table.previousPage()}
            aria-disabled={isPreviousDisabled}
            aria-label="Go to previous page"
          >
            <PaginationPrevious>
              <FaAngleLeft />
            </PaginationPrevious>
          </div>
          <div
            className={
              isNextDisabled
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
            onClick={() => !isNextDisabled && table.nextPage()}
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
            disabled={currentPage === totalPages - 1}
            className="transition-colors duration-200"
            aria-label="Go to last page"
          >
            <FaAngleDoubleRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PaginationController;
