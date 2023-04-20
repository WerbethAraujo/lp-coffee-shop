import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Navbar.module.scss';
import Logo from '@/UI/Logo';

const links = [
  { url: '#about', text: 'Sobre' },
  { url: '#products', text: 'Products' },
  { url: '#social', text: 'Social' },
  { url: '#reviews', text: 'Depoimentos' },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  function toggleMobileMenu() {
    return setIsMobile((prevState) => !prevState);
  }

  const renderLinks = links.map((link, idx) => (
    <li key={idx}>
      <a href={link.url} onClick={toggleMobileMenu}>
        {link.text}
      </a>
    </li>
  ));

  return (
    <section className={styles.navbar}>
      <div className={styles.desktop}>
        <div className={styles.nav}>
          <ul>{renderLinks.slice(0, 2)}</ul>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.nav}>
          <ul>{renderLinks.slice(2, 4)}</ul>
        </div>
      </div>
      <div className={`${styles.mobile} ${isMobile ? styles.active : ''}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <GiHamburgerMenu
          className={styles['open-menu']}
          onClick={toggleMobileMenu}
        />
        <nav className={styles.nav}>
          <ul>{renderLinks}</ul>
          <AiOutlineClose
            className={styles['close-menu']}
            onClick={toggleMobileMenu}
          />
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
