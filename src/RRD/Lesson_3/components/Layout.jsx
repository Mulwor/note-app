import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <div className="container"> 
        <Outlet />  
      </div>
      
      <footer className="container">2021</footer>
    </>
  );
};

export { Layout };
