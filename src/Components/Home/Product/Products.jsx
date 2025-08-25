import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import styles from './Products.module.css';
import ProductItem from './ProductItem';
import { GlobalContext } from '../../../provider/global/global';

const Products = () => {
  const { getProducts, listProducts, addCart } = useContext(GlobalContext);
  const { product } = useParams();

  React.useEffect(() => {
    product && getProducts(product);
  }, [product]);

  function handleClick(product) {
    addCart(product)
  }

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.title}>{product ? product : 'Burguers'}</h2>
        <div className={styles.areaProducts}>
          {listProducts.map((product) => <ProductItem inputCart={handleClick} key={product.id} item={product} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;