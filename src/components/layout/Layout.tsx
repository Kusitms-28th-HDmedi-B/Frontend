import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <div>Navigation Bar</div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
