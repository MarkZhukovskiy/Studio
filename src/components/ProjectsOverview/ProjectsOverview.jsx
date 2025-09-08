import React from 'react';
import styles from './ProjectsOverview.module.css';

const IOSIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16.365 12.936c-.03-3.237 2.642-4.787 2.761-4.861-1.51-2.205-3.85-2.504-4.676-2.536-1.989-.203-3.878 1.173-4.882 1.173-1.022 0-2.564-1.147-4.22-1.114-2.164.034-4.173 1.261-5.286 3.198-2.268 3.936-.576 9.742 1.63 12.93 1.079 1.55 2.347 3.291 4.02 3.231 1.626-.065 2.235-1.044 4.197-1.044 1.946 0 2.512 1.044 4.219 1.008 1.748-.028 2.853-1.582 3.924-3.14 1.239-1.8 1.748-3.548 1.774-3.638-.039-.018-3.401-1.306-3.461-5.207z" fill="currentColor"/>
    <path d="M14.066 3.9c.88-1.067 1.474-2.556 1.312-4.04-1.268.052-2.825.854-3.739 1.922-.823.953-1.538 2.49-1.344 3.944 1.423.11 2.891-.72 3.771-1.826z" fill="currentColor"/>
  </svg>
);

const AndroidIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 8.5C7 7.12 8.12 6 9.5 6H14.5C15.88 6 17 7.12 17 8.5V17.5C17 18.88 15.88 20 14.5 20H9.5C8.12 20 7 18.88 7 17.5V8.5Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 4L8.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 4L15.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="10" cy="8" r="0.75" fill="currentColor"/>
    <circle cx="14" cy="8" r="0.75" fill="currentColor"/>
  </svg>
);

const WebIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 3C9.5 6.5 8.25 9.75 8.25 12C8.25 14.25 9.5 17.5 12 21C14.5 17.5 15.75 14.25 15.75 12C15.75 9.75 14.5 6.5 12 3Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ProjectsOverview = ({ data, onOpenCase }) => {
  const { title, subtitle, projects, viewAllUrl, viewAllLabel, tags } = data;

  const repeatTimes = 4; // original + 3 duplicates
  const displayProjects = Array.from({ length: repeatTimes }, () => projects).flat();

  const handleMoreClick = (e, project) => {
    if (!onOpenCase) return; 
    const handled = onOpenCase(project);
    if (handled) {
      e.preventDefault();
    }
  };

  return (
    <section className={styles.projectsOverview}>
      <div className={styles.backgroundIcons} aria-hidden="true">
        <svg className={`${styles.icon} ${styles.icon1}`} viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none" strokeOpacity="0.65" />
        </svg>
        <svg className={`${styles.icon} ${styles.icon2}`} viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <polygon points="32 12, 52 52, 12 52" stroke="currentColor" strokeWidth="2" fill="none" strokeOpacity="0.65" />
        </svg>
        <svg className={`${styles.icon} ${styles.icon3}`} viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <path d="M32 12 L32 52 M12 32 L52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.65" />
        </svg>
        <svg className={`${styles.icon} ${styles.icon4}`} viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <rect x="20" y="20" width="24" height="24" rx="3" transform="rotate(45 32 32)" stroke="currentColor" strokeWidth="2" fill="none" strokeOpacity="0.65" />
        </svg>
        <svg className={`${styles.icon} ${styles.icon5}`} viewBox="0 0 64 64" focusable="false" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.65">
            <circle cx="20" cy="20" r="2" />
            <circle cx="32" cy="20" r="2" />
            <circle cx="44" cy="20" r="2" />
            <circle cx="26" cy="32" r="2" />
            <circle cx="38" cy="32" r="2" />
            <circle cx="32" cy="44" r="2" />
          </g>
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          {(tags && tags.length > 0) && (
            <div className={styles.tags}>
              {tags.map((tag, idx) => (
                <span key={tag} className={`${styles.tag} ${styles[`tagVariant${(idx % 6) + 1}`]}`}>{tag}</span>
              ))}
            </div>
          )}
        </div>

        <div className={styles.grid}>
          {displayProjects.map((project, idx) => (
            <div key={`${project.id}-${idx}`} className={styles.card}>
              <div className={styles.logoWrapper}>
                {project.icon ? (
                  <img className={styles.logo} src={project.icon} alt={`${project.name} logo`} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.jpg'; }} />
                ) : (
                  <div className={styles.logoPlaceholder}>{project.name?.slice(0, 2) || 'PR'}</div>
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                {project.category && (
                  <div className={styles.category}>{project.category}</div>
                )}
                <p className={styles.description}>{project.description}</p>

                {project.tags?.length > 0 && (
                  <div className={styles.cardTags}>
                    {project.tags.map((tag, idx) => (
                      <span key={tag} className={`${styles.tag} ${styles[`tagVariant${(idx % 6) + 1}`]}`}>{tag}</span>
                    ))}
                  </div>
                )}

                <a
                  href={project.caseUrl}
                  className={styles.moreButton}
                  onClick={(e) => handleMoreClick(e, project)}
                  aria-label={`Подробнее о проекте ${project.name}`}
                >
                  Подробнее
                </a>

                <div className={styles.platforms}>
                  {project.platforms?.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      className={styles.platformLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform.name}
                      title={platform.name}
                    >
                      {platform.name === 'iOS' && <IOSIcon />}
                      {platform.name === 'Android' && <AndroidIcon />}
                      {platform.name === 'Web' && <WebIcon />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview; 