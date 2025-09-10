import React, { useEffect } from 'react';
import styles from './ThankYouModal.module.css';

const ThankYouModal = ({ isOpen, onClose, telegramUrl = 'https://t.me/Mark_Zhukovskiy' }) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Отключаем закрытие по клику на фон, чтобы пользователь закрывал только осознанно (кнопка/крестик)
  const handleBackdropClick = () => {};

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="thanks-title">
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className={styles.content}>
          <div className={styles.icon}>✅</div>
          <h2 id="thanks-title" className={styles.title}>Спасибо! Мы получили вашу заявку.</h2>
          <p className={styles.subtitle}>Наш эксперт свяжется с вами в ближайшее время.</p>

          <div className={styles.actions}>
            <button className={styles.primaryButton} onClick={onClose}>
              Вернуться на сайт
            </button>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
              Подписаться в Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal; 