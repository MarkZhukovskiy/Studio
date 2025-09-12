import React, { useEffect } from 'react';
import styles from './AuraModal.module.css';

const RuStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="6" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 6L9 3H15L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Feature = ({ icon, text }) => (
  <div className={styles.feature}>
    <div className={styles.featureIcon}>{icon}</div>
    <div className={styles.featureText}>{text}</div>
  </div>
);

const AuraModal = ({ isOpen, onClose, ruStoreUrl = 'https://www.rustore.ru/catalog/app/ms.aura.walletapp.release' }) => {
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

  const screenshots = Array.from({ length: 4 }, (_, i) => `/images/projects/aura/Aura_${i + 1}.webp`);

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="aura-title">
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
              src="/images/projects/aura/Aura_Logo.webp"
              alt="Aura Wallet"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.jpg'; }}
              loading="lazy"
            />
            <h2 id="aura-title" className={styles.title}>Aura Wallet</h2>
            <p className={styles.subtitle}>Ваш цифровой кошелёк в смартфоне</p>
          </div>

          <div className={styles.featuresGrid}>
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/></svg>} text="Быстрые и безопасные платежи" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M3 10H21" stroke="currentColor" strokeWidth="2"/></svg>} text="Управление банковскими картами и счетами" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 16c3-6 7-6 10-2s6 2 6 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Контроль расходов и аналитика трат" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10l6-4 6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 14l6 4 6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>} text="Удобные переводы между пользователями" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Хранение истории операций" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l8 4v6c0 5-4 7-8 8-4-1-8-3-8-8V7l8-4z" stroke="currentColor" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>} text="Защита данных и многоуровневая безопасность" />
          </div>

          <div className={styles.gallery}>
            <h3 className={styles.galleryTitle}>Скриншоты</h3>
            <div className={styles.screenshotGrid}>
              {screenshots.map((src, idx) => (
                <img
                  key={src}
                  className={styles.screenshot}
                  src={src}
                  alt={`Aura Wallet скриншот ${idx + 1}`}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = 'none'; }}
                />
              ))}
            </div>
          </div>

          <div className={styles.ctaRow}>
            <a href={ruStoreUrl} target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.ctaButton}`} aria-label="RuStore">
              <RuStoreIcon />
              <span>RuStore</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuraModal; 