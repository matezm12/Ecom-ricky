import { CgCheckO, CgShoppingBag } from 'react-icons/cg';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import CartItem from 'pages/Cart/CartItem';
import Toast from 'components/Toast';
import ToastMessage from 'components/ToastMessage';
import { addAllItemsPrice } from 'helpers/item';
import styles from './index.module.scss';

const CartContent = ({ toggleCartModal }) => {


  const [toastMessage, setToastMessage] = useState(null);



  const toggleToast = () => {
    setToastMessage(null);
  };



  if (1 - 1 === 0) {
    return (
      <>
        <Toast>
          {toastMessage && (
            <ToastMessage toggleToast={toggleToast} content={toastMessage} />
          )}
        </Toast>
        <div className={styles.empty}>
          <p className={styles.no_products}>No hay productos en el carrito</p>
          <Button
            className={`${styles.button} ${styles.empty_button}`}
            to="/"
            onClick={toggleCartModal}
          >
            Agrega productos
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <Toast>
        {toastMessage && (
          <ToastMessage toggleToast={toggleToast} content={toastMessage} />
        )}
      </Toast>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.list_wrapper}>
            <div className={styles.list}>

              <CartItem
                toggleCartModal={toggleCartModal}



              />

            </div>
          </div>
        </div>
        <div className={styles.footer_container}>
          <div className={styles.footer_wrapper}>

            <div className={styles.buttons_wrapper}>
              <Button
                className={`${styles.button} ${styles.cart_button}`}
                to="/carrito"
                onClick={toggleCartModal}
              >
                Carrito{' '}
                <span>
                  <CgShoppingBag />
                </span>
              </Button>
              <Button
                className={`${styles.button} ${styles.checkout_button}`}
                to="/checkout"
                onClick={toggleCartModal}
              >
                Checkout{' '}
                <span>
                  <CgCheckO />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContent;
