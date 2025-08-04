import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router';
import SignIn from './screens/SignIn.tsx';
import PatientStatusBoard from './screens/PatientStatusBoard.tsx';
import ViewDetails from './screens/ViewDetails.tsx';
import UpdateInfo from './screens/UpdateInfo.tsx';
import AddPatient from './screens/AddPatient.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/sign-in',
    Component: SignIn,
  },
  {
    path: '/patient-status-board',
    Component: PatientStatusBoard,
  },
  {
    path:'/view-details/:id',
    Component: ViewDetails,
  },
  {
    path:'/update-info/:id',
    Component:UpdateInfo
  },
   {
    path:'/add-patient',
    Component:AddPatient
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
