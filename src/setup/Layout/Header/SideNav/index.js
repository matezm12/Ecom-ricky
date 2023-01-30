import {
  FaInfoCircle,
  FaInstagram,
  FaQuestionCircle,
  FaShippingFast,
  FaSpotify,
  FaSyncAlt,
  FaTwitterSquare,
  FaUserCircle,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import Slideshow from 'components/Slideshow';
import { SLIDES as slides } from './data';
import styles from './index.module.scss';

const SideNav = ({ toggleSideNav }) => {

  return (
    <div className={styles.container}>
      <div className={styles.links_container}>
        <ul className={styles.links_list}>
          <h2>Productos</h2>
          <li>
            <Link
              to="/"
              onClick={toggleSideNav}
              className={styles.link}
            >
              Seccion 1
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={toggleSideNav}
              className={styles.link}
            >
              Seccion 2
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={toggleSideNav}
              className={styles.link}
            >
              Seccion 3
            </Link>
          </li>
        </ul>
        <ul className={styles.links_list}>
          <h2>Colecciones</h2>
          <li>
            <Link
              to="/categorias/productos"
              onClick={toggleSideNav}
              className={styles.link}
            >
              Capsula #001
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.products_container}>
        <Slideshow slides={slides} />
      </div>
      <div className={styles.info_container}>

        <h2 className={styles.title}>Bienvenido de vuelta! </h2>

        <ul className={styles.links_list}>
          <li>
            <Link

              onClick={toggleSideNav}
              className={styles.link}
            >
              <i>
                <FaUserCircle />
              </i>

            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaQuestionCircle />
              </i>
              Info
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaShippingFast />
              </i>
              Envios
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaSyncAlt />
              </i>
              Devoluciones
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSideNav} className={styles.link}>
              <i>
                <FaInfoCircle />
              </i>
              Sobre Nosotros
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.socials_container}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            <FaInstagram />
          </i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i>
            <FaTwitterSquare />
          </i>
        </a>
        <a href="https://spotify.com" target="_blank" rel="noreferrer">
          <i>
            <FaSpotify />
          </i>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
