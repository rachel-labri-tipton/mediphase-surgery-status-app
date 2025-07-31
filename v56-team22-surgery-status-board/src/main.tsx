import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router';
import SignIn from './screens/SignIn.tsx';
import PatientStatusBoard from './screens/PatientStatusBoard.tsx';

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
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
