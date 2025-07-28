import { navByRole, type Role } from '@/constant/nav';

type NavLinksProps = {
  role: Role;
};
const NavLinks = ({ role }: NavLinksProps) => {
  const links = navByRole[role];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-primary hover:underline underline-offset-4 font-bold"
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
