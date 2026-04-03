'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './ServiceBlock.module.css';

interface ServiceBlockProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  objectPosition?: string;
}

const ServiceBlock = ({ imageSrc, altText, title, description, objectPosition }: ServiceBlockProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`${styles.serviceBlock} ${isIntersecting ? styles.visible : ''}`}>
      <div className={styles.imageContainer}>
        <Image 
          src={imageSrc} 
          alt={altText} 
          layout="fill" 
          objectFit="cover" 
          style={{ objectPosition: objectPosition || 'center' }}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceBlock;
