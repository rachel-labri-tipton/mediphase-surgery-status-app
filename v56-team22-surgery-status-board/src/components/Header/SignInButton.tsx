import { Button } from "@/components/ui/button";
import type { User } from "@/contexts/AuthContext";


type SignInButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  user?: User
};

const SignInButton: React.FC<SignInButtonProps> = ({ onClick, user }) => {
  const isGuest = user?.role === 'guest';
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="w-full font-bold text-primary cursor-pointer hover:scale-105 transition-transform"
    >
      {isGuest ? 'Sign In' : 'Sign Out'}
    </Button>
  );
};

export default SignInButton;