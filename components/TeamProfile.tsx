
'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './TeamProfile.module.css';

interface TeamProfileProps {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
}

const TeamProfile = ({ imageSrc, name, role, description }: TeamProfileProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`${styles.profile} ${isIntersecting ? styles.visible : ''}`}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={name} width={300} height={300} objectFit="cover" />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TeamProfile;
