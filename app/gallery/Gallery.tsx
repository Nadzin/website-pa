'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: '/food_pictures/2026_08/IMG-20260817-WA0010.jpg', alt: 'Frischer Weißkrautsalat' },
  { src: '/food_pictures/2026_08/IMG-20260817-WA0011.jpg', alt: 'Feine Festtagssuppe' },
  { src: '/food_pictures/Verschiedenes/C&D-532.jpg', alt: 'Alexander Nadezkin' },
  { src: '/food_pictures/Verschiedenes/L&A_503.JPG', alt: 'Festliches Buffet' },
  { src: '/food_pictures/2026_08/IMG-20260817-WA0009.jpg', alt: 'Festliche Buffet-Tafel' },
  { src: '/food_pictures/2026_08/IMG-20260817-WA0054.jpg', alt: 'Canapés und Fingerfood-Platte' },
  { src: '/food_pictures/2026_08/IMG-20260817-WA0041.jpg', alt: 'Tomate-Mozzarella-Spieße' },
  { src: '/food_pictures/2026_08/IMG-20260817-WA0006.jpg', alt: 'Warmes Buffet Arrangement' },
  { src: '/food_pictures/2026_08/IMG-20260817-WA0036.jpg', alt: 'Kalte Fleisch- und Bratenplatte' },
  { src: '/food_pictures/2026_08/IMG-20260817-WA0056.jpg', alt: 'Couscous-Vorspeise im Glas' },
  { src: '/food_pictures/2026_08/IMG-20260817-WA0007.jpg', alt: 'Frische Salatkreation am Buffet' },
  { src: '/food_pictures/2026_08/IMG-20260817-WA0008.jpg', alt: 'Knusprige Schnitzelvariationen' },
  { src: '/food_pictures/Verschiedenes/A&J-582.jpg', alt: 'Frische Salate' },
  { src: '/food_pictures/Verschiedenes/C&D-535.jpg', alt: 'Kaltes Buffet' },
  { src: '/food_pictures/Verschiedenes/L&A_505.JPG', alt: 'Reichhaltige Auswahl' },
  { src: '/food_pictures/Verschiedenes/L&D_471.JPG', alt: 'Fingerfood Variationen' },
  { src: '/food_pictures/Verschiedenes/L&D_610.JPG', alt: 'Dessert Auswahl' },
  { src: '/food_pictures/Verschiedenes/a_10.jpg', alt: 'Vorspeisen' },
  { src: '/food_pictures/Verschiedenes/a_37.JPG', alt: 'Hauptspeisen' },
  { src: '/food_pictures/Verschiedenes/A_and_M-552.jpg', alt: 'Gala Dinner' },
  { src: '/food_pictures/Verschiedenes/L&D_891.JPG', alt: 'Mitternachtsbuffet' },
  { src: '/food_pictures/Verschiedenes/A&J-576.png', alt: 'Hochzeitsbuffet Detail' },
  { src: '/food_pictures/Verschiedenes/L&D_611.JPG', alt: 'Fleischbuffet' },
  { src: '/food_pictures/Verschiedenes/C&D-703.jpg', alt: 'Fischbuffet' },
  { src: '/food_pictures/Wald/IMG_9260_k.jpg', alt: 'Schaschlik' },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const goToPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Bildergalerie</h1>

      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className={styles.imageContainer}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill={true}
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              className={styles.lightboxImage}
            />
            <button
              onClick={closeLightbox}
              className={styles.closeButton}
            >
              &times;
            </button>
            <button onClick={goToPrev} className={styles.prevButton}>&#10094;</button>
            <button onClick={goToNext} className={styles.nextButton}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
