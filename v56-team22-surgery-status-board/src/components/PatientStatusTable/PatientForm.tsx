import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast, Toaster } from 'sonner';
import { formSchema } from '@/schemas/formSchemas/patient-formSchema';

interface PatientFormProps {
  defaultValues?: z.infer<typeof formSchema>;
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>;
  onCancel: () => void;
  title?: string;
  submitButtonText: string;
}

const PatientForm: React.FC<PatientFormProps> = ({
  defaultValues,
  onSubmit,
  onCancel,
  title,
  submitButtonText,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      firstName: '',
      lastName: '',
      streetAddress: '',
      city: '',
      stateProvinceRegion: '',
      country: '',
      telephoneNumber: '',
      contactEmail: '',
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch {
      toast.error(`Failed to ${submitButtonText.toLowerCase()} patient`, {
        description: `There was an error ${submitButtonText.toLowerCase()} the patient`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[30px] md:px-[40px] mt-[50px] flex flex-col justify-center items-center">
      {title && (
        <h1 className="text-3xl font-bold text-center mb-[50px]">{title}</h1>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 w-full px-[30px] md:px-[70px] lg:px-0 lg:w-[700px]"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row md:justify-between">
                <FormLabel className="w-[50%] mr-[100px] lg:mr-[200px] font-bold">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row md:justify-between">
                <FormLabel className="w-[50%] mr-[100px] lg:mr-[200px] font-bold">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="streetAddress"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row md:justify-between">
                <FormLabel className="w-[50%] mr-[100px] lg:mr-[200px] font-bold">
                  Street Address
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter street address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row md:justify-between">
                <FormLabel className="w-[50%] mr-[100px] lg:mr-[200px] font-bold">
                  City
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stateProvinceRegion"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row md:justify-between">
                <FormLabel className="w-[50%] mr-[100px] lg:mr-[200px] font-bold">
                  State/Province/Region
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter state/province/region" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row md:justify-between">
                <FormLabel className="w-[50%] mr-[100px] lg:mr-[200px] font-bold">
                  Country
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephoneNumber"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row md:justify-between">
                <FormLabel className="w-[50%] mr-[100px] lg:mr-[200px] font-bold">
                  Telephone Number
                </FormLabel>
                <FormControl>
                  <Input placeholder="+1-123-456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row md:justify-between">
                <FormLabel className="w-[50%] mr-[100px] lg:mr-[200px] font-bold">
                  Contact Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter contact email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-[30px] justify-between md:flex-row md:gap-[100px] my-[100px]">
            <Button
              type="button"
              onClick={onCancel}
              className="w-[185px] h-[68px] rounded-xl bg-[#32AA2A] text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-[185px] h-[68px] rounded-xl bg-[#32AA2A] text-white"
            >
              {isSubmitting ? `${submitButtonText}ing...` : submitButtonText}
            </Button>
          </div>
        </form>
        <Toaster position="top-center" />
      </Form>
    </div>
  );
};

export default PatientForm;
