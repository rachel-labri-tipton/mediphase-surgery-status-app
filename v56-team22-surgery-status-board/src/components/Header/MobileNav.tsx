import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { IoMdMenu } from 'react-icons/io';

import { navByRole, type Role } from '@/constant/nav';

type NavLinksProps = {
  role: Role;
};
const MobileNav = ({ role }: NavLinksProps) => {
  const links = navByRole[role];
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-primary">
            <IoMdMenu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="p-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-foreground hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
