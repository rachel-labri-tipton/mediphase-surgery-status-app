import { createContext, useEffect, useState } from 'react';
import users from '../components/SignIn/users.json';
import { AuthError } from '@/lib/authUtils';
import type { Role } from '@/constant/nav';
import { v4 as uuidv4 } from 'uuid';

export type User = {
  id?: string;
  email?: string;
  role: Role;
} | null;

export const INVALID_EMAIL_MSG =
  'A user account associated with this email address does not exist.';
export const INVALID_PASSWORD_MSG =
  'Invalid password entered. Please try again.';

export type AuthContextType = {
  user: User;
  signIn: (email: string, password: string) => Promise<User>;
  signInAsGuest: () => void;
  signOut: () => void;
};

//eslint-disable-next-line
export const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const signIn = (email: string, password: string) => {
    const storedUser = users.find((credential) => credential.email === email);

    if (!storedUser) {
      return Promise.reject(new AuthError(INVALID_EMAIL_MSG));
    }

    if (storedUser.password !== password) {
      return Promise.reject(new AuthError(INVALID_PASSWORD_MSG));
    }
    //eslint-disable-next-line
    const { password: _, ...userProps } = storedUser as User & {
      password: string;
    };
    setUser(userProps);
    return Promise.resolve(userProps);
  };

  const signInAsGuest = () =>
    setUser({
      id: uuidv4(),
      role: 'guest',
    });

    const signOut = () => {
      setUser(null);
      localStorage.removeItem('user');
    };

  return (
    <AuthContext.Provider value={{ user, signIn, signInAsGuest, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
