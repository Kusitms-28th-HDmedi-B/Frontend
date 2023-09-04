import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>Navigation Bar</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default Layout;
