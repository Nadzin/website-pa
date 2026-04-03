
'use client';
import React, { useState } from 'react';
import styles from './contact.module.css';
import SuccessModal from '@/components/SuccessModal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    eventType: '',
    numberOfGuests: 1,
    eventDate: '',
    specialWishes: '',
    honeyPot: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName) newErrors.fullName = 'Bitte geben Sie Ihren vollständigen Namen ein.';
    if (!formData.email) newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) newErrors.email = 'Ungültige E-Mail-Adresse.';
    if (!formData.location) newErrors.location = 'Bitte geben Sie den Veranstaltungsort ein.';
    if (!formData.eventType) newErrors.eventType = 'Bitte wählen Sie einen Veranstaltungstyp aus.';
    if (!formData.eventDate) newErrors.eventDate = 'Bitte wählen Sie ein Veranstaltungsdatum aus.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionMessage(null);

    if (!validateForm()) {
      setSubmissionMessage('Bitte korrigieren Sie die Fehler im Formular.');
      return;
    }

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccessModalOpen(true);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          location: '',
          eventType: '',
          numberOfGuests: 1,
          eventDate: '',
          specialWishes: '',
          honeyPot: '',
        });
        setErrors({});
      } else {
        setSubmissionMessage(data.message || 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionMessage('Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.pageTitle}>Kontakt & Anfrage</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="fullName" className={styles.label}>Vollständiger Name *:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            autoComplete="name"
            className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
          />
          {errors.fullName && <p className={styles.errorMessage}>{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className={styles.label}>E-Mail-Adresse *:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phoneNumber" className={styles.label}>Telefonnummer (optional):</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            autoComplete="tel"
            className={`${styles.input} ${errors.phoneNumber ? styles.inputError : ''}`}
          />
          {errors.phoneNumber && <p className={styles.errorMessage}>{errors.phoneNumber}</p>}
        </div>

        <div>
          <label htmlFor="location" className={styles.label}>Veranstaltungsort *:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            autoComplete="street-address"
            className={`${styles.input} ${errors.location ? styles.inputError : ''}`}
          />
          {errors.location && <p className={styles.errorMessage}>{errors.location}</p>}
        </div>

        <div>
          <label htmlFor="eventType" className={styles.label}>Veranstaltungstyp *:</label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className={`${styles.select} ${errors.eventType ? styles.inputError : ''}`}
          >
            <option value="">Wählen Sie einen Veranstaltungstyp</option>
            <option value="wedding">Hochzeit</option>
            <option value="birthday">Geburtstag</option>
            <option value="christening">Taufe</option>
            <option value="corporate">Firmenfeier</option>
            <option value="christmas">Weihnachtsfeier</option>
            <option value="business_meeting">Geschäftstreffen</option>
            <option value="other">Sonstiges</option>
          </select>
          {errors.eventType && <p className={styles.errorMessage}>{errors.eventType}</p>}
        </div>

        <div>
          <label htmlFor="numberOfGuests" className={styles.label}>Anzahl der Gäste (optional):</label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            min="1"
            className={`${styles.input} ${errors.numberOfGuests ? styles.inputError : ''}`}
          />
          {errors.numberOfGuests && <p className={styles.errorMessage}>{errors.numberOfGuests}</p>}
        </div>

        <div>
          <label htmlFor="eventDate" className={styles.label}>Veranstaltungsdatum *:</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className={`${styles.input} ${errors.eventDate ? styles.inputError : ''}`}
          />
          {errors.eventDate && <p className={styles.errorMessage}>{errors.eventDate}</p>}
        </div>

        <div>
          <label htmlFor="specialWishes" className={styles.label}>Weitere Informationen (optional):</label>
          <textarea
            id="specialWishes"
            name="specialWishes"
            value={formData.specialWishes}
            onChange={handleChange}
            rows={5}
            className={`${styles.textarea} ${errors.specialWishes ? styles.inputError : ''}`}
          ></textarea>
          {errors.specialWishes && <p className={styles.errorMessage}>{errors.specialWishes}</p>}
        </div>

        {/* Honeypot field - invisible to humans, tempting for bots */}
        <div style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1 }}>
          <label htmlFor="honeyPot">Please leave this field blank</label>
          <input
            type="text"
            id="honeyPot"
            name="honeyPot"
            value={formData.honeyPot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

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
          <button
            type="submit"
            className={styles.submitButton}
          >
            Anfrage senden
          </button>
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
      </form>

      {submissionMessage && (
        <p className={`${styles.submissionMessage} ${submissionMessage.includes('Vielen Dank') ? styles.successMessage : styles.errorMessageText}`}>
          {submissionMessage}
        </p>
      )}

      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} />
    </div>
  );
};

export default ContactForm;
