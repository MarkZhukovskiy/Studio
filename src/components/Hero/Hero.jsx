import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const defaultIllustration = {
  svg: '/images/hero-illustration.svg',
  alt: 'Мокап мобильного приложения на экране смартфона'
};

const Hero = ({ 
  title = "Разработка мобильных приложений и сервисов",
  subtitle = "Знаем, как решить вашу задачу оптимальным способом",
  description = "Подберем подходящее решение с учетом целей и возможностей",
  primaryAction = { label: 'Заказать приложение', onClick: () => {} },
  variant = 'default', // 'default', 'alt', 'gradient'
  utp = [],
  onScroll,
  illustration = defaultIllustration
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(30px)';
      setTimeout(() => {
        hero.style.transition = 'all 0.6s ease-out';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* SVG-анимации на фоне */}
      <svg className={styles.svgBgAnimated} style={{left: '5%', top: '10%', width: '100px', height: '100px'}} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#3B82F6" opacity="0.08" />
        <circle cx="50" cy="50" r="25" fill="#06B6D4" opacity="0.12" />
      </svg>
      <svg className={styles.svgBgAnimated2} viewBox="0 0 120 120" fill="none">
        <rect x="20" y="20" width="80" height="80" rx="30" fill="#2563EB" opacity="0.07" />
        <rect x="40" y="40" width="40" height="40" rx="20" fill="#1D4ED8" opacity="0.10" />
      </svg>
      <svg className={styles.svgBgAnimated3} viewBox="0 0 90 90" fill="none">
        <ellipse cx="45" cy="45" rx="40" ry="20" fill="#10B981" opacity="0.08" />
        <ellipse cx="45" cy="45" rx="20" ry="10" fill="#F59E0B" opacity="0.10" />
      </svg>
      <svg className={styles.svgBgAnimated4} viewBox="0 0 80 80" fill="none">
        <polygon points="40,10 70,70 10,70" fill="#F59E0B" opacity="0.08" />
        <polygon points="40,25 60,65 20,65" fill="#3B82F6" opacity="0.10" />
      </svg>
      <svg className={styles.svgBgAnimated5} viewBox="0 0 110 110" fill="none">
        <rect x="20" y="20" width="70" height="70" rx="35" fill="#06B6D4" opacity="0.07" />
        <circle cx="55" cy="55" r="30" fill="#2563EB" opacity="0.09" />
      </svg>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <p className={styles.description}>{description}</p>
            {utp && utp.length > 0 && (
              <div className={styles.utpBlock}>
                {utp.map((item, index) => (
                  <div key={index} className={styles.utpItem}>
                    <div className={styles.utpIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className={styles.utpText}>{item}</span>
                  </div>
                ))}
              </div>
            )}
            <div className={styles.buttons}>
              <button
                className={`btn-primary ${styles.primaryButton}`}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </button>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div 
              className={styles.phoneContainer}
            >
              <picture>
                {illustration.svg && (
                  <source type="image/svg+xml" srcSet={illustration.svg} />
                )}
                <img
                  className={styles.illustrationImg}
                  src={illustration.svg}
                  alt={illustration.alt || 'Мокап мобильного приложения'}
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/hero-illustration.svg'; }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
