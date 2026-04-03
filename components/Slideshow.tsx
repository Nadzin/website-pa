'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Slideshow.module.css';

const images = [
  {
    src: '/food_pictures/Rindfleisch/Rinderrouladen/20181127_202608000_iOS.jpg',
    alt: 'Saftige Rinderrouladen in Sauce',
    objectPosition: 'center 55%',
  },
  {
    src: '/food_pictures/Beilagen/Dillkartoffeln/20190716_112804000_iOS.jpg',
    alt: 'Frische Dillkartoffeln als Beilage',
    objectPosition: 'center 40%',
  },
  {
    src: '/food_pictures/Beilagen/Wuerzige-Kartoffelecken/20181127_201609000_iOS.jpg',
    alt: 'Knusprige und würzige Kartoffelecken',
    objectPosition: 'center 50%',
  },
  {
    src: '/food_pictures/Schweinefleisch/Medaillons/Tomate_Mozzarella/20200420_195516000_iOS.jpg',
    alt: 'Schweinemedaillons mit Tomate und Mozzarella überbacken',
    objectPosition: 'center 50%',
  },
  {
    src: '/food_pictures/Gefluegel/Huehnerhaxen/20181127_202817000_iOS.jpg',
    alt: 'Gegrillte Hühnerhaxen',
    objectPosition: 'center 50%',
  },
  {
    src: '/food_pictures/Wald/IMG_9273.JPG',
    alt: 'Catering-Event in einer Wald-Location',
    objectPosition: 'center 60%',
  }
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          fill={true}
          sizes="100vw"
          priority={index === 0}
          style={{ objectFit: 'cover', objectPosition: image.objectPosition }}
          className={`${styles.slideshowImage} ${index === currentImageIndex ? styles.slideshowImageActive : styles.slideshowImageInactive}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
