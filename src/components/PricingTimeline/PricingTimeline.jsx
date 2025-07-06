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
      const cardItems = sectionRef.current.querySelectorAll('[class*="pricingCard"]');
      if (cardItems) {
        cardItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.15}s`;
          observer.observe(item);
        });
      }
    }

    return () => observer.disconnect();
  }, []);

  const getCardIcon = (cardType) => {
    const icons = {
      timeline: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.cardSvg}>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      pricing: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.cardSvg}>
          <path d="M12 1V3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 21V23" stroke="currentColor" strokeWidth="2"/>
          <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2"/>
          <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2"/>
          <path d="M1 12H3" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 12H23" stroke="currentColor" strokeWidth="2"/>
          <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2"/>
          <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      features: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.cardSvg}>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    };
    return icons[cardType] || icons.timeline;
  };

  return (
    <section className={styles.pricingTimeline} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Карточка с этапами разработки */}
          <div className={styles.pricingCard}>
            <div className={styles.cardBackground}>
              <div className={styles.cardNumber}>01</div>
              <div className={styles.cardGlow}></div>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                {getCardIcon('timeline')}
              </div>
              
              <h3 className={styles.cardTitle}>Этапы разработки и сроки</h3>
              
              <div className={styles.timelineList}>
                {timelineStages.map((item, index) => (
                  <div key={item.id} className={styles.timelineItem}>
                    <div className={styles.timelineInfo}>
                      <span className={styles.timelineName}>{item.stage}</span>
                    </div>
                    <div className={styles.timelineDuration}>
                      <span className={styles.durationText}>{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Карточка со стоимостью */}
          <div className={styles.pricingCard}>
            <div className={styles.cardBackground}>
              <div className={styles.cardNumber}>02</div>
              <div className={styles.cardGlow}></div>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                {getCardIcon('pricing')}
              </div>
              
              <h3 className={styles.cardTitle}>Стоимость разработки</h3>
              
              <div className={styles.pricingInfo}>
                <div className={styles.pricingRange}>{pricingRange}</div>
                <div className={styles.pricingNote}>{pricingNote}</div>
              </div>
            </div>
          </div>

          {/* Карточка с включенными функциями */}
          <div className={styles.pricingCard}>
            <div className={styles.cardBackground}>
              <div className={styles.cardNumber}>03</div>
              <div className={styles.cardGlow}></div>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                {getCardIcon('features')}
              </div>
              
              <h3 className={styles.cardTitle}>Что входит в стоимость</h3>
              
              <div className={styles.featuresList}>
                {includedFeatures.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
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