import React from 'react';
import styles from './Product.module.scss';
import Image from 'next/image';
import Stars from '@/UI/Stars';

const Product = ({ product, title, roast, stars, reviews, price }) => {
  return (
    <div className={styles.product}>
      <Image
        src={`/product${product}.png`}
        alt={`imagem do produto ${product}`}
        width={200}
        height={300}
      />
      <h2>{title}</h2>
      <h3>{roast}</h3>
      <Stars stars='5' reviews={`(${reviews})`} />
      <h4>{`R$ ${price}`}</h4>
    </div>
  );
};

export default Product;
