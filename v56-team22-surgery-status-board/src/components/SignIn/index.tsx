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

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target);
};

const SignIn = () => (
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
                placeholder="Simran@medisurge.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="*************"
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          <Button variant="outline" className="w-full">
            Sign in as a guest
          </Button>
        </CardFooter>
      </form>
    </Card>
  </div>
);

export default SignIn;
