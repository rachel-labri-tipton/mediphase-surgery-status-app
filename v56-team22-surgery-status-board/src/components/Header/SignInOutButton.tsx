import { Button } from "@/components/ui/button";

type SignInOutButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  user?: { role?: string };
};

const SignInOutButton: React.FC<SignInOutButtonProps> = ({ onClick, user }) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="w-full font-bold text-primary cursor-pointer hover:scale-105 transition-transform"
    >
      {user && user.role !== 'guest' ? 'Sign Out' : 'Sign In'}
    </Button>
  );
};

export default SignInOutButton;