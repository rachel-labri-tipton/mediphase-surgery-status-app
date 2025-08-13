import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  INVALID_EMAIL_MSG,
  INVALID_PASSWORD_MSG,
} from '@/contexts/auth-context-types';
import useAuth from '@/hooks/useAuth';
import { AuthError } from '@/lib/authUtils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const [error, setError] = useState<string>('');
  const { user, signIn, signInAsGuest } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return;
    }

    navigate('/patient-status');
  }, [user,navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await signIn(email, password);
    } catch (e) {
      if (e instanceof AuthError) setError(e.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md py-12 px-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <CardHeader>
            {/* TODO: Insert logo here later */}
            <CardTitle className="text-4xl text-center">Welcome!</CardTitle>
            <CardDescription>
              Enter your details below to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Simran@medisurge.com"
                  required
                />
                <span className="text-destructive">
                  {error === INVALID_EMAIL_MSG && error}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="*************"
                  required
                />
                {error === INVALID_PASSWORD_MSG && error}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <Button
              onClick={signInAsGuest}
              variant="outline"
              className="w-full"
            >
              Sign in as a guest
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
export default SignIn;
