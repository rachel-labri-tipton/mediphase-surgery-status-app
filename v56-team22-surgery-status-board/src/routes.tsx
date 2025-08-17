import App from './App.tsx';
import SignIn from './components/SignIn/index.tsx';
import PatientStatusBoard from './screens/PatientStatusBoard.tsx';
import PatientInformation from './screens/PatientInformation.tsx';
import PatientStatusUpdate from './screens/PatientStatusUpdate.tsx';
import MainLayoutWrapper from './layout/MainLayoutWrapper.tsx';
import ViewDetails from './screens/ViewDetails.tsx';
import AddPatient from './screens/AddPatient.tsx';
import UpdateInfo from './screens/UpdateInfo.tsx';
import { routeWrapper } from './components/route-wrapper.tsx';

const routes = [
  {
    path: '/',
    element: routeWrapper(<MainLayoutWrapper />),
    children: [
      { index: true, element: routeWrapper(<App />, []) },
      { path: 'sign-in', element: routeWrapper(<SignIn />) },
      { path: 'patient-status', element: routeWrapper(<PatientStatusBoard />) },
      {
        path: 'patient-information',
        element: routeWrapper(<PatientInformation />, []),
      },
      {
        path: 'update-patient',
        element: routeWrapper(<PatientStatusUpdate />, ['surgical']),
      },
      {
        path: 'view-details/:id',
        element: routeWrapper(<ViewDetails />, ['surgical']),
      },
      { path: 'update-info/:id', element: routeWrapper(<UpdateInfo />, []) },
      { path: 'add-patient', element: routeWrapper(<AddPatient />, []) },
    ],
  },
];

export default routes;
