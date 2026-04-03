
'use client';

import { useState, useEffect } from 'react';
import styles from './GoogleReviewsWidget.module.css';

const reviews = [
  {
    author: 'Sergej Heinrich',
    rating: 5,
    text: 'Die Kommunikation zwischen Alexander und seiner Frau war von Anfang bis zum Ende hervorragend. Ihre Professionalität beeindruckte uns sehr. Das Ergebnis übertraf wirklich alle Erwartungen. Die Qualität des Essens und die reibungslose Abwicklung haben uns und unseren Gästen sehr gefallen. Wir würden Alexander Partyservice jederzeit wieder buchen und können ihn uneingeschränkt weiterempfehlen. Vielen Dank für dieses perfekte kulinarische Erlebnis, das unsere Hochzeit unvergesslich gemacht hat.',
  },
  {
    author: 'Simone',
    rating: 5,
    text: 'Für unsere Hochzeit hat Alexander ein super tolles Buffet gezaubert. Er und Diana standen immer zur Seite und haben uns gut beraten. Sonderwünsche wurden ohne Probleme übernommen und die Menge war ideal. Es hat problemlos für alle 96 Personen gereicht und war zudem preislich angemessen und fair. Sie sind echte Profis, das haben wir von Beginn an gemerkt. Die Gäste und wir waren sehr angetan vom Essen: toll abgeschmeckte Salate, leckere Beilagen wie Kartoffelgratin oder das super leckere Saisongemüse sowie eine Vielfalt an Fleisch oder Fisch... Wir waren begeistert und würden uns jederzeit wieder für Alexander und Diana entscheiden!',
  },
  {
    author: 'Christopher Picht',
    rating: 5,
    text: 'Wir haben Alexanders Partyservice für unsere Hochzeit gebucht. Die gemeinsame Essensplanung hat schon Spaß gemacht und das Essen auf unserer Hochzeit war fantastisch. Unsere Gäste waren begeistert. Wir würden am liebsten öfter bei ihnen essen. Bei der nächsten Veranstaltung, werden wir auf jeden Fall wieder Diana, Alexander und ihr Team buchen',
  },
  {
    author: 'Jotin Halle',
    rating: 5,
    text: 'Hallo Alexander und Team, danke für unsere super schöne Hochzeit am 04.06. Die Beratung und Informativen Gespräche haben uns bei der Planung geholfen. Bei allen Rückfragen konnten wir dich erreichen und du hast uns direkt weitergeholfen. Das Essen war super Lecker und sehr schön angerichtet. Auch Rückmeldungen aller Gästen war das Essen sehr sehr lecker und hat auch nur gutes über dein/euer Team gesagt. Alle von Team waren sehr sehr freundlich und haben sich um uns und unsere Gäste bestens gekümmert.',
  },
  {
    author: 'Ilona Kaal',
    rating: 5,
    text: 'Alexander hat für uns für ein Geburtstag gekocht. Von Anfang an top Beratung. Das Essen war pünktlich und hat sehr gut geschmeckt. Alle Gäste wir auch wir waren sehr begeistert von dem Essen. Kann ich mit sehr gutem Gewissen weiter Empfehlen. Danke an das Team.',
  },
  {
    author: 'Katharina Krohmer',
    rating: 5,
    text: 'Wir haben im Juli eine Hochzeit mit ca. 100 Personen gefeiert und Partyservice Alexander für das Catering und den Service beauftragt. Alexander und Diana waren im Vorfeld jederzeit für uns erreichbar. Die Planung war mit den Beiden unkompliziert und angenehm. Das Essen war sehr lecker und hat auch unseren Gästen sehr gefallen. Die Servicekräfte waren wirklich aufmerksam und freundlich. Das Essen war schön und ansprechend angerichtet. Vielen Dank für eure tolle Arbeit und dass ihr dazu beigetragen habt, dass unsere Hochzeit so unbeschreiblich toll war.',
  },
];

const GoogleReviewsWidget = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.googleHeader}>
        <svg
          className={styles.googleLogo}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span className={styles.googleText}>Google Rezensionen</span>
      </div>
      <div className={styles.review}>
        <p className={styles.reviewText}>{reviews[currentReviewIndex].text}</p>
        <div className={styles.reviewAuthor}>- {reviews[currentReviewIndex].author}</div>
        <div className={styles.reviewRating}>
          {'★'.repeat(reviews[currentReviewIndex].rating)}
          {'☆'.repeat(5 - reviews[currentReviewIndex].rating)}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsWidget;
