import { Routes, Route } from 'react-router-dom';
import { ExpertProfilePage } from '@/pages/expert-profile';
import { MySessionsPage } from '@/pages/my-sessions';
import { ExpertsPage } from '@/pages/experts';
import { ROUTES_CONFIG } from '@/shared/config/routes.config';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES_CONFIG.HOME} element={<ExpertProfilePage />} />
      <Route path={ROUTES_CONFIG.SESSIONS} element={<MySessionsPage />} />
      <Route path={ROUTES_CONFIG.EXPERTS} element={<ExpertsPage />} />
    </Routes>
  );
};
