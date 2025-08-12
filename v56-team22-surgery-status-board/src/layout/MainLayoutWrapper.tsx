import MainLayout from './MainLayout';
import { Outlet } from 'react-router';

const MainLayoutWrapper = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

export default MainLayoutWrapper;