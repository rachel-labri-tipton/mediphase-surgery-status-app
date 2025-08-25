import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SecondaryLogo } from '@/components/Logos';

const HomeCard = () => {
  return (
      <Card className="w-full max-w-2xl bg-primary shadow-lg">
        <CardHeader className="text-center">
          <SecondaryLogo className="w-52 mx-auto"/>
        </CardHeader>
        <CardContent className="bg-primary text-justify text-white px-15">
          <p className="text-lg mb-[30px]">
            Welcome to MediPhase, your guide to monitoring patient and loved ones during their surgery journey. With real-time updates, MediPhase provides
            real-time updates on patient status. <br />
          </p>
          <p className="text-lg mb-[30px]">
            You stay informed every step of the way. Simple, secure, and
            compassionate care at your fingertips.
          </p>
          <div className="flex flex-col gap-[30px] justify-around md:flex-row items-center">
            <Link to={'/sign-in'} className="w-full md:w-1/2">
              <Button
                variant="outline"
                className="w-full font-bold text-primary cursor-pointer hover:scale-105 transition-transform"
              >
                Admin Sign In
              </Button>
            </Link>
            <Link to={'/patient-status'} className="w-full md:w-1/2">
              <Button
                variant="outline"
                className="w-full font-bold text-primary cursor-pointer hover:scale-105 transition-transform">
                Guest
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
  );
};

export default HomeCard;