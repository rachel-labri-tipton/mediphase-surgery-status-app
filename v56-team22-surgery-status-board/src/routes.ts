import App from './App.tsx';
import SignIn from './components/SignIn/index.tsx';
import PatientStatusBoard from './screens/PatientStatusBoard.tsx';
import PatientInformation from './screens/PatientInformation.tsx';
import PatientStatusUpdate from './screens/PatientStatusUpdate.tsx';
import MainLayoutWrapper from './layout/MainLayoutWrapper.tsx';
import ViewDetails from './screens/ViewDetails.tsx';
import AddPatient from './screens/AddPatient.tsx';
import UpdateInfo from './screens/UpdateInfo.tsx';

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
      {path:'/view-details/:id',Component: ViewDetails},
      {path:'/update-info/:id',Component:UpdateInfo},
      {path:'/add-patient',Component:AddPatient}
    ],
  },
];

export default routes;