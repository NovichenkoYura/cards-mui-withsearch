import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import { locations } from 'constans/locations';
// import { StartPage } from 'pages/StartPage';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';

export const Layout = () => {
  return (
    <>
      <header></header>
      <HomePage />
      {/* <ArticlePage /> */}

      <main className="container">
        <Outlet />
      </main>

      <footer className="container"></footer>
    </>
  );
};
