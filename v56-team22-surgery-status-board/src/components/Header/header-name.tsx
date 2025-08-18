import { PrimaryLogo } from '@/components/Logos';
import { useNavigate } from 'react-router';

const HeaderName = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center ml-7 cursor-pointer" onClick={() => navigate('/')}>
     <PrimaryLogo className="w-32 md:w-52"/>
    </div>
  );
};

export default HeaderName;
