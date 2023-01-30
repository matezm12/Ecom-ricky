import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import ProductCard from './ProductCard';
import styles from './index.module.scss';

// import { DUMMY_COLLECTIONS_PRODUCTS as products } from './data';



const Collections = () => {
  const navigate = useNavigate();
  const { id: urlId } = useParams();



  const [products, setProducts] = useState(null);
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {

    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products) {
      let selectedProducts;
      if (urlId === 'productos') {
        selectedProducts = products;
      } else if (
        urlId === 'mochilas' ||
        urlId === 'chaquetas' ||
        urlId === 'zapatos'
      ) {
        selectedProducts = products.filter(
          (product) => product.collection === urlId
        );
      } else {
        selectedProducts = null;
      }

      if (selectedProducts) {
        setCollection(selectedProducts);
      } else {
        navigate('/');
      }
    }
  }, [products, urlId]);

  return (
    <>
      {!collection && <Loader />}
      {collection && (
        <section>
          <div className={`${styles.container} main-container`}>
            {collection.map((product) => (
              <ProductCard
                key={product.id}
                model={product.model}
                color={product.color}
                price={product.price}
                type={product.type}
                url={product.url}
                _imageTop={product.images[0].src}
                _imageBottom={product.images[1].src}
                numberOfVariants={product.numberOfVariants}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Collections;
