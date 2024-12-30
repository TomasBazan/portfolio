import React from 'react';
import { Header } from '../components/Header';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}