import { getColumns } from "./columns";
import { DataTable } from "./data-table";
import { patientData } from "./data/patient-data-updated";
import type { Role } from "@/constant/nav";




type PatientStatusTableProps = {
  role: Role;
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const PatientStatusTable = ({ role }: PatientStatusTableProps) => {
  const columns = getColumns(role);
  // Filter out dismissed patients
 const filteredPatientData = patientData.filter(patient => patient.status !== 'Dismissal');

  return (

    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold font-jura mb-6 text-center text-primary pt-5">Welcome, {capitalize(role)} User.</h1>
   
        <DataTable columns={columns} data={filteredPatientData} role={role}/>
 
    </div>
  );
}

export default PatientStatusTable;