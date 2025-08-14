import type { ColumnDef } from "@tanstack/react-table"
import type { Patient } from "./data/patient-data"
import type { TableRole } from "@/constant/patient-table";
import { tableFeaturesByRole } from "@/constant/patient-table";
import ActionDropdown from "./ActionDropdown"

// generate table columns based on user role
export function getColumns(role: TableRole): ColumnDef<Patient>[] {
  const featuresByRole = tableFeaturesByRole[role];
  const columns: ColumnDef<Patient>[] = [
    {
      accessorKey: "id",
      header: "Patient ID",
    },
    {
      accessorKey: "status",
      header: "Patient Status",
      cell: ({ row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width:  140,
            height: 48,
            backgroundColor: row.original.color,
            border: "2px solid #ccc",
            color: "black",
            fontWeight: "bold",
            fontSize: "1.1rem",
            borderRadius: "12px",
          }}
          title={row.original.color}
        >
          {row.original.status}
        </div>
      ),
    },
  ];

  if (role === "admin" || role === "surgical team") {
    columns.push({
      accessorKey: "action",
      header: "",
      cell: ({row}) => (
        <ActionDropdown
          patientId={row.original.id}
          onUpdateInfo={featuresByRole.includes("updateInfo") ? () => {/* ... */} : undefined}
          onUpdateStatus={featuresByRole.includes("updateStatus") ? () => {/* ... */} : undefined}
          onViewDetails={featuresByRole.includes("viewPatientDetails") ? () => {/* ... */} : undefined}
        />
      ),
    });
  }

  return columns;
}