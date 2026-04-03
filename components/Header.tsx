
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}></div>}

      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Partyservice Alexander Logo"
              className={styles.logo}
              width={600}
              height={240}
              priority
            />
          </Link>
        </div>

        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menü öffnen">
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Startseite</Link>
          <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Über Uns</Link>
          <Link href="/services" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Leistungen</Link>
          <Link href="/gallery" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Bildergalerie</Link>
          <Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Kontakt/Anfrage</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

