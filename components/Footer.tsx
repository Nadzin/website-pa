"use client";

import Link from 'next/link';
import InstagramIcon from './InstagramIcon';
import styles from './Footer.module.css';

const Footer = () => {
  const openCookieSettings = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-cookie-settings'));
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Partyservice Alexander</h3>
            <p>Phone: +49 170 8356623</p>
            <p>Email: info@partyservice-alexander.de</p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Navigation</h3>
            <ul>
              <li><Link href="/" className={styles.footerLink}>Startseite</Link></li>
              <li><Link href="/about" className={styles.footerLink}>Über Uns</Link></li>
              <li><Link href="/services" className={styles.footerLink}>Leistungen</Link></li>
              <li><Link href="/gallery" className={styles.footerLink}>Bildergalerie</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Kontakt/Anfrage</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Rechtliches</h3>
            <ul>
              <li><Link href="/imprint" className={styles.footerLink}>Impressum & AGB</Link></li>
              <li><Link href="/datenschutz" className={styles.footerLink}>Datenschutz</Link></li>
              <li>
                <a href="#" onClick={openCookieSettings} className={styles.footerLink}>
                  Cookie-Einstellungen
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Social Media</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/partyservice.alexander/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
