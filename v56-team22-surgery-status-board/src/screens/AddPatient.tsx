import { useNavigate } from 'react-router';
import { patientData } from '@/components/PatientStatusTable/data/patient-data-updated';
import { type Patient } from '@/components/PatientStatusTable/data/patient-data-updated';
import { formSchema } from '@/schemas/formSchemas/patient-formSchema';
import { toast } from 'sonner';
import * as z from 'zod';
import PatientForm from '@/components/PatientStatusTable/PatientForm';

// Function to generate a random 6-character ID
const generateRandomId = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const AddPatient = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const newPatient: Patient = {
      id: generateRandomId(),
      name: `${values.firstName} ${values.lastName}`,
      status: 'Checked In',
      color: '#0077CC',
      message: 'In the facility awaiting their procedure.',
      streetAddress: values.streetAddress,
      city: values.city,
      stateProvinceRegion: values.stateProvinceRegion,
      country: values.country,
      telephoneNumber: values.telephoneNumber,
      contactEmail: values.contactEmail,
    };

    patientData.push(newPatient);

    toast.success('Patient added successfully', {
      description: 'The new patient has been added to the system',
      duration: 2000,
    });
    setTimeout(() => {
      navigate('/patient-status-board');
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/patient-status-board');
  };

  return (
    <PatientForm
      onSubmit={onSubmit}
      onCancel={handleCancel}
      title="Add New Patient"
      submitButtonText="Add Patient"
    />
  );
};

export default AddPatient;
