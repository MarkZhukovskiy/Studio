import React, { useEffect, useRef } from 'react';
import styles from './PricingTimeline.module.css';

const PricingTimeline = ({ data, onOpenModal }) => {
  const { title, subtitle, pricingNote, includedFeatures } = data;
  const sectionRef = useRef(null);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      // Наблюдаем за секциями
      const sections = sectionRef.current.querySelectorAll(`[class*="pricingSection"], [class*="featuresSection"]`);
      sections.forEach((section) => {
        observer.observe(section);
      });

      // Наблюдаем за элементами с анимацией
      const animatedItems = sectionRef.current.querySelectorAll(`[class*="featureItem"]`);
      animatedItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
      });
    }

    return () => observer.disconnect();
  }, []);



  return (
    <section className={styles.pricingTimeline} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.content}>

          {/* Секция с ценами */}
          <div className={styles.pricingSection}>

            
            <div className={styles.pricingTable}>
              <div className={styles.pricingRow}>
                <div className={styles.pricingCell}>
                  <span className={styles.pricingLabel}>Простое приложение</span>
                  <span className={styles.pricingValue}>500 000 ₽</span>
                  <span className={styles.pricingDescription}>Базовый функционал, 1 платформа</span>
                </div>
                <div className={styles.pricingCell}>
                  <span className={styles.pricingLabel}>Средний проект</span>
                  <span className={styles.pricingValue}>1 500 000 ₽</span>
                  <span className={styles.pricingDescription}>Расширенный функционал, 2 платформы</span>
                </div>
                <div className={styles.pricingCell}>
                  <span className={styles.pricingLabel}>Сложное решение</span>
                  <span className={styles.pricingValue}>от 3 000 000 ₽</span>
                  <span className={styles.pricingDescription}>Сложная логика, интеграции, аналитика</span>
                </div>
              </div>
            </div>
            
            <div className={styles.pricingNote}>
              <p>{pricingNote}</p>
            </div>
          </div>

          {/* Секция с функциями */}
          <div className={styles.featuresSection}>

            
            <div className={styles.featuresGrid}>
              {includedFeatures.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span className={styles.featureText}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <button 
            className={styles.ctaButton}
            onClick={() => onOpenModal && onOpenModal()}
          >
            <span>Получить индивидуальное предложение</span>
            <div className={styles.buttonGlow}></div>
            <svg className={styles.buttonArrow} viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingTimeline; 