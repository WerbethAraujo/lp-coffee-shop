import React from 'react';
import { RiFacebookFill, RiTwitchFill, RiInstagramLine } from 'react-icons/ri';
import styles from './SocialLinks.module.scss';
const links = [
  { url: '#', icon: <RiFacebookFill /> },
  { url: '#', icon: <RiTwitchFill /> },
  { url: '#', icon: <RiInstagramLine /> },
];

const SocialLinks = () => {
  return (
    <ul className={styles.media}>
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.url}>{link.icon}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
