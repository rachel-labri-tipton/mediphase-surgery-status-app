import { useState } from "react";
import { getColumns } from "./columns";
import { DataTable } from "./data-table";
import { patientData } from "./data/patient-data-updated";
import type { TableRole } from "@/constant/patient-table";

const PatientStatusTable = () => {
  const [userRole, setUserRole] = useState<TableRole>("guest"); // default to guest
  const columns = getColumns(userRole);


  return (

    <div className="container mx-auto py-10">
     {/* these buttons are temporary just showing the different table views before implementing the Context API */}
      <div className="flex gap-2 mb-4 justify-center">
        <button
          className={`px-4 py-2 rounded ${userRole === "guest" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setUserRole("guest")}
        >
          Guest View
        </button>
        <button
          className={`px-4 py-2 rounded ${userRole === "admin" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setUserRole("admin")}
        >
          Admin View
        </button>
        <button
          className={`px-4 py-2 rounded ${userRole === "surgical team" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setUserRole("surgical team")}
        >
          Surgical Team View
        </button>
      </div>
   
        <DataTable columns={columns} data={patientData} role={userRole}/>
 
    </div>
  );
}

export default PatientStatusTable;