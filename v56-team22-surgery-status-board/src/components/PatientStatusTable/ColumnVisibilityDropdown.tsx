import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import type { Table } from "@tanstack/react-table";

type ColumnVisibilityDropdownProps<TData> = {
  table: Table<TData>; // You can use the correct type from TanStack if desired
};

const ColumnVisibilityDropdown = <TData,>({ table }: ColumnVisibilityDropdownProps<TData>) => {
  const columns = table.getAllColumns().filter((column) => column.getCanHide());
  const allVisible = columns.every((col) => col.getIsVisible());

  const handleSelectAll = () => {
    columns.forEach((col) => col.toggleVisibility(true));
  };

  const handleUnselectAll = () => {
    columns.forEach((col) => col.toggleVisibility(false));
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Columns
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        <div className="flex flex-col gap-1 px-2 py-1">
          <Button
            size="sm"
            variant="ghost"
            className="w-full mb-1"
            onClick={allVisible ? handleUnselectAll : handleSelectAll}
            >
            {allVisible ? "Unselect All" : "Select All"}
          </Button>
        </div>
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}


export default ColumnVisibilityDropdown;