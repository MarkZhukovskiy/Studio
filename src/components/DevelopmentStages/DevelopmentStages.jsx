import React, { useEffect, useRef } from 'react';
import styles from './DevelopmentStages.module.css';

const DevelopmentStages = ({ data, onOpenModal }) => {
  const { title, subtitle, stages: dataStages } = data;

  const getStepIcon = (index) => {
    switch (index % 8) {
      case 0:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 16V10M12 16V6M17 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 1:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7 4H14L19 9V20H7V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M14 4V9H19" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M9 13H17M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 2:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 10H20M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 3:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 21l3-3L18.5 5.5a2.121 2.121 0 013 3L9 21h-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 7l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 4:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M8 9l-3 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 9l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 5:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 6:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 19l4-1 8-8a3 3 0 10-4-4l-8 8-1 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 7l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 7:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 10l10-4v12L3 14v-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M13 8l4-2v12l-4-2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M7 16l1.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
    }
  };

  const steps = [
    {
      id: 1,
      title: 'Проектирование',
      text: 'Анализ идеи, прототипы',
      duration: '1–2 недели',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 8H17M7 12H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Дизайн',
      text: 'UX/UI, макеты',
      duration: '2–4 недели',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21l3-3L18.5 5.5a2.121 2.121 0 013 3L9 21l-6 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 7l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Разработка',
      text: 'Код, интеграции',
      duration: '1–4 месяца',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 9l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Тестирование',
      text: 'QA, исправления',
      duration: '1 неделя',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Запуск и поддержка',
      text: 'Публикация, поддержка',
      duration: 'Публикация: 3–5 дней • Поддержка: постоянно',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 19l4-1 8-8a4 4 0 00-5.657-5.657L7 10l-1 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 7l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const computedSteps = (Array.isArray(dataStages) && dataStages.length
    ? dataStages.map((s, i) => ({
        id: s.id ?? i + 1,
        title: s.title,
        text: s.description,
        duration: s.duration,
        icon: getStepIcon(i)
      }))
    : steps);

  const cardRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.developmentStages}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.stepsWrapper}>
          <ol className={styles.stepsGrid} role="list">
            {computedSteps.map((step, index, arr) => (
              <li
                key={step.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`${styles.stepCard} ${index === 0 || index === arr.length - 1 ? styles.stepCardAccent : ''} ${styles[`variant${(index % 8) + 1}`]}`}
                role="listitem"
                aria-label={`Этап ${index + 1}: ${step.title}. Срок: ${step.duration || ''}`}
                data-step={index + 1}
              >
                <div className={styles.stepBadge} aria-hidden="true">{index + 1}</div>
                <div className={styles.stepIcon}>{step.icon ?? null}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <div className={styles.stepDuration} title={step.duration}>{step.duration}</div>
                <p className={styles.stepText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.cta}>
          <button 
            className={`${styles.ctaButton} btn-primary`}
            onClick={() => onOpenModal && onOpenModal()}
          >
            <span>Узнать, сколько времени потребуется на ваш проект</span>
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

export default DevelopmentStages; 