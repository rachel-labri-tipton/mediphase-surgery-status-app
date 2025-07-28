
export type Role = 'guest' | 'surgical' | 'admin';

interface Navlink {
  label: string;
  href: string;
}

export const navByRole: Record<Role, Navlink[]> = {
  guest: [{ label: 'Patient Status', href: '/patient-status' }],

  surgical: [
    { label: 'Patient Status', href: '/patient-status' },
    { label: 'Update Patient', href: '/update-patient' },
  ],
    admin: [
        { label: 'Patient Status', href: '/patient-status' },
        { label: 'Update Patient', href: '/update-patient' },
        {label:"Patient information", href: '/patient-information' },
    ],
};
