import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './AuraModal.module.css';
import { bodyScrollLocker } from '../../utils/scrollLock';
import { setImageFallback } from '../../utils/imageFallback';

import { RuStoreIcon, FeatureIcons } from './icons';
import { auraFeatures, auraScreenshots } from './config';

const Feature = ({ icon, text }) => (
  <div className={styles.feature}>
    <div className={styles.featureIcon}>{icon}</div>
    <div className={styles.featureText}>{text}</div>
  </div>
);

Feature.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

const AuraModal = ({ isOpen, onClose, ruStoreUrl = 'https://www.rustore.ru/catalog/app/ms.aura.walletapp.release' }) => {
  const dialogRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        // Basic focus trap
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusable = dialog.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    previouslyFocusedElementRef.current = document.activeElement;
    bodyScrollLocker.lock();
    document.addEventListener('keydown', handleKeyDown);

    // Set initial focus inside dialog
    const toFocus = dialogRef.current?.querySelector('[data-autofocus]') || dialogRef.current;
    if (toFocus) {
      toFocus.focus({ preventScroll: true });
    }

    return () => {
      bodyScrollLocker.unlock();
      document.removeEventListener('keydown', handleKeyDown);
      // Restore focus
      if (previouslyFocusedElementRef.current && typeof previouslyFocusedElementRef.current.focus === 'function') {
        previouslyFocusedElementRef.current.focus({ preventScroll: true });
      }
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const featureList = auraFeatures;
  const screenshots = auraScreenshots;

  if (!isOpen) return null;

  const modal = (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="aura-title"
        aria-describedby="aura-subtitle"
        ref={dialogRef}
        tabIndex={-1}
      >
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
              onError={(e) => setImageFallback(e, '/logo.jpg')}
              loading="lazy"
            />
            <h2 id="aura-title" className={styles.title}>Aura Wallet</h2>
            <p id="aura-subtitle" className={styles.subtitle}>Ваш цифровой кошелёк в смартфоне</p>
          </div>

          <div className={styles.featuresGrid}>
            {featureList.map((f) => (
              <Feature key={f.key} icon={FeatureIcons[f.key]} text={f.text} />
            ))}
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
                  onError={(e) => setImageFallback(e, '/logo.jpg')}
                />
              ))}
            </div>
          </div>

          <div className={styles.ctaRow}>
            <a href={ruStoreUrl} target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.ctaButton}`} aria-label="RuStore" data-autofocus>
              <RuStoreIcon />
              <span>RuStore</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
};

AuraModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  ruStoreUrl: PropTypes.string,
};

export default AuraModal; 