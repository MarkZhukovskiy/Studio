import React, { useEffect, useRef } from 'react';
import styles from './PricingTimeline.module.css';

const PricingTimeline = ({ data, onOpenModal }) => {
  const { title, subtitle, timelineStages, pricingRange, pricingNote, includedFeatures } = data;
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
      const sections = sectionRef.current.querySelectorAll(`[class*="timelineSection"], [class*="pricingSection"], [class*="featuresSection"]`);
      sections.forEach((section) => {
        observer.observe(section);
      });

      // Наблюдаем за элементами с анимацией
      const animatedItems = sectionRef.current.querySelectorAll(`[class*="timelineItem"], [class*="featureItem"]`);
      animatedItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
      });
    }

    return () => observer.disconnect();
  }, []);

  const getStageIcon = (stageName) => {
    const stageIcons = {
      'Анализ и исследование': (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'UX/UI дизайн': (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      'Архитектура и планирование': (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'Разработка MVP': (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'Тестирование и оптимизация': (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      'Публикация в сторах': (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M18 13V19A2 2 0 0 1 16 21H8A2 2 0 0 1 6 19V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="15 9 12 12 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="12" x2="12" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'Поддержка': (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    return stageIcons[stageName] || stageIcons['Разработка MVP'];
  };

  return (
    <section className={styles.pricingTimeline} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.content}>
          {/* Таймлайн этапов разработки */}
          <div className={styles.timelineSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Этапы разработки</h3>
              <p className={styles.sectionDescription}>
                Полный цикл создания мобильного приложения от идеи до публикации
              </p>
            </div>
            
            <div className={styles.timeline}>
              {timelineStages.map((item, index) => (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.timelineDot}>
                    <div className={styles.timelineIcon}>
                      {getStageIcon(item.stage)}
                    </div>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h4 className={styles.timelineTitle}>{item.stage}</h4>
                      <span className={styles.timelineDuration}>{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Секция с ценами */}
          <div className={styles.pricingSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Стоимость разработки</h3>
              <p className={styles.sectionDescription}>
                Прозрачное ценообразование для мобильных приложений
              </p>
            </div>
            
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
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Что входит в стоимость</h3>
              <p className={styles.sectionDescription}>
                Полный спектр услуг для успешного запуска мобильного приложения
              </p>
            </div>
            
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