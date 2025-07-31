import type { Role } from '@/constant/nav';
import HeaderMenu from './header-menu';
import HeaderName from './header-name';

const Header = ({role}:{role:Role}) => {
  return (
    <header className="w-full flex items-center justify-between p-6  text-primary-foreground shadow-sm border-b">
      <HeaderName />
      <HeaderMenu role ={role} />
    </header>
  );
};

export default Header;
