import React from 'react';
import styles from './ConsultationBlock.module.css';

const ConsultationBlock = ({ data, onOpenModal }) => {
  const { title, description, buttonText } = data;

  return (
    <section className={styles.consultationBlock}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className={styles.featureText}>Бесплатная консультация</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <span className={styles.featureText}>Быстрый ответ в течение 24 часов</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/>
                    <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"/>
                    <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"/>
                    <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"/>
                  </svg>
                </div>
                <span className={styles.featureText}>Индивидуальный подход</span>
              </div>
            </div>
          </div>
          
          <div className={styles.ctaSection}>
            <button 
              className={styles.ctaButton}
              onClick={onOpenModal}
            >
              <span className={styles.buttonText}>{buttonText}</span>
              <svg 
                className={styles.buttonIcon} 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBlock; 