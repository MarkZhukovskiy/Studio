import React, { useEffect } from 'react';
import styles from './FabulaModal.module.css';

const GooglePlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 5.5C3 4.11929 4.11929 3 5.5 3H6.5L18.5 12L6.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5Z" fill="#34A853"/>
    <path d="M6.5 3H13.5L9 8L6.5 6.25V3Z" fill="#FBBC05"/>
    <path d="M6.5 21H13.5L9 16L6.5 17.75V21Z" fill="#EA4335"/>
    <path d="M13.5 3L21 8L18.5 12L21 16L13.5 21L9 16L13.5 12L9 8L13.5 3Z" fill="#4285F4"/>
  </svg>
);

const Feature = ({ icon, text }) => (
  <div className={styles.feature}>
    <div className={styles.featureIcon}>{icon}</div>
    <div className={styles.featureText}>{text}</div>
  </div>
);

const FabulaModal = ({ isOpen, onClose, googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.fabula.app&pli=1' }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const screenshots = Array.from({ length: 8 }, (_, i) => `/images/projects/fabula_images/fabula_${i + 1}.webp`);

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="fabula-title">
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className={styles.content}>
          <div className={styles.header}>
            <img
              className={styles.logo}
              src="/images/projects/fabula_images/fabula_logo.webp"
              alt="Fabula"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.jpg'; }}
              loading="lazy"
            />
            <h2 id="fabula-title" className={styles.title}>Fabula</h2>
            <p className={styles.subtitle}>Напиши свой первый роман</p>
          </div>

          <div className={styles.featuresGrid}>
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M3 9H21" stroke="currentColor" strokeWidth="2"/></svg>} text="Планирование структуры и сюжета книги" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2"/><path d="M4 20c0-3 2-5 4-5s4 2 4 5" stroke="currentColor" strokeWidth="2"/><path d="M16 12c2 0 4 2 4 4" stroke="currentColor" strokeWidth="2"/></svg>} text="Работа с персонажами и их линиями" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="currentColor" strokeWidth="2"/></svg>} text="Подсказки и советы для авторов" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Удобный интерфейс для заметок и идей" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4h9a3 3 0 0 1 3 3v9" stroke="currentColor" strokeWidth="2"/><path d="M6 8h7M6 12h7M6 16h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Поддержка пошагового написания романа" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7z" stroke="currentColor" strokeWidth="2"/><path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="2"/></svg>} text="Синхронизация прогресса и сохранение данных" />
          </div>

          <div className={styles.description}>
            <p>
              Всё никак не можешь собраться с силами? Такое случается довольно часто. Писать книги легко; трудно писать хорошие книги. Если бы это было не так, мы бы все создавали бестселлеры.
            </p>
          </div>

          <div className={styles.gallery}>
            <h3 className={styles.galleryTitle}>Скриншоты</h3>
            <div className={styles.screenshotGrid}>
              {screenshots.map((src, idx) => (
                <img
                  key={src}
                  className={styles.screenshot}
                  src={src}
                  alt={`Fabula скриншот ${idx + 1}`}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = 'none'; }}
                />
              ))}
            </div>
          </div>

          <div className={styles.ctaRow}>
            <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.ctaButton}`} aria-label="Google Play">
              <GooglePlayIcon />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabulaModal; 