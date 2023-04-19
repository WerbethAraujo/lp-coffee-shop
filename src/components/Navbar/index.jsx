import React from 'react';
import styles from './Navbar.module.scss';
import Logo from '@/UI/Logo';

const links = [
  { url: '#products', text: 'Products' },
  { url: '#about', text: 'Sobre' },
  { url: '#social', text: 'Social' },
  { url: '#reviews', text: 'Depoimentos' },
];

const Navbar = () => {
  const renderLinks = links.map((link, idx) => (
    <li key={idx}>
      <a href={link.url}>{link.text}</a>
    </li>
  ));

  return (
    <section className={styles.navbar}>
      <div className={styles.nav}>
        <ul>{renderLinks.slice(0, 2)}</ul>
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <ul>{renderLinks.slice(2, 4)}</ul>
      </div>
    </section>
  );
};

export default Navbar;
