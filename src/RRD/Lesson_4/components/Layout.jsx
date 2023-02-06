import { NavLink, Outlet } from 'react-router-dom';
import { CustomLink } from './Stylesheet/CustomLink';

const setActive = ({ isActive }) => ({ color: isActive ? 'var(--color-active)' : 'white' });

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>

      <div className="container">
        <Outlet />
      </div>

      <footer className="container">2021</footer>
    </>
  );
};

export { Layout };
