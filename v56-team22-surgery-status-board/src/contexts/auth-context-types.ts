import { createContext } from 'react';
   import type { Role } from '@/constant/nav';

   export const INVALID_EMAIL_MSG =
     'A user account associated with this email address does not exist.';
   export const INVALID_PASSWORD_MSG =
     'Invalid password entered. Please try again.';

   export type User = {
     id: string;
     email?: string;
     role: Role;
   } | null;

   export type AuthContextType = {
     user: User;
     signIn: (email: string, password: string) => Promise<User>;
     signInAsGuest: () => void;
     signOut: () => void;
   };

   export const AuthContext = createContext<AuthContextType | null>(null);