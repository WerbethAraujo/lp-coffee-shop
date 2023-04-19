import React from 'react';
import Image from 'next/image';
import styles from './Social.module.scss';
import SocialLinks from '@/UI/SocialLinks';

const Social = () => {
  return (
    <section className={styles.social}>
      <div className={styles.content}>
        <h2 className='title dark-bg'>Descubra seu café favorito</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio
          cupiditate, vitae id inventore vel blanditiis provident saepe aliquid
          error alias sed possimus earum officiis ratione dignissimos nisi
          omnis! Repudiandae?
        </p>
        <SocialLinks />
      </div>
      <Image
        className={styles.image}
        src='/social.png'
        alt='cafes e plantas'
        width={380}
        height={540}
      />
    </section>
  );
};

export default Social;
