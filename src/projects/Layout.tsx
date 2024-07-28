import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to='/'> Начальная страница</Link>
      <br />
      <Link to='/country'>Компонент страны</Link>
      <Outlet />
    </div>
  );
};

export default Layout;
