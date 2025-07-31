
import DateDisplay from './DateDisplay';
import type { Role } from '@/constant/nav';
import NavLinks from './Navlinks';
import MobileNav from './MobileNav';

const HeaderMenu = ({ role }: { role: Role }) => {
  return (
    <>
      <div className="hidden sm:flex items-center gap-6 mr-6">
        <NavLinks role={role} />
        <DateDisplay />
      </div>

      <MobileNav role={role} />
    </>
  );
};

export default HeaderMenu;
