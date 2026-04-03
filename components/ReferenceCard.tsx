import Image from 'next/image';
import styles from './ReferenceCard.module.css';

interface ReferenceCardProps {
  logoSrc: string;
  name: string;
  description: string;
}

const ReferenceCard = ({ logoSrc, name, description }: ReferenceCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <Image src={logoSrc} alt={`${name} Logo`} width={100} height={100} objectFit="contain" />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ReferenceCard;
