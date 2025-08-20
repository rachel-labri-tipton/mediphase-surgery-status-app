import { getColumns } from "./columns";
import { DataTable } from "./data-table";
import { patientData } from "./data/patient-data-updated";
import type { Role } from "@/constant/nav";




type PatientStatusTableProps = {
  role: Role;
};

const PatientStatusTable = ({ role }: PatientStatusTableProps) => {
  const columns = getColumns(role);
  // Filter out dismissed patients
 const filteredPatientData = patientData.filter(patient => patient.status !== 'Dismissal');

  return (

    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome, {role} user. </h1>
   
        <DataTable columns={columns} data={filteredPatientData} role={role}/>
 
    </div>
  );
}

export default PatientStatusTable;