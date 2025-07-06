import React, { useEffect, useRef } from 'react';
import styles from './ProjectsOverview.module.css';

const ProjectsOverview = ({ data, onOpenModal }) => {
  const { title, subtitle, projects } = data;
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
      const cards = sectionRef.current.querySelectorAll('[class*="projectCard"]');
      if (cards) {
        cards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.15}s`;
          observer.observe(card);
        });
      }
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category) => {
    const icons = {
      'Мобильная разработка': '📱',
      'Веб-разработка': '🌐',
      'Финтех': '💳',
      'E-commerce': '🛒',
      'CRM система': '📊',
      'API интеграция': '🔗',
      'UI/UX дизайн': '🎨'
    };
    return icons[category] || '🚀';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Мобильная разработка': styles.categoryMobile,
      'Веб-разработка': styles.categoryWeb,
      'Финтех': styles.categoryFintech,
      'E-commerce': styles.categoryEcommerce,
      'CRM система': styles.categoryCrm,
      'API интеграция': styles.categoryApi,
      'UI/UX дизайн': styles.categoryDesign
    };
    return colors[category] || styles.categoryDefault;
  };

  return (
    <section className={styles.projectsOverview} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.titleAccent}></div>
          </div>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={`${styles.category} ${getCategoryColor(project.category)}`}>
                  <span className={styles.categoryIcon}>
                    {getCategoryIcon(project.category)}
                  </span>
                  <span className={styles.categoryText}>{project.category}</span>
                </div>
                <div className={styles.projectStatus}>
                  <span className={styles.statusDot}></span>
                  Завершен
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectStats}>
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className={styles.stat}>
                      <div className={styles.statCircle}>
                        <span className={styles.statValue}>{value}</span>
                      </div>
                      <span className={styles.statLabel}>{key}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.projectFooter}>
                <button 
                  className={styles.projectButton}
                  onClick={() => onOpenModal && onOpenModal()}
                >
                  <span>Узнать больше</span>
                  <svg className={styles.buttonArrow} viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className={styles.cardOverlay}></div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <button 
            className={styles.ctaButton}
            onClick={() => onOpenModal && onOpenModal()}
          >
            <span>Посмотреть все проекты</span>
            <div className={styles.ctaButtonGlow}></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview; 