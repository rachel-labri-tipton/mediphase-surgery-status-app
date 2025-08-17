import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
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
    <Card className="m-2 p-6 w-full max-w-md border-gray-500">
      <CardHeader>
        <CardTitle className="text-2xl">Find Patient</CardTitle>
        <CardDescription>
          Enter the Patient ID to find the patient and update their status.
        </CardDescription>
      </CardHeader>
      <CardContent>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFindPatient)} className="space-y-4">
        <FormField
          control={form.control}
          name="patientNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter patient ID..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
            /> 
           <div className="flex w-50 justify-between items-center mt-4">

            <Button type="submit"
              disabled={!form.watch("patientNumber")}
              className="cursor-pointer hover:scale-105 transition-transform">Find Patient</Button>
        <Button
          type="button"
          variant="secondary"
          disabled={!form.watch("patientNumber")}
          className="ml-8 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => {
            form.reset();
            setSearchError('');
          }}> Reset Form
              </Button>
              </div>
        {searchError && <div className="mt-4 text-red-500">{searchError}</div>}
      </form>
        </Form>
      </CardContent>
      </Card>
  );
}

export default FindPatientForm;