import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from './components/ui/button';
import { Link } from 'react-router';
import MainLayout from './layout/MainLayout';

function App() {

  return (
      <MainLayout>
        <Link to="/sign-in">
          <Button>Sign in</Button>
        </Link>
      </MainLayout>
  );
}

export default App;
