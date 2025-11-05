import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '@/pages/landing';
import { BecomeExpertPage } from '@/pages/become-expert';
import { BecomeExpertFormPage } from '@/pages/become-expert-form';
// import { ExpertProfilePage } from '@/pages/expert-profile';
import { MySessionsPage } from '@/pages/my-sessions';
import { ExpertsPage } from '@/pages/experts';
import { ExpertsCategoryPage } from '@/pages/experts-category';
import { BookingPage } from '@/pages/booking';
import { ROUTES_CONFIG } from '@/shared/config/routes.config';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES_CONFIG.HOME} element={<LandingPage />} />
      <Route path={ROUTES_CONFIG.BECOME_EXPERT} element={<BecomeExpertPage />} />
      <Route path={ROUTES_CONFIG.BECOME_EXPERT_FORM} element={<BecomeExpertFormPage />} />
      <Route path={ROUTES_CONFIG.SESSIONS} element={<MySessionsPage />} />
      <Route path={ROUTES_CONFIG.EXPERTS} element={<ExpertsPage />} />
      <Route path={ROUTES_CONFIG.EXPERTS_CATEGORY_BY_ID(':id')} element={<ExpertsCategoryPage />} />
      <Route path={ROUTES_CONFIG.BOOKING(':expertId', ':sessionId')} element={<BookingPage />} />
    </Routes>
  );
};
