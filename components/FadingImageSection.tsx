
'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './FadingImageSection.module.css';

interface FadingImageSectionProps {
  imageSrc: string;
  altText: string;
  text?: string; // Make text optional to fix the error on home page
  objectPosition?: string;
}

const FadingImageSection = ({ imageSrc, altText, text, objectPosition }: FadingImageSectionProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`${styles.section} ${isIntersecting ? styles.visible : ''}`}>
      <Image 
        src={imageSrc} 
        alt={altText} 
        fill={true}
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: objectPosition || 'center' }} 
      />
      <div className={styles.overlay}>
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  );
};

export default FadingImageSection;
