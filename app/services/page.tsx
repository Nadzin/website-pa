
import React from 'react';
import ServiceBlock from '@/components/ServiceBlock';
import ReferenceCard from '@/components/ReferenceCard';
import styles from '../page.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unsere Leistungen',
  description: 'Entdecken Sie die vielfältigen Catering-Leistungen von Partyservice Alexander. Wir bieten maßgeschneiderte Lösungen für Hochzeiten, Firmenevents, Geburtstage und jeden anderen Anlass.',
};

const ServicesPage = () => {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Unsere Leistungen</h1>

      <ServiceBlock
        imageSrc="/Leistungen/1763157449139.png"
        altText="Hochzeits-Catering"
        title="Hochzeits-Catering"
        description="Ihre Hochzeit ist ein einzigartiger Tag, und wir möchten dazu beitragen, dass er kulinarisch unvergesslich wird. Unser Hochzeits-Catering reicht von eleganten Buffets bis hin zu exquisitem Fingerfood und kalten Platten. Wir berücksichtigen Ihre individuellen Vorstellungen, sodass Ihre Speisen perfekt zu Ihrem Stil und Ihrer Hochzeitsfeier passen."
        objectPosition="center 40%"
      />

      <ServiceBlock
        imageSrc="/Leistungen/1763157547172.png"
        altText="Firmenevents"
        title="Firmenevents"
        description="Beeindrucken Sie Ihre Kunden und Mitarbeiter mit erstklassigen Speisen. Unser Catering für Firmenfeiern, Konferenzen und Meetings ist professionell und auf Ihre Bedürfnisse zugeschnitten. Wir bieten flexible Lösungen für jede Unternehmensgröße."
        objectPosition="center 70%"
      />

      <ServiceBlock
        imageSrc="/Leistungen/1763157648981.png"
        altText="Geburtstagsfeiern"
        title="Geburtstagsfeiern"
        description="Feiern Sie Ihren Geburtstag mit einem maßgeschneiderten Catering. Wir kümmern uns um das leibliche Wohl Ihrer Gäste, damit Sie entspannt feiern können. Wir sorgen für ein unvergessliches Fest."
        objectPosition="center 50%"
      />

      <ServiceBlock
        imageSrc="/food_pictures/Verschiedenes/L&D_471.JPG"
        altText="Weitere Anlässe"
        title="Catering für jeden Anlass"
        description="Ob Jubiläen, Taufen oder andere besondere Anlässe – Partyservice Alexander bietet Ihnen maßgeschneiderte Catering-Lösungen. Kontaktieren Sie uns für eine individuelle Beratung und ein unverbindliches Angebot."
        objectPosition='center 90%'
      />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
        <div className={styles.ctaContainer}>
          <div className={styles.fireworksLeft}>
            <div className={`${styles.firework} ${styles.firework1}`}></div>
            <div className={`${styles.firework} ${styles.firework2}`}></div>
            <div className={`${styles.firework} ${styles.firework3}`}></div>
            <div className={`${styles.firework} ${styles.firework4}`}></div>
            <div className={`${styles.firework} ${styles.firework5}`}></div>
            <div className={`${styles.firework} ${styles.firework6}`}></div>
            <div className={`${styles.firework} ${styles.firework7}`}></div>
            <div className={`${styles.firework} ${styles.firework8}`}></div>
            <div className={`${styles.firework} ${styles.firework9}`}></div>
            <div className={`${styles.firework} ${styles.firework10}`}></div>
          </div>
          <Link href="/contact" className={styles.ctaButton}>Jetzt Anfragen</Link>
          <div className={styles.fireworksRight}>
            <div className={`${styles.firework} ${styles.firework11}`}></div>
            <div className={`${styles.firework} ${styles.firework12}`}></div>
            <div className={`${styles.firework} ${styles.firework13}`}></div>
            <div className={`${styles.firework} ${styles.firework14}`}></div>
            <div className={`${styles.firework} ${styles.firework15}`}></div>
            <div className={`${styles.firework} ${styles.firework16}`}></div>
            <div className={`${styles.firework} ${styles.firework17}`}></div>
            <div className={`${styles.firework} ${styles.firework18}`}></div>
            <div className={`${styles.firework} ${styles.firework19}`}></div>
            <div className={`${styles.firework} ${styles.firework20}`}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
