
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { patientData } from "./data/patient-data";

const PatientStatusTable = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={patientData} />
    </div>
  );
}

export default PatientStatusTable;