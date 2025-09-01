import { navByRole, type Role } from '@/constant/nav';
import { useLocation, useNavigate } from 'react-router';
import type { User } from '@/contexts/AuthContext';

type NavLinksProps = {
  role: Role;
  user?: User
  onSignOut?: () => void
};
const NavLinks = ({ role, onSignOut }: NavLinksProps) => {
  const links = navByRole[role];
  const location = useLocation();
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
  const isGuest = storedUser?.role === 'guest';
  const noStoredUser = !storedUser;


  return (
    <>
      {links.map((link) => {
        const isActive = location.pathname === link.href;
            // Special handling for Sign In/Sign Out
    if (link.label === 'Sign Out') {
      return (
        <button
          key={link.href}
          onClick={onSignOut}
          className={`font-bold px-3 py-2 rounded transition
            ${isActive
              ? 'underline underline-offset-4 text-primary cursor-default'
              : 'text-primary hover:underline underline-offset-4'
            }`}
        >
          Sign Out
        </button>
      );
    }
    if (link.label === 'Sign In' && isGuest) {
      return (
        <button
          key={link.href}
          onClick={() => 
            navigate('/sign-in')
          }
          className={`font-bold px-3 py-2 rounded transition
            ${isActive
              ? 'underline underline-offset-4 text-primary cursor-default'
              : 'text-primary hover:underline underline-offset-4'
            }`}
        >
          Guest Sign In 
        </button>
      );
    }
        return(<button
          key={link.href}
          onClick={() => navigate(link.href)}
          className={`font-bold px-3 py-2 rounded transition
            ${isActive
              ? 'underline underline-offset-4 text-primary cursor-default'
              : 'text-primary hover:underline underline-offset-4'
            }`}
        >
          {link.label}
        </button>)
        
      })}
    </>
  );
};

export default NavLinks;
