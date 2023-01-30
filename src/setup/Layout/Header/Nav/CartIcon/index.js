import { useEffect, useState } from 'react';

import { CgShoppingBag } from 'react-icons/cg';
import styles from './index.module.scss';

const CartIcon = () => {


  const [bump, setBump] = useState(false);

  let iconStyles = bump
    ? `${styles.bump} ${styles.cart_icon}`
    : styles.cart_icon;


  return (
    <span className={iconStyles}>
      <CgShoppingBag />
      <div >
        <div></div>
      </div>
    </span>
  );
};

export default CartIcon;
