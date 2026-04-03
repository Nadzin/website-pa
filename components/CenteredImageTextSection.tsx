
'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './CenteredImageTextSection.module.css';

interface CenteredImageTextSectionProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  reverse?: boolean;
  objectPosition?: string;
}

const CenteredImageTextSection = ({ imageSrc, altText, title, description, reverse = false, objectPosition }: CenteredImageTextSectionProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`${styles.section} ${isIntersecting ? styles.visible : ''} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageContainer}>
        <Image 
          src={imageSrc} 
          alt={altText} 
          fill={true}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: objectPosition || 'center' }}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default CenteredImageTextSection;
