import React from 'react';
import Image from 'next/image';
import styles from './Stars.module.scss';

const Stars = ({ stars, reviews }) => {
  const renderStars = Array.from({ length: stars }, (_, idx) => (
    <Image src='/star.svg' alt='Estrela de avaliação' width={14} height={14} />
  ));

  return (
    <div className={styles.stars}>
      {renderStars}
      {reviews && <span>({reviews})</span>}
    </div>
  );
};

export default Stars;
