import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './WhyChooseUs.module.css';

/**
 * WhyChooseUs — блок с преимуществами компании.
 *
 * @param {Object[]} advantages - массив преимуществ ({ icon, title, description }).
 * @param {string} title - заголовок блока.
 * @param {Object} ctaButton - кнопка призыва к действию ({ label, onClick }).
 * @returns JSX.Element
 */
function WhyChooseUs({ 
  advantages = [], 
  title = "Почему выбирают нас",
  ctaButton 
}) {
  const sectionRef = useRef(null);

  // Упрощенная анимация без Intersection Observer
  useEffect(() => {
    // Простая задержка для анимации появления
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.style.opacity = '1';
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const defaultAdvantages = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#2563EB" opacity="0.1"/>
          <path d="M16 24L22 30L32 18" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="20" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.3"/>
        </svg>
      ),
      title: "5 лет на рынке",
      description: "Богатый опыт в разработке мобильных приложений и веб-сервисов"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#06B6D4" opacity="0.1"/>
          <circle cx="20" cy="18" r="4" fill="#06B6D4"/>
          <circle cx="28" cy="18" r="4" fill="#06B6D4"/>
          <circle cx="16" cy="26" r="4" fill="#06B6D4"/>
          <circle cx="24" cy="26" r="4" fill="#06B6D4"/>
          <circle cx="32" cy="26" r="4" fill="#06B6D4"/>
          <circle cx="20" cy="34" r="4" fill="#06B6D4"/>
          <circle cx="28" cy="34" r="4" fill="#06B6D4"/>
        </svg>
      ),
      title: "16 профессиональных сотрудников",
      description: "Команда экспертов в различных технологиях разработки"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#10B981" opacity="0.1"/>
          <rect x="12" y="16" width="8" height="16" rx="2" fill="#10B981"/>
          <rect x="24" y="12" width="8" height="20" rx="2" fill="#10B981"/>
          <rect x="36" y="20" width="8" height="12" rx="2" fill="#10B981"/>
          <path d="M12 32L24 28L36 32" stroke="#10B981" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "Кроссплатформенные и нативные решения",
      description: "Подбираем оптимальную технологию под ваши задачи"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#F59E0B" opacity="0.1"/>
          <path d="M16 20L24 28L32 20" stroke="#F59E0B" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="16" r="3" fill="#F59E0B"/>
          <path d="M12 36L20 32L28 32L36 36" stroke="#F59E0B" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "Поддержка и сопровождение проектов",
      description: "Обеспечиваем долгосрочную работу ваших приложений"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#8B5CF6" opacity="0.1"/>
          <circle cx="24" cy="20" r="6" fill="#8B5CF6"/>
          <path d="M16 32C16 28.6863 19.5817 26 24 26C28.4183 26 32 28.6863 32 32" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
          <path d="M18 14L22 18L26 14" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "Индивидуальный подход к каждому клиенту",
      description: "Учитываем особенности вашего бизнеса и потребности"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#EF4444" opacity="0.1"/>
          <path d="M16 16L24 24L32 16" stroke="#EF4444" strokeWidth="2" fill="none"/>
          <path d="M16 32L24 24L32 32" stroke="#EF4444" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="24" r="2" fill="#EF4444"/>
        </svg>
      ),
      title: "Современные технологии и интеграции",
      description: "Используем актуальные инструменты для лучшего результата"
    }
  ];

  const advantagesToShow = advantages.length > 0 ? advantages : defaultAdvantages;

  // Отладочная информация
  console.log('WhyChooseUs render:', { title, advantagesToShow, ctaButton });

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        
        <div className={styles.advantagesGrid}>
          {advantagesToShow.map((advantage, index) => (
            <div 
              key={index} 
              className={styles.advantageCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {advantage.icon}
              </div>
              <h3 className={styles.advantageTitle}>{advantage.title}</h3>
              <p className={styles.advantageDescription}>{advantage.description}</p>
            </div>
          ))}
        </div>

        {ctaButton && (
          <div className={styles.ctaWrapper}>
            <button 
              className={styles.ctaButton}
              onClick={ctaButton.onClick}
            >
              {ctaButton.label}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

WhyChooseUs.propTypes = {
  advantages: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
  ctaButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};

export default React.memo(WhyChooseUs); 