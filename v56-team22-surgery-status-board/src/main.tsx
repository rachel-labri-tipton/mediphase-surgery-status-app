import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './contexts/AuthContext';
import routes from './routes.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Analytics />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
