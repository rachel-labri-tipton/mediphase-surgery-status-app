
import { Button } from './components/ui/button';
import { Link } from 'react-router';
import MainLayout from './layout/MainLayout';
import  Home  from './screens/Home';

function App() {

  return (
      <MainLayout>
        <Home/>
      </MainLayout>
  );
}

export default App;
