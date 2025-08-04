import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { patientData } from '@/components/PatientStatusTable/data/patient-data-updated';
import type { Patient } from '@/components/PatientStatusTable/data/patient-data-updated';
import MainLayout from '@/layout/MainLayout';
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

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  streetAddress: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  stateProvinceRegion: z.string().min(1, 'State/Province/Region is required'),
  country: z.string().min(1, 'Country is required'),
  telephoneNumber: z
    .string()
    .min(1, 'Telephone number is required')
    .regex(
      /^\+\d{1,3}-\d{1,4}-\d{3,4}-\d{4}$/,
      'Invalid phone number format (e.g., +1-123-456-7890)',
    ),
  contactEmail: z.string().email('Invalid email address'),
});

// Function to generate a random 6-character ID
const generateRandomId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const AddPatient = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
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

      // Add the new patient to the patientData array
      patientData.push(newPatient);

      toast.success('Patient added successfully', {
        description: 'The new patient has been added to the system',
      });
      navigate('/patient-status-board');
    } catch (error) {
      toast.error('Failed to add patient', {
        description: 'There was an error adding the new patient',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle cancel button
  const handleCancel = () => {
    navigate('/patient-status-board');
  };

  return (
    <MainLayout>
      <div className='px-[30px] md:px-[40px] mt-[50px] flex flex-col justify-center items-center'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full px-[30px] md:px-[70px] lg:px-0 lg:w-[700px]">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className='flex flex-col md:flex-row md:justify-between'>
                  <FormLabel className='w-[50%] mr-[100px] lg:mr-[200px] font-bold'>First Name</FormLabel>
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
                <FormItem className='flex flex-col md:flex-row md:justify-between'>
                  <FormLabel className='w-[50%] mr-[100px] lg:mr-[200px] font-bold'>Last Name</FormLabel>
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
                <FormItem className='flex flex-col md:flex-row md:justify-between'>
                  <FormLabel className='w-[50%] mr-[100px] lg:mr-[200px] font-bold'>Street Address</FormLabel>
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
                <FormItem className='flex flex-col md:flex-row md:justify-between'>
                  <FormLabel className='w-[50%] mr-[100px] lg:mr-[200px] font-bold'>City</FormLabel>
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
                <FormItem className='flex flex-col md:flex-row md:justify-between'>
                  <FormLabel className='w-[50%] mr-[100px] lg:mr-[200px] font-bold'>State/Province/Region</FormLabel>
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
                <FormItem className='flex flex-col md:flex-row md:justify-between'>
                  <FormLabel className='w-[50%] mr-[100px] lg:mr-[200px] font-bold'>Country</FormLabel>
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
                <FormItem className='flex flex-col md:flex-row md:justify-between'>
                  <FormLabel className='w-[50%] mr-[100px] lg:mr-[200px] font-bold'>Telephone Number</FormLabel>
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
                <FormItem className='flex flex-col md:flex-row md:justify-between'>
                  <FormLabel className='w-[50%] mr-[100px] lg:mr-[200px] font-bold'>Contact Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter contact email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-col gap-[30px] justify-between md:flex-row md:gap-[100px] my-[100px]'>
              <Button type='button' onClick={handleCancel} className='w-[185px] h-[68px] rounded-xl bg-[#32AA2A] text-white'>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className='w-[185px] h-[68px] rounded-xl bg-[#32AA2A] text-white'>
                {isSubmitting ? 'Adding...' : 'Add Patient'}
              </Button>
            </div>
          </form>
          <Toaster />
        </Form>
      </div>
    </MainLayout>
  );
};

export default AddPatient;