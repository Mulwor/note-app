import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isCountriesPage = location.pathname === '/country';

  return (
    <div>
      {!isCountriesPage && <Link to='/country'>Компонент страны</Link>}

      <Outlet />
    </div>
  );
};

export default Layout;
