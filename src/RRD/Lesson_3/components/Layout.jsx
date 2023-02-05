import { NavLink, Outlet } from 'react-router-dom';

const setActive = (({isActive}) => ({color: isActive ? "var(--color-active)" : "white"}))

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" style={setActive}>Home</NavLink>
        <NavLink to="/posts" style={setActive}>Blog</NavLink>
        <NavLink to="/about" style={setActive}>About</NavLink>
      </header>

      <div className="container"> 
        <Outlet />  
      </div>
      
      <footer className="container">2021</footer>
    </>
  );
};

export { Layout };
