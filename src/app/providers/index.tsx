import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

