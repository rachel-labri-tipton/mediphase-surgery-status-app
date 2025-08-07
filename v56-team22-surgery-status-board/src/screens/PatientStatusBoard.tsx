
import PatientStatusTable from "../components/PatientStatusTable/PatientStatusTable";

const PatientStatusBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold mb-4">Patient Status</h1>
    <p className="text-lg text-gray-700 mb-8">This is the patient status screen.</p>
    <PatientStatusTable />
  </div>
  );
}

export default PatientStatusBoard;