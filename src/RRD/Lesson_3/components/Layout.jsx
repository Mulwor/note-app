import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/"
                 className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
        
        <NavLink to="/posts"
                 className={({isActive}) => isActive ? "active-link" : ""}>Blog</NavLink>
        
        <NavLink to="/about"
                 className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
      </header>

      <div className="container"> 
        <Outlet />  
      </div>
      
      <footer className="container">2021</footer>
    </>
  );
};

export { Layout };
