import type { ReactNode } from 'react';
import { Footer } from '@/widgets/footer';
import './MainLayout.css';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      {children}
      <Footer />
    </div>
  );
};
