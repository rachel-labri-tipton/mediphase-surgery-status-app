import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { AuthProvider } from './contexts/AuthContext';
import App from './App.tsx';
import SignIn from './components/SignIn/index.tsx';
import PatientStatusBoard from './screens/PatientStatusBoard.tsx';
import PatientInformation from './screens/PatientInformation.tsx';
import PatientStatusUpdate from './screens/PatientStatusUpdate.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: 'sign-in',
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
