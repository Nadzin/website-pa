import Slideshow from '@/components/Slideshow';
import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FadingImageSection = dynamic(() => import('@/components/FadingImageSection'));
const CenteredImageTextSection = dynamic(() => import('@/components/CenteredImageTextSection'));
const GoogleReviewsWidget = dynamic(() => import('@/components/GoogleReviewsWidget'));

export const metadata: Metadata = {
  title: 'Startseite',
  description: 'Willkommen bei Partyservice Alexander. Wir organisieren das perfekte Catering, um Ihre Feier unvergesslich zu machen. Fordern Sie jetzt ein unverbindliches Angebot an.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Slideshow />
      <div style={{ padding: '2rem 1rem' }}>
        <h1 className={styles.title}>Partyservice Alexander</h1>
        <p className={styles.subtitle}>Wir machen ihre Feier unvergesslich!</p>
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

      <FadingImageSection
        imageSrc="/food_pictures/Verschiedenes/a_39.JPG"
        altText="Desserts"
        objectPosition="center 40%"
      />

      <CenteredImageTextSection
        imageSrc="/food_pictures/Verschiedenes/C&D-528.jpg"
        altText="Buffet"
        title="Frische Zutaten, höchste Qualität"
        description="Wir verwenden ausschließlich frische, hochwertige Zutaten von ausgewählten Lieferanten. So garantieren wir Ihnen ein Geschmackserlebnis, das Sie und Ihre Gäste begeistern wird."
      />

      <FadingImageSection
        imageSrc="/food_pictures/Verschiedenes/A_and_M-552.jpg"
        altText="Schaschlik"
        objectPosition="center 30%"
      />

      <CenteredImageTextSection
        imageSrc="/food_pictures/Verschiedenes/L&D_474.JPG"
        altText="Pollo Fino"
        title="Professioneller Service für Ihr Event"
        description="Unser erfahrenes Team sorgt dafür, dass Ihr Event reibungslos abläuft. Von der ersten Beratung bis zum Abbau sind wir für Sie da und kümmern uns um jedes Detail."
        objectPosition="center 50%"
      />

      <FadingImageSection
        imageSrc="/food_pictures/Verschiedenes/A&J-580.jpg"
        altText="Buffet"
        objectPosition="center 60%"
      />

      <CenteredImageTextSection
        imageSrc="/food_pictures/Verschiedenes/A_and_M-555.jpg"
        altText="Scheffinge"
        title="Individuelle Beratung und Planung"
        description="Jedes Event ist einzigartig. Deshalb nehmen wir uns Zeit für eine persönliche Beratung und planen Ihr Catering ganz nach Ihren individuellen Wünschen und Vorstellungen."
      />

      <FadingImageSection
        imageSrc="/food_pictures/Wald/IMG_9282.JPG"
        altText="CremeBrulee"
        objectPosition="center 40%"
      />
      <GoogleReviewsWidget />
    </main>
  );
}

