import { Outlet } from 'react-router-dom';
import Header from '@components/layout/header/Header';
import s from './Layout.module.css';
const Layout = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
