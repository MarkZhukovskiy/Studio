import React, { useEffect } from 'react';
import styles from './UrModal.module.css';

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16.365 12.936c-.03-3.237 2.642-4.787 2.761-4.861-1.51-2.205-3.85-2.504-4.676-2.536-1.989-.203-3.878 1.173-4.882 1.173-1.022 0-2.564-1.147-4.22-1.114-2.164.034-4.173 1.261-5.286 3.198-2.268 3.936-.576 9.742 1.63 12.93 1.079 1.55 2.347 3.291 4.02 3.231 1.626-.065 2.235-1.044 4.197-1.044 1.946 0 2.512 1.044 4.219 1.008 1.748-.028 2.853-1.582 3.924-3.14 1.239-1.8 1.748-3.548 1.774-3.638-.039-.018-3.401-1.306-3.461-5.207z"/>
    <path d="M14.066 3.9c.88-1.067 1.474-2.556 1.312-4.04-1.268.052-2.825.854-3.739 1.922-.823.953-1.538 2.49-1.344 3.944 1.423.11 2.891-.72 3.771-1.826z"/>
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 5.5C3 4.11929 4.11929 3 5.5 3H6.5L18.5 12L6.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5Z" fill="#34A853"/>
    <path d="M6.5 3H13.5L9 8L6.5 6.25V3Z" fill="#FBBC05"/>
    <path d="M6.5 21H13.5L9 16L6.5 17.75V21Z" fill="#EA4335"/>
    <path d="M13.5 3L21 8L18.5 12L21 16L13.5 21L9 16L13.5 12L9 8L13.5 3Z" fill="#4285F4"/>
  </svg>
);

const WebIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 3C9.5 6.5 8.25 9.75 8.25 12C8.25 14.25 9.5 17.5 12 21C14.5 17.5 15.75 14.25 15.75 12C15.75 9.75 14.5 6.5 12 3Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const Feature = ({ icon, text }) => (
  <div className={styles.feature}>
    <div className={styles.featureIcon}>{icon}</div>
    <div className={styles.featureText}>{text}</div>
  </div>
);

const UrModal = ({ isOpen, onClose, appStoreUrl = 'https://apps.apple.com/ru/app/%D1%8E%D1%80%D0%BE%D0%BF%D1%8B%D1%82-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C-%D1%8E%D1%80%D0%B8%D1%81%D1%82%D0%B0/id1659015560', googlePlayUrl = 'https://play.google.com/store/apps/details?id=ru.uropit.urp_client', webUrl = 'https://uropit.ru/' }) => {
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

  const screenshots = Array.from({ length: 6 }, (_, i) => `/images/projects/ur/ur_${i + 1}.webp`);

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="ur-title">
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
              src="/images/projects/ur/ur_logo.svg"
              alt="Юропыт — помощь юриста"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.jpg'; }}
              loading="lazy"
            />
            <h2 id="ur-title" className={styles.title}>Юропыт — помощь юриста</h2>
            <p className={styles.subtitle}>Быстрая юридическая поддержка в вашем телефоне</p>
          </div>

          <div className={styles.featuresGrid}>
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2"/><path d="M8 10h8M8 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Онлайн-консультации с юристом" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 8h10M7 12h7M7 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Шаблоны договоров и юридических документов" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Справочные материалы и инструкции по законам" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 11h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 15h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Уведомления о сроках исковой давности и важных юридических датах" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16v10H4z" stroke="currentColor" strokeWidth="2"/><path d="M8 19h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Обмен сообщениями и чат с поддержкой" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Защита персональных данных и конфиденциальность" />
          </div>

          <div className={styles.gallery}>
            <h3 className={styles.galleryTitle}>Скриншоты</h3>
            <div className={styles.screenshotGrid}>
              {screenshots.map((src, idx) => (
                <img
                  key={src}
                  className={styles.screenshot}
                  src={src}
                  alt={`Юропыт скриншот ${idx + 1}`}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = 'none'; }}
                />
              ))}
            </div>
          </div>

          <div className={styles.ctaRow}>
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.ctaButton}`} aria-label="App Store">
              <AppleIcon />
              <span>App Store</span>
            </a>
            <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className={`btn-secondary ${styles.ctaButton}`} aria-label="Google Play">
              <GooglePlayIcon />
              <span>Google Play</span>
            </a>
            <a href={webUrl} target="_blank" rel="noopener noreferrer" className={`btn-secondary ${styles.ctaButton}`} aria-label="Сайт">
              <WebIcon />
              <span>Сайт</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrModal; 