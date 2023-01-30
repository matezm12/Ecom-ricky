import styles from './index.module.scss';

const ProductSize = ({ id, value, stock, selectedSize }) => {


  let addEventHandler = false;
  if (stock > 0 && value !== selectedSize) {
    addEventHandler = true;
  }

  const handleSelectSize = () => {
    if (value === selectedSize) {
      return;
    }

  };

  let sizeStyles = `
    ${styles.size} 
    ${value === selectedSize && styles.fill} 
    ${stock <= 0 && styles.no_stock}
  `;

  return (
    <div
      className={sizeStyles}
      onClick={addEventHandler ? handleSelectSize : undefined}
    >
      {value}
    </div>
  );
};

export default ProductSize;
