
import PatientStatusTable from "../components/PatientStatusTable/PatientStatusTable";
import type { Role }  from "../constant/nav";

type PatientStatusBoardProps = {
  role: Role;
};

const PatientStatusBoard = ({role}: PatientStatusBoardProps) => {
  return (
    <div className="flex flex-col py-10">
    <h1 className="text-primary text-4xl text-center">MediPhase Patient Surgery Status Board</h1>
    <PatientStatusTable role={role} />
  </div>
  );
}

export default PatientStatusBoard;