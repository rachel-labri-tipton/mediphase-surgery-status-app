import { useParams, useNavigate } from 'react-router';
import { patientData } from '@/components/PatientStatusTable/data/patient-data-updated';
import type { Patient } from '@/components/PatientStatusTable/data/patient-data-updated';
import { toast } from 'sonner';
import PatientForm from '@/components/PatientStatusTable/PatientForm';

// Define the form values type based on PatientForm's internal schema
type FormValues = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  stateProvinceRegion: string;
  country: string;
  telephoneNumber: string;
  contactEmail: string;
};

const UpdateInfo = () => {
  const { id } = useParams<{ id: string }>(); // Add type for useParams
  const patient = patientData.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!patient) {
    return <div>Patient not found</div>;
  }

  const [firstName = '', lastName = ''] = patient.name.split(' ');

  const defaultValues: FormValues = {
    firstName,
    lastName,
    streetAddress: patient.streetAddress,
    city: patient.city,
    stateProvinceRegion: patient.stateProvinceRegion,
    country: patient.country,
    telephoneNumber: patient.telephoneNumber,
    contactEmail: patient.contactEmail,
  };

  const onSubmit = async (values: FormValues) => {
    const patientIndex = patientData.findIndex((p) => p.id === id);
    if (patientIndex === -1) {
      throw new Error('Patient not found');
    }

    const updatedPatient: Patient = {
      id: patientData[patientIndex].id,
      name: `${values.firstName} ${values.lastName}`,
      status: patientData[patientIndex].status,
      color: patientData[patientIndex].color,
      message: patientData[patientIndex].message,
      streetAddress: values.streetAddress,
      city: values.city,
      stateProvinceRegion: values.stateProvinceRegion,
      country: values.country,
      telephoneNumber: values.telephoneNumber,
      contactEmail: values.contactEmail,
    };

    patientData[patientIndex] = updatedPatient;
    toast.success('Patient data updated successfully', {
      description: 'Your changes have been saved',
      duration: 2000,
    });
    setTimeout(() => {
      navigate(`/patient-status-board`);
    }, 2000);
  };

  const handleCancel = () => {
    navigate(`/view-details/${id}`);
  };

  return (
    <PatientForm
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      onCancel={handleCancel}
      title="Update Patient Details"
      submitButtonText="Update Patient"
    />
  );
};

export default UpdateInfo;