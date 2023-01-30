import { Outlet, useLocation } from 'react-router-dom';

import CartContent from 'components/CartContent';
import Footer from './Footer';
import Header from './Header';
import SideModal from 'components/SideModal';
import { useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCartModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  // TODO: ver si hay una mejor manera de hacer esto
  const pathName = location.pathname.split('/');
  const isCheckout = pathName.includes('checkout');

  return (
    <>
      <SideModal toggleModal={toggleCartModal}>
        {isOpen && <CartContent toggleCartModal={toggleCartModal} />}
      </SideModal>
      {!isCheckout && <Header toggleCartModal={toggleCartModal} />}
      <main>
        <Outlet />
      </main>
      {!isCheckout && <Footer />}
    </>
  );
};

export default Layout;
