import type { ColumnDef } from "@tanstack/react-table"
import ActionDropdown from "./ActionDropdown"

// This type is used to define the shape of our data.
export type Patient = {
  id: string;
  name: string;
  status: string;
  color: string;
  message: string;
  // Add other fields as needed
};


export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "id",
    header: "Patient ID",
  },
  {
    accessorKey: "status",
    header: "Patient Status",
  },
  {
    accessorKey: "color",
    header: "Status Color",
    cell: ({ row }) => (
      <span
        style={{
          display: "inline-block",
          width: 60,
          height: 30,
          backgroundColor: row.original.color,
          border: "2px solid #ccc",
          opacity:  row.original.color === "#00C853" ? 0.5 : 1
        }}
        title={row.original.color}
      />
    ),
  }, 
  {
      accessorKey: "action",
      header: "",
      cell: () => (
        <ActionDropdown
          onUpdateInfo={() => {
            // TODO: handle update info
          }}
          onUpdateStatus={() => {
            // TODO: handle update status
          }}
          onViewDetails={() => {
            // TODO: handle view details
          }}
        />
      ),
    }
]