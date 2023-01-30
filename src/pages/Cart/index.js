import { useEffect, useState } from 'react';

import Button from 'components/Button';
import Card from 'components/Card';
import CartItem from './CartItem';
import Loader from 'components/Loader';
import Toast from 'components/Toast';
import ToastMessage from 'components/ToastMessage';
import { addAllItemsPrice } from 'helpers/item';
import styles from './index.module.scss';

const Cart = () => {



  const [toastMessage, setToastMessage] = useState(null);






  const toggleToast = () => {
    setToastMessage(null);
  };

  let content =
    (
      <>
        <Card className={styles.checkout_wrapper}>
          <p className={styles.total}>
            Total: <span> 0</span>
          </p>
          <Button to="/checkout" className={styles.checkout_button}>
            Checkout
          </Button>
        </Card>
        <div className={styles.content_wrapper}>
          <div className={styles.list_wrapper}>

            <CartItem

            />

          </div>
          <aside className={styles.sidebar}>
            <form className={styles.support}>
              <p className={styles.support_title}>Código de descuento</p>
              <input
                className={styles.support_input}
                type="text"
                placeholder="Ingresá tu código"
              />
              <button className={`${styles.support_button} disabled-link`}>
                Agregar
              </button>
            </form>
          </aside>
        </div>
      </>
    )(
      <div className={styles.no_products_wrapper}>
        <p className={styles.no_products}>No hay productos en el carrito</p>
        <Button className={styles.products_button} to="/">
          Agrega productos
        </Button>
      </div>
    );

  return (
    <>

      <>
        <Toast>
          {toastMessage && (
            <ToastMessage toggleToast={toggleToast} content={toastMessage} />
          )}
        </Toast>
        <section>
          <div className={`${styles.container} main-container`}>
            <h1 className={styles.title}>Tu carrito</h1>
            {content}
          </div>
        </section>
      </>

    </>
  );
};

export default Cart;
