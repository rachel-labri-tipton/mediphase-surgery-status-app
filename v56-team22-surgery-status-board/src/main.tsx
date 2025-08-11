import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/next';
import './index.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router';
import SignIn from './screens/SignIn.tsx';
import PatientStatusBoard from './screens/PatientStatusBoard.tsx';
import PatientInformation from './screens/PatientInformation.tsx';
import PatientStatusUpdate from './screens/PatientStatusUpdate.tsx';

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
    path: '/patient-status',
    Component: PatientStatusBoard,
  },
  {
    path: '/patient-information',
    Component: PatientInformation,
  },
  {
    path: '/update-patient',
    Component: PatientStatusUpdate,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>
);
