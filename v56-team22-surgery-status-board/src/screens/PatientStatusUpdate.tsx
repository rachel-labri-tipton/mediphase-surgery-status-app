import { useState } from 'react';
import FindPatientForm from '@/components/PatientStatusUpdate/FindPatientForm';
import PatientStatusForm from '@/components/PatientStatusUpdate/PatientStatusForm';
import type { Patient } from '@/components/PatientStatusTable/data/patient-data-updated';
import { Button } from '../components/ui/button';

const PatientStatusUpdate = () => {
  const [foundPatient, setFoundPatient] = useState<Patient | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Update Patient Status</h1>
      {!foundPatient ? (
          <FindPatientForm onFound={setFoundPatient} />
      ) : (
          <>
          <PatientStatusForm foundPatient={foundPatient} onStatusUpdated={setFoundPatient} />

          <Button
          type="button"
          variant="secondary"
          className="ml-2 mt-10 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setFoundPatient(null)}>
         View Another Patient
        </Button>
        </>
      )}
     
    </div>
  );
};

export default PatientStatusUpdate;