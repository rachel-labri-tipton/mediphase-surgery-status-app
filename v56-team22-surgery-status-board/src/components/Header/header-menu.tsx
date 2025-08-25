
import DateDisplay from './DateDisplay';
import NavLinks from './Navlinks';
import MobileNav from './MobileNav';
import useAuth from '@/hooks/useAuth';
import { useNavigate } from 'react-router';

const HeaderMenu = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const role = user?.role || 'guest';

  const handleSignOut = () => {
    signOut();
    navigate('/sign-in');
  };

  console.log('HeaderMenu render with role:', role);


  return (
    <>
      <div className="hidden sm:flex items-center gap-6 mr-6">
        <NavLinks user={user}  role={role} onSignOut={handleSignOut} />
        <DateDisplay />
      </div>

      <MobileNav role={role} />
    </>
  );
};

export default HeaderMenu;
