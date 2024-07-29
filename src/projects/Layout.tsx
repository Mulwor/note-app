import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to='/'> Начальная страница</Link>
      <br />
      <Link to='/country'>Компонент страны</Link>
      <Outlet />
      <Link to='.'>asd</Link>
    </div>
  );
};

export default Layout;
