
import './App.css';
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
