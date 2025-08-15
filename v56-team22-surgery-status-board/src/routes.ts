import App from './App.tsx';
import SignIn from './components/SignIn/index.tsx';
import PatientStatusBoard from './screens/PatientStatusBoard.tsx';
import PatientInformation from './screens/PatientInformation.tsx';
import PatientStatusUpdate from './screens/PatientStatusUpdate.tsx';
import MainLayoutWrapper from './layout/MainLayoutWrapper.tsx';

const routes = [
  {
    path: '/',
    Component: MainLayoutWrapper,
    children: [
      { index: true, Component: App },
      { path: '/sign-in', Component: SignIn },
      { path: '/patient-status', Component: PatientStatusBoard },
      { path: '/patient-information', Component: PatientInformation },
      { path: '/update-patient', Component: PatientStatusUpdate },
    ],
  },
];

export default routes;