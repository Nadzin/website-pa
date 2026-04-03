import React from 'react';
import styles from './SuccessModal.module.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.iconContainer}>
          <svg
            className={styles.checkIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h2 className={styles.title}>Vielen Dank!</h2>
        <p className={styles.message}>
          Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.
        </p>
        <button onClick={onClose} className={styles.button}>
          Schließen
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
