import React, { useEffect, useRef } from 'react';
import styles from './ServicesHero.module.css';

const ServicesHero = () => {
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
      const elements = sectionRef.current.querySelectorAll('[class*="animate"]');
      elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.servicesHero} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={`${styles.title} ${styles.animate}`}>
              Девять шагов разработки мобильных приложений
            </h1>
            
            <p className={`${styles.subtitle} ${styles.animate}`}>
              Выбирайте только то, что потребуется именно вам, проставляя галочки в чекбоксах ниже, в зависимости от того, на какой стадии сейчас находится проект.
            </p>
            
            <p className={`${styles.description} ${styles.animate}`}>
              Мы также берем проекты на доработку и развитие. Перед началом работ проводим аудит состояния проекта и даем рекомендации по возможным улучшениям.
            </p>
          </div>
          
          <div className={styles.visualContent}>
            <div className={`${styles.illustration} ${styles.animate}`}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Основной круг */}
                <circle cx="100" cy="100" r="80" stroke="url(#gradient1)" strokeWidth="3" fill="none" opacity="0.8"/>
                
                {/* Внутренние круги */}
                <circle cx="100" cy="100" r="60" stroke="url(#gradient2)" strokeWidth="2" fill="none" opacity="0.6"/>
                <circle cx="100" cy="100" r="40" stroke="url(#gradient3)" strokeWidth="2" fill="none" opacity="0.4"/>
                
                {/* Центральная иконка */}
                <g transform="translate(70, 70)">
                  <rect x="20" y="10" width="40" height="60" rx="4" stroke="url(#gradient4)" strokeWidth="2" fill="none"/>
                  <rect x="24" y="14" width="32" height="52" rx="2" fill="url(#gradient5)" opacity="0.1"/>
                  <circle cx="40" cy="70" r="2" fill="url(#gradient4)"/>
                  
                  {/* Элементы интерфейса */}
                  <rect x="28" y="20" width="24" height="2" rx="1" fill="url(#gradient4)" opacity="0.6"/>
                  <rect x="28" y="24" width="20" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="26" width="18" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="28" width="22" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="30" width="16" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="32" width="20" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="34" width="14" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="36" width="18" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="38" width="16" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="40" width="20" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="42" width="14" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="44" width="18" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="46" width="16" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="48" width="20" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="50" width="14" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="52" width="18" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                  <rect x="28" y="54" width="16" height="1" rx="0.5" fill="url(#gradient4)" opacity="0.4"/>
                </g>
                
                {/* Анимированные точки */}
                <circle cx="30" cy="30" r="3" fill="url(#gradient4)" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="170" cy="40" r="2" fill="url(#gradient4)" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="160" cy="160" r="2.5" fill="url(#gradient4)" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="40" cy="170" r="2" fill="url(#gradient4)" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite"/>
                </circle>
                
                {/* Градиенты */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6"/>
                    <stop offset="100%" stopColor="#1E40AF"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#93C5FD"/>
                    <stop offset="100%" stopColor="#60A5FA"/>
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
                  </linearGradient>
                  <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DBEAFE"/>
                    <stop offset="100%" stopColor="#BFDBFE"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className={styles.decorations}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>
    </section>
  );
};

export default ServicesHero; 