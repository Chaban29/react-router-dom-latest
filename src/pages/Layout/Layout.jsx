import * as React from 'react';
import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>&copy; 2024</footer>
    </div>
  );
};
