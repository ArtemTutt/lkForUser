import './styles.css';
import { AppProviders } from './providers';
import { AppLayout } from './layouts/AppLayout';
import { AppRoutes } from './routes';
import { Header } from '@/widgets/header';

function App() {
  return (
    <AppProviders>
      <Header />
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </AppProviders>
  );
}

export default App;
