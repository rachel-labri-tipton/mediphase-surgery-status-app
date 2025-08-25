import HeaderMenu from './header-menu';
import HeaderName from './header-name';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-6  text-primary-foreground shadow-sm border-b">
      <HeaderName />
      <HeaderMenu />
    </header>
  );
};

export default Header;
