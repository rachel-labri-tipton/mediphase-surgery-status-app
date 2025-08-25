import useAuth from '@/hooks/useAuth';
import PatientStatusBoard from '@/screens/PatientStatusBoard';

const PatientStatusBoardWrapper = () => {
  const { user } = useAuth();
  return <PatientStatusBoard role={user?.role ?? 'guest'} />;
};

export default PatientStatusBoardWrapper;