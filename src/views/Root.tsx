import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Loading from '../components/layout/Loading';
import Error from '../components/layout/Error';

const RootView: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Error />
      <Loading />
    </>
  );
};
export default RootView;
