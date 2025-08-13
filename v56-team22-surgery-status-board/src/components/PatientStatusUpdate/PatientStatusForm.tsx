import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast, Toaster } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusDropDown from './StatusDropDown';
import { updatePatientStatus } from '@/utility/patientHelpers';
import type { Patient } from '@/components/PatientStatusTable/data/patient-data-updated';
import { statusLabels } from '@/constant/status-info'

const formSchema = z.object({
  newStatus: z.enum(statusLabels, {
    required_error: 'New status is required',
  }),
});

export function PatientStatusForm({
  foundPatient,
  onStatusUpdated,
}: {
  foundPatient: Patient | null;
  onStatusUpdated?: (updated: Patient) => void;
  }) {
  
  const [statusUpdated, setStatusUpdated] = useState(false);
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newStatus: foundPatient?.status && statusLabels.includes(foundPatient.status)
        ? foundPatient.status
        : statusLabels[0],
    },
  });
  
  const statusChanged = form.watch('newStatus') !== foundPatient?.status;

  useEffect(() => {
    if (foundPatient) {
      form.setValue('newStatus', foundPatient.status as z.infer<typeof formSchema>['newStatus']);
    }
    // eslint-disable-next-line
  }, [foundPatient]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!foundPatient) return;
    const updated = updatePatientStatus(foundPatient.id, values.newStatus);
    if (updated && onStatusUpdated) {
      onStatusUpdated(updated);
      setStatusUpdated(true);
      toast.success("Patient status updated to " + values.newStatus + ".");
    }
  }

  if (!foundPatient) {
    return null
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete="off">
        <Card className="mt-4 p-10 w-full mx-auto border-gray-500">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Patient Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
          <div><strong>Name:</strong> {foundPatient.name}</div>
          <div><strong>Address:</strong> {foundPatient.streetAddress}</div>
          <div><strong>City:</strong> {foundPatient.city}</div>
          <div><strong>State:</strong> {foundPatient.stateProvinceRegion}</div>
          <div><strong>Telephone:</strong> {foundPatient.telephoneNumber}</div>
          <div className="mb-8"><strong>{!statusUpdated ? "Current Status" : "Updated Status"}:</strong> {foundPatient.status}</div>
          {!statusUpdated ? <FormField
            control={form.control}
              name="newStatus"
            render={({ field }) => (
              <FormItem className='mt-4'>
                <FormLabel>Status Selection</FormLabel>
                <FormControl>
                  <StatusDropDown value={field.value} onChange={field.onChange} originalStatus={foundPatient.status} disabled={field.value !==foundPatient.status} />
                </FormControl>
                <FormDescription>
                  Select the new status for the patient.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> : null }
          
          {!statusUpdated ? (
            <div className="flex justify-between items-center mt-4">
                <Button type="submit" disabled={!statusChanged} className="cursor-pointer w-1/2 hover:scale-105 transition-transform">Save Status</Button>
           <Button
                type="button"
                  variant="secondary"
                disabled={!statusChanged}
                className="ml-2 w-1/2 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => form.reset()}
              >
                Cancel
              </Button>
              
              </div>
          ) : (
            <div className="mt-4 flex flex-col gap-2">
              <div className="mt-4 text-green-600 font-semibold">Status updated!</div>
              </div>
            )}
            </CardContent>
          </Card>
      </form>
      <Toaster position="top-center" />
    </Form>
  );
}

export default PatientStatusForm;