
import DateDisplay from './DateDisplay';
import type { Role } from '@/constant/nav';
import NavLinks from './Navlinks';
import MobileNav from './MobileNav';
import SignInOutButton from './SignInOutButton';
import useAuth from '@/hooks/useAuth';
import { useNavigate } from 'react-router';

const HeaderMenu = ({ role }: { role: Role }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      signOut();
      navigate('/sign-in');
    } else {
      navigate('/sign-in');
    }
  };


  return (
    <>
      <div className="hidden sm:flex items-center gap-6 mr-6">
        <NavLinks role={role} />
        <DateDisplay />
        <SignInOutButton onClick={handleAuthClick} user={user?.role || 'guest'} />
      </div>

      <MobileNav role={role} />
    </>
  );
};

export default HeaderMenu;
