import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <section className={styles.about}>
      <Image src='/about.png' alt='Sobre nós' width={500} height={400} />
      <div className={styles.content}>
        <h2 className='title light-bg'>Conheça mais sobre o coffee time</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          dolores eligendi cupiditate odio harum nam porro, minus voluptate
          dolores eligendi cupiditate odio harum nam porro, minus voluptate
          tempore iure eos earum facilis rem ipsum provident aperiam, at esse
          nulla? tempore iure eos earum facilis rem ipsum provident aperiam, at
          esse nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          dolores eligendi cupiditate odio harum nam porro, minus voluptate
          tempore iure eos earum facilis rem ipsum provident aperiam, at esse
          nulla?
        </p>
      </div>
    </section>
  );
};

export default About;
