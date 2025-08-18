import { SecondaryLogo } from "../Logos";
import { useNavigate } from "react-router";

const FooterLogo = () => {
  const navigate = useNavigate();
  return (
    <div className="md:my-0 cursor-pointer" onClick={() => navigate('/')}>
      <span><SecondaryLogo className="w-32 h-auto md:w-64"/></span>
    </div>
  );
};

export default FooterLogo;
