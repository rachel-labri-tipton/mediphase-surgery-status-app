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
      form.setValue('newStatus', foundPatient.status as any);
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
        <div className="p-4 border rounded bg-gray-50 mt-4">
          <div><strong>Name:</strong> {foundPatient.name}</div>
          <div><strong>Address:</strong> {foundPatient.streetAddress}</div>
          <div><strong>City:</strong> {foundPatient.city}</div>
          <div><strong>State:</strong> {foundPatient.stateProvinceRegion}</div>
          <div><strong>Telephone:</strong> {foundPatient.telephoneNumber}</div>
          <div><strong>{!statusUpdated ? "Current Status" : "Updated Status"} :</strong> {foundPatient.status}</div>
          {!statusUpdated ? <FormField
            control={form.control}
            name="newStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Update Status</FormLabel>
                <FormControl>
                  <StatusDropDown value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormDescription>
                  Select the new status for the patient.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> : null }
          
          {!statusUpdated ? (
            <>
              <Button type="submit" className="mt-4">Update Status</Button>
              {statusChanged && (<Button
                type="button"
                variant="secondary"
                className="ml-2"
                onClick={() => form.reset()}
              >
                Cancel
              </Button>)}
              
            </>
          ) : (
            <div className="mt-4 flex flex-col gap-2">
              <div className="mt-4 text-green-600 font-semibold">Status updated!</div>
              </div>
          )}
        </div>
      </form>
      <Toaster position="top-center" />
    </Form>
  );
}

export default PatientStatusForm;