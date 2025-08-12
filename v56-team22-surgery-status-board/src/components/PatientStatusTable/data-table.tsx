import React from 'react';
import {
  type ColumnDef,
  type ColumnFiltersState,
  type VisibilityState,
  getFilteredRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '../ui/input';
import PaginationController from './PaginationController';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  role: string; // Assuming role is a string, adjust as necessary
}

export function DataTable<TData, TValue>({
  columns,
  data,
  role,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-4/5 md:w-2/3 mx-auto rounded-md border px-2 md:px-6">
        <div className="flex items-center py-4">
          {(role === 'admin' || role === 'surgical team') && (
            <>
              <Input
                placeholder="Search Patient ID..."
                value={
                  (table.getColumn('id')?.getFilterValue() as string) ?? ''
                }
                onChange={(event) =>
                  table.getColumn('id')?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
              />
              {/* commenting out for the moment since not part of core features */}
              {/* <ColumnVisibilityDropdown table={table} /> */}
            </>
          )}
        </div>
        <Table className="my-8">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="bg-grey-100 text-black text-left font-bold px-2 py-2"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-left px-4 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <PaginationController table={table} />
      </div>
    </div>
  );
}
