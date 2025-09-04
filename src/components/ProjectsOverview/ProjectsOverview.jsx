import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectsOverview.module.css';

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.365 1.43c0 1.14-.466 2.243-1.212 3.05-.77.83-2.06 1.47-3.137 1.43-.15-1.1.453-2.27 1.206-3.05.79-.81 2.18-1.44 3.143-1.43zM20.38 17.02c-.6 1.37-.9 1.98-1.68 3.2-1.09 1.69-2.63 3.79-4.54 3.8-1.66.02-2.1-1.12-4.39-1.1-2.3.02-2.78 1.12-4.45 1.1-1.91-.02-3.37-1.92-4.47-3.6-3.07-4.75-3.4-10.32-1.5-13.26 1.35-2.15 3.48-3.41 5.48-3.41 2.03 0 3.31 1.13 4.99 1.13 1.66 0 2.64-1.13 5-1.13 1.84 0 3.8.99 5.13 2.69-4.51 2.47-3.78 8.94.78 10.18-.23.69-.52 1.27-.93 1.99z"/>
  </svg>
);

const AndroidIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.6 9.48l1.7-2.94c.15-.27.06-.61-.21-.76-.27-.15-.61-.06-.76.21l-1.76 3.05c-1.06-.47-2.25-.73-3.57-.73s-2.51.26-3.57.73L6.67 6c-.15-.27-.49-.36-.76-.21-.27.15-.36.49-.21.76l1.7 2.94C5.57 10.4 4 12.52 4 15v4c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55.45 1 1 1h2v-5h2v5h2c.55 0 1-.45 1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-4c0-2.48-1.57-4.6-3.73-5.52zM9 4.5c0-.28.22-.5.5-.5s.5.22.5.5S9.78 5 9.5 5 9 4.78 9 4.5zm5 0c0-.28.22-.5.5-.5s.5.22.5.5S14.78 5 14.5 5 14 4.78 14 4.5z"/>
  </svg>
);

const WebIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9H16.9c-.1-2.02-.6-3.86-1.36-5.24 2.09.86 3.53 2.66 4.39 5.24zM12 4.07c.97 0 2.33 1.9 2.72 5.93H9.28C9.67 5.97 11.03 4.07 12 4.07zM4.07 13h3.03c.1 2.02.6 3.86 1.36 5.24-2.09-.86-3.53 2.66-4.39 5.24zM7.1 11H4.07C4.93 8.42 6.37 6.62 8.46 5.76 7.7 7.14 7.2 8.98 7.1 11zM12 19.93c-.97 0-2.33-1.9-2.72-5.93h5.44c-.39 4.03-1.75 5.93-2.72 5.93zM15.54 18.24c.76-1.38 1.26-3.22 1.36-5.24h3.03c-.86 2.58-2.3 4.38-4.39 5.24z"/>
  </svg>
);

function ProjectCard({ project }) {
  const firstLetter = project.title ? project.title.charAt(0).toUpperCase() : 'P';
  const caseUrl = project.caseUrl || project.links?.site || '#';

  return (
    <div className={styles.card}>
      {project.cover && (
        <div className={styles.cover}>
          <img src={project.cover} alt={project.title} className={styles.coverImage} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <div className={styles.coverOverlay} />
        </div>
      )}
      <div className={styles.cardBody}>
        <div className={styles.iconWrapper} aria-hidden="true">
          {project.icon ? (
            <img src={project.icon} alt="" style={{ width: 28, height: 28 }} />
          ) : (
            firstLetter
          )}
        </div>
        <div className={styles.meta}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.category}>{project.category}</div>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.platforms}>
            {project.platforms?.map((p, index) => {
              let Icon = null;
              if (p.type === 'ios') Icon = AppleIcon;
              if (p.type === 'android') Icon = AndroidIcon;
              if (p.type === 'web') Icon = WebIcon;
              return (
                <a
                  key={`${p.type}-${index}`}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platformLink}
                  aria-label={p.type}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <a href={caseUrl} target="_blank" rel="noopener noreferrer" className={styles.moreButton}>
          Подробнее
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string,
    cover: PropTypes.string,
    caseUrl: PropTypes.string,
    platforms: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(['ios', 'android', 'web']).isRequired,
        url: PropTypes.string.isRequired
      })
    ),
    links: PropTypes.shape({
      site: PropTypes.string,
      appStore: PropTypes.string,
      ruStore: PropTypes.string,
      googlePlay: PropTypes.string
    })
  }).isRequired
};

function ProjectsOverview({ data }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const projects = Array.isArray(data) ? data : [];
  const filtered = useMemo(() => (
    activeCategory === 'all' ? projects : projects.filter(p => p.category?.toLowerCase().includes(activeCategory))
  ), [projects, activeCategory]);

  const gridRef = useRef(null);
  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll(`.${styles.card}`));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add(styles.inView);
      });
    }, { threshold: 0.15 });
    cards.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, [filtered]);

  const categories = useMemo(() => {
    const base = ['all'];
    const set = new Set();
    projects.forEach(p => {
      if (p.category) set.add(p.category);
    });
    return [...base, ...Array.from(set)];
  }, [projects]);

  return (
    <section className={styles.projectsOverview}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Наши проекты</h2>
          <div className={styles.sectionSubtitle}>Реализуем идеи стартапов и компаний в работающие продукты</div>
          <div className={styles.sectionStats}>{projects.length} реализованных приложений</div>
        </div>

        <div className={styles.filters}>
          {categories.map(cat => {
            const value = cat === 'all' ? 'all' : cat.toLowerCase();
            const active = activeCategory === value;
            return (
              <button
                key={cat}
                className={`${styles.chip} ${active ? styles.chipActive : ''}`}
                onClick={() => setActiveCategory(value)}
              >
                {cat === 'all' ? 'Все' : cat}
              </button>
            );
          })}
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.edgeFadeLeft} />
          <div className={styles.edgeFadeRight} />

          <button
            className={`${styles.navButton} ${styles.navLeft}`}
            onClick={() => {
              if (!gridRef.current) return;
              gridRef.current.scrollBy({ left: -400, behavior: 'smooth' });
            }}
            aria-label="Назад"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            className={`${styles.navButton} ${styles.navRight}`}
            onClick={() => {
              if (!gridRef.current) return;
              gridRef.current.scrollBy({ left: 400, behavior: 'smooth' });
            }}
            aria-label="Вперёд"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.carousel} ref={gridRef}>
            {filtered.map((project) => (
              <ProjectCard key={project.id || project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

ProjectsOverview.propTypes = {
  data: PropTypes.arrayOf(ProjectCard.propTypes.project)
};

export default ProjectsOverview; 