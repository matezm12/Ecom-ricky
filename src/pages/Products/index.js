import { useEffect, useState } from 'react';

import Button from 'components/Button';
import Loader from 'components/Loader';
import ProductSize from './ProductSize';
import ProductVariant from './ProductVariant';
import Slider from 'components/Slider';
import Toast from 'components/Toast';
import ToastMessage from 'components/ToastMessage';
import { formatNumber } from 'helpers/format';
import styles from './index.module.scss';
import { useMediaQuery } from 'react-responsive';

const Products = () => {




  const [notification, setNotification] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = async () => {

    setNotification(true);
  };



  const toggleToast = () => {
    setToastMessage(null);
  };





  const isBigScreen = useMediaQuery({
    query: '(min-width: 1024px)',
  });



  return (
    <>
      <Toast>
        {toastMessage && (
          <ToastMessage toggleToast={toggleToast} content={toastMessage} />
        )}
      </Toast>

      <>
        {!isBigScreen && (
          <>
            <section>
              <div className={styles.container_s}>
                <div className={styles.swiper_container}>
                  <div className={styles.swiper_wrapper}>
                    <Slider

                      bp={{
                        500: {
                          slidesPerView: 1.5,
                        },
                        600: {
                          slidesPerView: 1.7,
                        },
                        800: {
                          slidesPerView: 2,
                        },
                      }}
                      slidesPerView={1.3}
                      spaceBetween={30}
                      loop={true}
                      centeredSlides={true}
                      grabCursor={true}
                      sliderClassName={styles.slider}
                      slideClassName={styles.slide}
                      imageClassName={styles.image}
                    />
                  </div>
                </div>
                <div className={styles.grid_footer}>
                  <div className={styles.details_wrapper}>
                    <div className={styles.details}>
                      <div className={styles.name_wrapper}>
                        <h1 className={styles.name}>

                        </h1>
                        <p className={styles.price}>
                          $
                        </p>
                      </div>
                      <p className={styles.description}>

                      </p>
                      <p className={styles.color}></p>
                      && (
                      <div className={styles.tags_wrapper}>

                        <span


                        >

                        </span>

                      </div>

                    </div>
                  </div>

                  <div className={styles.controls_wrapper}>
                    <div className={styles.variants_container}>
                      <p className={styles.number_of_colors}>

                      </p>
                      <div className={styles.variants_wrapper}>

                      </div>
                    </div>

                    <div className={styles.sizes_container}>
                      <p className={styles.pick_size}>Selecciona tu talla </p>

                      <div className={styles.sizes_wrapper}>



                      </div>
                    </div>
                  </div>

                  <div className={styles.button_wrapper}>

                    <Button

                    >

                    </Button>


                    <Button disabled={true}>

                    </Button>

                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {isBigScreen && (
          <>
            <section className="main-container">
              <div className={styles.container_b}>
                <div className={styles.details_wrapper}>
                  <div className={styles.details}>
                    <h1 className={styles.name}></h1>
                    <p className={styles.description}>

                    </p>
                    <p className={styles.color}></p>

                    <div className={styles.tags_wrapper}>

                      <span


                      >

                      </span>

                    </div>

                    <p className={styles.price}>
                      $
                    </p>
                  </div>
                </div>

                <div className={styles.images_wrapper}>

                  <img
                    className={styles.images}


                    alt=""
                  />

                </div>

                <div className={styles.controls_wrapper}>
                  <div className={styles.variants_container}>
                    <p className={styles.number_of_colors}>

                      <span>| </span>
                    </p>
                    <div className={styles.variants_wrapper}>


                    </div>
                  </div>

                  <div className={styles.sizes_container}>
                    <p className={styles.pick_size}>Selecciona tu talla </p>

                    <div className={styles.sizes_wrapper}>

                    </div>
                  </div>


                  <Button

                  >

                  </Button>


                  <Button disabled={true}>

                  </Button>

                </div>
              </div>
            </section>
          </>
        )}
      </>

    </>
  );
};

export default Products;
