import React, { useEffect, useRef } from 'react';
import styles from './DevelopmentStages.module.css';

const IconDesign = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l4 4-10 10-4-4L12 2z"/>
    <path d="M3 21h6"/>
  </svg>
);

const IconPlan = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v4H3z"/>
    <path d="M7 7v14"/>
    <path d="M3 11h18"/>
  </svg>
);

const IconCode = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 18l6-6-6-6"/>
    <path d="M8 6l-6 6 6 6"/>
  </svg>
);

const IconLaunch = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7"/>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const DevelopmentStages = ({ data, onOpenModal }) => {
  const { title, subtitle } = data;
  const sectionRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll(`.${styles.item}`));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.inView); });
    }, { threshold: 0.15 });
    items.forEach(i => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      icon: <IconPlan />,
      title: 'Проектирование',
      desc: 'Анализ идеи, ТЗ и прототипы.'
    },
    {
      id: 2,
      icon: <IconDesign />,
      title: 'Дизайн',
      desc: 'UX/UI, дизайн‑система, макеты.'
    },
    {
      id: 3,
      icon: <IconCode />,
      title: 'Разработка и тесты',
      desc: 'Код, интеграции, QA.'
    },
    {
      id: 4,
      icon: <IconLaunch />,
      title: 'Запуск и поддержка',
      desc: 'Публикация и техподдержка.'
    }
  ];

  return (
    <section className={styles.developmentStages} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.items}>
            {steps.map((s, i) => (
              <div key={s.id} className={styles.item} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.icon}>{s.icon}</div>
                <h3 className={styles.itemTitle}>{s.title}</h3>
                <p className={styles.itemDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <button 
            className={`${styles.ctaButton} ${styles.visible}`}
            onClick={() => onOpenModal && onOpenModal()}
          >
            <span>Начать проект</span>
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