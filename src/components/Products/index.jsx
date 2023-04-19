import React from 'react';
import styles from './Products.module.scss';

import Product from './Product';

const Products = () => {
  return (
    <section className={styles.products} id='products'>
      <Product
        product='1'
        title='Café Blend'
        roast='Torra Escura'
        stars='5'
        reviews='16'
        price='29,29'
      />
      <Product
        product='2'
        title='Café Branco'
        roast='Torra Clara'
        stars='5'
        reviews='12'
        price='28,59'
      />
      <Product
        product='3'
        title='Café Premiun'
        roast='Torra Média'
        stars='5'
        reviews='10'
        price='32,99'
      />
      <Product
        product='4'
        title='Café Late'
        roast='Torra Clara'
        stars='5'
        reviews='12'
        price='25,00'
      />
    </section>
  );
};

export default Products;
