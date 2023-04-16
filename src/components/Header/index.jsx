import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Coffee Time</h1>
        <div className={styles.line} />
        <p className='dark-bg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe hic nisi! Velit molestiae reiciendis repudiandae voluptatibus
          vel perspiciatis? Deserunt harum quasi id voluptatum nam amet tempore!
          Distinctio, nemo deleniti.
        </p>
        <button className='btn btn-primary'>Conheça</button>
      </div>
      <Image
        src='/leaf1.png'
        alt='folhas de café'
        className={styles.leaf1}
        width={320}
        height={460}
      />
      <Image
        src='/flower.png'
        alt='flor de café'
        className={styles.flower}
        width={260}
        height={260}
      />

      <Image
        src='/coffee.png'
        alt='folhas de café'
        className={styles.coffee}
        width={260}
        height={260}
      />
      <Image
        src='/leaf2.png'
        alt='folhas de café'
        className={styles.leaf2}
        width={400}
        height={520}
      />
    </header>
  );
};

export default Header;
