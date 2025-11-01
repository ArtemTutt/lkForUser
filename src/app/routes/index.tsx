import { Routes, Route } from 'react-router-dom';
import { ExpertProfilePage } from '@/pages/expert-profile';
import { MySessionsPage } from '@/pages/my-sessions';
import { ExpertsPage } from '@/pages/experts';
import { ExpertsCategoryPage } from '@/pages/experts-category';
import { BookingPage } from '@/pages/booking';
import { ROUTES_CONFIG } from '@/shared/config/routes.config';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES_CONFIG.HOME} element={<ExpertProfilePage />} />
      <Route path={ROUTES_CONFIG.SESSIONS} element={<MySessionsPage />} />
      <Route path={ROUTES_CONFIG.EXPERTS} element={<ExpertsPage />} />
      <Route path="/experts/:id" element={<ExpertsCategoryPage />} />
      <Route path="/booking/:expertId/:sessionId" element={<BookingPage />} />
    </Routes>
  );
};
