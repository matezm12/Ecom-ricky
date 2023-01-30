import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import CartIcon from './CartIcon';
import { CgSearch } from 'react-icons/cg';
import LogoNav from 'assets/images/logo-nav.png';
import { RiMenuLine } from 'react-icons/ri';
import styles from './index.module.scss';

const Navbar = ({ toggleSideNav, toggleCartModal }) => {
  const { pathname } = useLocation();


  const [hasScrolled, setHasSrolled] = useState(false);

  const resizeHeaderOnScroll = () => {
    setHasSrolled((hasScrolled) => {
      if (
        !hasScrolled &&
        (document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20)
      ) {
        return true;
      }

      if (
        hasScrolled &&
        document.body.scrollTop < 4 &&
        document.documentElement.scrollTop < 4
      ) {
        return false;
      }

      return hasScrolled;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', resizeHeaderOnScroll);

    return () => window.removeEventListener('scroll', resizeHeaderOnScroll);
  }, []);

  const handleToggleCartModal = () => {
    if (pathname !== '/carrito') {
      toggleCartModal();
    }
  };

  const navStyles = hasScrolled
    ? `${styles.nav} ${styles.hasScrolled}`
    : styles.nav;

  return (
    <nav className={navStyles}>
      <div className={styles.container_top}>
        <Button className={`${styles.link} ${styles.info_link}`} type="button">
          Info
        </Button>
        <ul className={styles.info_list}>
          <li>
            <Link className={styles.link} to="/">
              Info
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Envios
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Devoluciones
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Sobre Nosotros
            </Link>
          </li>
        </ul>

        <Link
          to="/cuenta/login"
          className={`${styles.link} ${styles.login_link}`}
        >
          Login
        </Link>


        <Link to="/" className={`${styles.link} ${styles.login_link}`}>
          Mi Cuenta
        </Link>

      </div>
      <div className={styles.container_bottom}>
        <Link to="/">
          <img className={styles.logo} src={LogoNav} alt="Logo Nav" />
        </Link>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.link} to="/">
              Mochilas
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/">
              Zapatos
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/">
              Chaquetas
            </NavLink>
          </li>
        </ul>
        <ul className={styles.icons_menu}>
          <li className={`${styles.search_icon} disabled-link`}>
            <CgSearch />
          </li>
          <li className={styles.cart_icon} onClick={handleToggleCartModal}>
            <CartIcon />
          </li>
          <li className={styles.mobile_icon}>
            <RiMenuLine onClick={toggleSideNav} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
