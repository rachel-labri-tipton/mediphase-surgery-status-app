import { createContext, useState } from 'react';
import users from '../components/SignIn/users.json';
import { AuthError } from '@/lib/authUtils';

type User = {
  id: string;
  email: string;
} | null;

export const INVALID_EMAIL_MSG =
  'A user account associated with this email address does not exist.';
export const INVALID_PASSWORD_MSG =
  'Invalid password entered. Please try again.';

export type AuthContextType = {
  user: User;
  signIn: (email: string, password: string) => Promise<User>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const signIn = (email: string, password: string) => {
    const storedUser = users.find((credential) => credential.email === email);

    if (!storedUser) {
      return Promise.reject(new AuthError(INVALID_EMAIL_MSG));
    }

    if (storedUser.password !== password) {
      return Promise.reject(new AuthError(INVALID_PASSWORD_MSG));
    }

    const { password: _, ...userProps } = storedUser;
    setUser(userProps);
    return Promise.resolve(userProps);
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
