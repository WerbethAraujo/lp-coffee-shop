import React from 'react';
import styles from './Footer.module.scss';
import Logo from '@/UI/Logo';
import SocialLinks from '@/UI/SocialLinks';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.main}>
          <h2>
            <Logo />
          </h2>
          <p>
            Desfrute de um café de qualidade, enquanto se reconecta com o que é
            essencial
          </p>
          <SocialLinks />
        </div>
        <div className={styles.location}>
          <h2>Faça-nos uma visita</h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.857384360353!2d-49.85564582582994!3d-6.539687763929575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92dd9d099bf1f327%3A0x4c3c918d54d1f4ed!2sPUB%20TIME!5e0!3m2!1spt-BR!2sbr!4v1681929612438!5m2!1spt-BR!2sbr'
            allowfullscreen={true}
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className={styles.info}>
          <h2>Fucionamento:</h2>
          <ul>
            <li>Segunda - Sexta: 09:00 às 18:00</li>
            <li>Sábados: 09:00 às 14:00</li>
            <li>
              <strong>Telefone:</strong> (00) 000000-0000
            </li>
            <li>
              <strong>E-mail:</strong> contato@coffeetime.com.br
            </li>
          </ul>
        </div>
      </div>
      <span>Coffee Time - Todos os direitos reservados</span>
    </footer>
  );
};

export default Footer;
