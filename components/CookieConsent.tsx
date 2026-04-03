"use client";

import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.css";

const COOKIE_CONSENT_KEY = "cookie_consent_preferences";

type ConsentSettings = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>({
    essential: true, // Always true and disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedConsent) {
      setTimeout(() => setShowBanner(true), 0);
    } else {
      // Optional: Load saved settings if you want to allow re-opening the modal later to edit
      try {
        const parsedSettings = JSON.parse(savedConsent);
        setTimeout(() => setSettings(parsedSettings), 0);
      } catch (e) {
        console.error("Failed to parse cookie consent", e);
      }
    }

    const handleOpenSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);

    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
    };
  }, []);

  const saveConsent = (preferences: ConsentSettings) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    setShowBanner(false);
    
    // Here you would typically trigger your analytics/pixel initialization based on 'preferences'
    // if (preferences.analytics) { initAnalytics(); }
  };

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    setSettings(allAccepted);
    saveConsent(allAccepted);
  };

  const handleAcceptEssential = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    setSettings(essentialOnly);
    saveConsent(essentialOnly);
  };

  const handleSaveSelection = () => {
    saveConsent(settings);
  };

  const toggleSetting = (key: keyof ConsentSettings) => {
    if (key === "essential") return;
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Cookie-Einstellungen</h3>
        </div>
        
        {!showSettings ? (
          <div className={styles.content}>
            <p>
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
              Einige sind technisch notwendig, andere helfen uns, unser Angebot zu optimieren.
            </p>
            <div className={styles.buttonGroup}>
              <button onClick={handleAcceptAll} className={styles.primaryButton}>
                Alle akzeptieren
              </button>
              <button onClick={handleAcceptEssential} className={styles.secondaryButton}>
                Nur essenzielle
              </button>
              <button 
                onClick={() => setShowSettings(true)} 
                className={styles.textButton}
              >
                Einstellungen anpassen
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.settings}>
            <p className={styles.settingsIntro}>
              Hier können Sie auswählen, welche Cookies Sie zulassen möchten.
            </p>
            
            <div className={styles.option}>
              <div className={styles.optionHeader}>
                <label htmlFor="essential">Essenziell</label>
                <input 
                  type="checkbox" 
                  id="essential" 
                  checked={settings.essential} 
                  disabled 
                />
              </div>
              <p className={styles.optionDesc}>
                Notwendige Cookies für die grundlegende Funktionalität der Website.
              </p>
            </div>

            <div className={styles.option}>
              <div className={styles.optionHeader}>
                <label htmlFor="analytics">Analyse</label>
                <input 
                  type="checkbox" 
                  id="analytics" 
                  checked={settings.analytics} 
                  onChange={() => toggleSetting("analytics")} 
                />
              </div>
              <p className={styles.optionDesc}>
                Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
              </p>
            </div>

            <div className={styles.option}>
              <div className={styles.optionHeader}>
                <label htmlFor="marketing">Marketing</label>
                <input 
                  type="checkbox" 
                  id="marketing" 
                  checked={settings.marketing} 
                  onChange={() => toggleSetting("marketing")} 
                />
              </div>
              <p className={styles.optionDesc}>
                Werden verwendet, um Besuchern relevante Werbung anzuzeigen.
              </p>
            </div>

            <div className={styles.buttonGroup}>
              <button onClick={handleSaveSelection} className={styles.primaryButton}>
                Auswahl speichern
              </button>
              <button 
                onClick={() => setShowSettings(false)} 
                className={styles.textButton}
              >
                Zurück
              </button>
            </div>
          </div>
        )}
        
        <div className={styles.footer}>
          <a href="/datenschutz">Datenschutzerklärung</a>
          <a href="/imprint">Impressum</a>
        </div>
      </div>
    </div>
  );
}