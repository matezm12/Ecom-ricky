import {
  BIG_SCREEN_SLIDES as bigScreenSlides,
  SMALL_SCREEN_SLIDES as smallScreenSlides,
} from './data';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import Slideshow from 'components/Slideshow';
import styles from './index.module.scss';
import { useMediaQuery } from 'react-responsive';

const SlideshowSection = () => {
  const [showContent, setShowContent] = useState(true);

  const isBigScreen = useMediaQuery({
    query: '(min-width: 900px)',
  });

  // TODO: AGREGAR EFECTO CUANDO APARECE EL CONTENIDO
  useEffect(() => {
    setShowContent(false);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [isBigScreen]);

  return (
    <section className={styles.section}>
      <div className={`${styles.container} main-container`}>
        <p className={styles.section_text}>Compra lo</p>
        <h1 className={styles.section_title}>Ultimo</h1>
        <div className={styles.wrapper}>
          {showContent && (
            <div className={styles.content_wrapper}>
              <p className={styles.content_title}>Release #01</p>
              <p className={styles.content_title}>Al futuro</p>
              <p className={styles.content_subtitle}>Mochilas, Chaquetas y Zapatos</p>
              <Button className={styles.button} to="/">
                Ver productos
              </Button>
            </div>
          )}
          {isBigScreen && <Slideshow slides={bigScreenSlides} />}
          {!isBigScreen && (
            <Slideshow slides={smallScreenSlides} className={styles.image} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SlideshowSection;
