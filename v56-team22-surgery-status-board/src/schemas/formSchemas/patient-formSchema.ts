import * as z from 'zod';
export const formSchema = z.object({
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
      'Invalid phone number format (e.g., +1-123-456-7890)'
    ),
  contactEmail: z.string().email('Invalid email address'),
});
