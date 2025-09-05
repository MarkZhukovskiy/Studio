import React, { useEffect } from 'react';
import styles from './AioChatModal.module.css';

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16.365 12.936c-.03-3.237 2.642-4.787 2.761-4.861-1.51-2.205-3.85-2.504-4.676-2.536-1.989-.203-3.878 1.173-4.882 1.173-1.022 0-2.564-1.147-4.22-1.114-2.164.034-4.173 1.261-5.286 3.198-2.268 3.936-.576 9.742 1.63 12.93 1.079 1.55 2.347 3.291 4.02 3.231 1.626-.065 2.235-1.044 4.197-1.044 1.946 0 2.512 1.044 4.219 1.008 1.748-.028 2.853-1.582 3.924-3.14 1.239-1.8 1.748-3.548 1.774-3.638-.039-.018-3.401-1.306-3.461-5.207z"/>
    <path d="M14.066 3.9c.88-1.067 1.474-2.556 1.312-4.04-1.268.052-2.825.854-3.739 1.922-.823.953-1.538 2.49-1.344 3.944 1.423.11 2.891-.72 3.771-1.826z"/>
  </svg>
);

const RuStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="6" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 6L9 3H15L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

const AioChatModal = ({ isOpen, onClose, platformLinks = {} }) => {
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

  const iosUrl = platformLinks.ios || 'https://apps.apple.com/ru';
  const ruStoreUrl = platformLinks.ru || 'https://apps.rustore.ru';
  const webUrl = platformLinks.web || 'https://aiochat.ru';

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="aiochat-title">
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
              src="/images/aio_logo.png"
              alt="AIO Chat"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.jpg'; }}
              loading="lazy"
            />
            <h2 id="aiochat-title" className={styles.title}>AIO Chat</h2>
            <p className={styles.subtitle}>Мобильное и десктопное приложение с ИИ: чат, генерация графики, аудио и контента.</p>
          </div>

          <div className={styles.featuresGrid}>
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M3 9H21" stroke="currentColor" strokeWidth="2"/><path d="M8 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} text="Проектирование (прототип, без VPN)" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2"/></svg>} text="ChatGPT + голосовой помощник" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="14" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/></svg>} text="Генерация графики, текста, аудио" />
            <Feature icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M4 19H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M17 19l3 3l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>} text="История запросов и безопасное хранение" />
          </div>

          <div className={styles.highlights}>
            <div className={styles.badge}>Работает без VPN</div>
            <div className={styles.badge}>Бесплатный доступ к базовым функциям</div>
          </div>

          <div className={styles.ctaRow}>
            <a href={iosUrl} target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.ctaButton}`} aria-label="Скачать в App Store">
              <AppleIcon />
              <span>App Store</span>
            </a>
            <a href={ruStoreUrl} target="_blank" rel="noopener noreferrer" className={`btn-secondary ${styles.ctaButton}`} aria-label="Открыть в RuStore">
              <RuStoreIcon />
              <span>RuStore</span>
            </a>
            <a href={webUrl} target="_blank" rel="noopener noreferrer" className={`btn-secondary ${styles.ctaButton}`} aria-label="Сайт проекта">
              <WebIcon />
              <span>Сайт проекта</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AioChatModal; 