import  { useState } from 'react';
import { type Table as ReactTable } from '@tanstack/react-table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
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
import { Button } from '../ui/button';
import { getPageNumbers } from '@/lib/paginationUtils';

type PaginationMode = 'manual' | 'auto' | 'paused';

interface PaginationControllerProps<TData> {
  table: ReactTable<TData>;
}

function PaginationController<TData>({
  table,
}: PaginationControllerProps<TData>) {
  const [paginationMode, setPaginationMode] =
    useState<PaginationMode>('manual');
  const [pageSize, setPageSize] = useState(
    table.getState().pagination.pageSize
  );

  const totalPages = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;
  const totalItems = table.getRowModel().rows.length;
  const startIndex = currentPage * pageSize + 1;
  const endIndex = Math.min((currentPage + 1) * pageSize, totalItems);

  //TODO: Implement auto-pagination logic

  const toggleMode = () => {
    setPaginationMode((prev) =>
      prev === 'manual' ? 'auto' : prev === 'auto' ? 'paused' : 'manual'
    );
  };
  const handlePageSizeChange = (value: string) => {
    const size = parseInt(value);
    setPageSize(size);
    table.setPageSize(size);
  };
  const isPreviousDisabled = currentPage === 0 || paginationMode === 'auto';
  const isNextDisabled =
    currentPage === totalPages - 1 || paginationMode === 'auto';

  return (
    <div className="flex flex-col items-center gap-4 py-4 transition-all duration-200">
      <div className="flex items-center gap-4">
        <Button
          onClick={toggleMode}
          size="sm"
          variant="outline"
          aria-label={`Switch to ${paginationMode === 'manual' ? 'auto' : paginationMode === 'auto' ? 'paused' : 'manual'} mode`}
        >
          Mode: {paginationMode.toUpperCase()}
        </Button>
        {paginationMode === 'auto' && (
          <span className="text-xs text-gray-500 animate-pulse">
            Auto cycling every 20s
          </span>
        )}
        {paginationMode === 'paused' && (
          <span className="text-xs text-yellow-600">Paused</span>
        )}
        <Select
          value={pageSize.toString()}
          onValueChange={handlePageSizeChange}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Items per page" />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 20, 50].map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size} per page
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="text-sm text-gray-600">
        Showing {startIndex}-{endIndex} of {totalItems} items
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              onClick={() => table.setPageIndex(0)}
              disabled={currentPage === 0 || paginationMode === 'auto'}
              size="sm"
              variant="outline"
              aria-label="Go to first page"
            >
              First
            </Button>
          </PaginationItem>
          <PaginationItem>
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
              <PaginationPrevious />
            </div>
          </PaginationItem>

          {getPageNumbers(currentPage, totalPages).map((page, i) => (
            <PaginationItem key={i}>
              {typeof page === 'string' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => table.setPageIndex(page)}
                  isActive={page === currentPage}
                  aria-disabled={paginationMode === 'auto'}
                  className={
                    paginationMode === 'auto'
                      ? 'pointer-events-none opacity-50'
                      : 'hover:bg-muted/80 transition-colors duration-200'
                  }
                  aria-label={`Go to page ${page + 1}`}
                >
                  {page + 1}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
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
              <PaginationNext />
            </div>
          </PaginationItem>
          <PaginationItem>
            <Button
              onClick={() => table.setPageIndex(totalPages - 1)}
              size="sm"
              variant="outline"
              disabled={
                currentPage === totalPages - 1 || paginationMode === 'auto'
              }
              className="transition-colors duration-200"
              aria-label="Go to last page"
            >
              Last
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PaginationController;
