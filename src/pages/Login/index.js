import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import Loader from 'components/Loader';
import Toast from 'components/Toast';
import ToastMessage from 'components/ToastMessage';
import styles from './index.module.scss';

const Login = () => {
  const { state: routerState } = useLocation();


  const [toastMessage, setToastMessage] = useState(null);

  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();


  };



  const toggleToast = () => {
    setToastMessage(null);
  };

  return (
    <>
      <Toast>
        {toastMessage && (
          <ToastMessage toggleToast={toggleToast} content={toastMessage} />
        )}
      </Toast>

      <>
        <section className={styles.nav_section}></section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.wrapper} main-container`}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.title}>Ingresa a tu cuenta</h2>
                <label className={styles.label}>
                  <span>Email:</span>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="tunombre@email.com"
                    required
                    ref={emailInput}
                  />
                </label>
                <label className={styles.label}>
                  <span>Contraseña:</span>
                  <input
                    className={styles.input}
                    type="password"
                    required
                    ref={passwordInput}
                  />
                </label>
                <button className={styles.button} type="submit">
                  Iniciar Sesión
                </button>
              </form>
              <p className={styles.no_account}>
                ¿No tenés cuenta?{' '}
                <Link to="/cuenta/signup" state={routerState}>
                  Crear cuenta
                </Link>
              </p>
            </div>
          </div>
        </section>
      </>

    </>
  );
};

export default Login;
