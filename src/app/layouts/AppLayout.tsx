import type { ReactNode } from 'react';
import { MainLayout } from './MainLayout';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return <MainLayout>{children}</MainLayout>;
};
