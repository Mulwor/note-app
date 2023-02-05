import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>

      <div className="container"> 
        <Outlet />  
      </div>
      
      <footer className="container">2021</footer>
    </>
  );
};

export { Layout };
