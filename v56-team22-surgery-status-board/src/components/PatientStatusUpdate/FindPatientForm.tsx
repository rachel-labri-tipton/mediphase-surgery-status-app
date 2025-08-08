import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getPatientById, initPatientsIfNeeded } from '@/utility/patientHelpers';
import { useEffect, useState } from 'react';
import type { Patient } from '../PatientStatusTable/data/patient-data-updated';

const formSchema = z.object({
  patientNumber: z.string().min(4, 'Patient number is required'),
});

export function FindPatientForm({ onFound }: { onFound: (patient: Patient | null) => void }) {
  const [searchError, setSearchError] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientNumber: '',
    },
  });

  useEffect(() => {
    initPatientsIfNeeded();
  }, []);

  function handleFindPatient() {
    const id = form.getValues("patientNumber");
    const patient = getPatientById(id);
    if (patient) {
      setSearchError('');
      onFound(patient);
    } else {
      setSearchError("Patient ID not found.");
      onFound(null);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFindPatient)} className="space-y-4">
        <FormField
          control={form.control}
          name="patientNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter patient ID" {...field} />
              </FormControl>
              <FormDescription>
                Enter the unique Patient ID and click "Find Patient".
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> 
        <Button type="submit">Find Patient</Button>
        <Button
          type="button"
          variant="secondary"
          className="ml-8"
          onClick={() => {
            form.reset();
            setSearchError('');
          }}> Reset Form
        </Button>
        {searchError && <div className="mt-2 text-red-500">{searchError}</div>}
      </form>
    </Form>
  );
}

export default FindPatientForm;