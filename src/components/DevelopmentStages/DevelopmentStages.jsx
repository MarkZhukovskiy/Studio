import React, { useEffect, useRef } from 'react';
import styles from './DevelopmentStages.module.css';

const DevelopmentStages = ({ data, onOpenModal }) => {
  const { title, subtitle } = data;
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
      const stageItems = sectionRef.current.querySelectorAll('[class*="stageCard"]');
      if (stageItems) {
        stageItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.15}s`;
          observer.observe(item);
        });
      }
    }

    return () => observer.disconnect();
  }, []);

  // Новый контент для этапов
  const customStages = [
    {
      id: 1,
      title: "Анализ и исследование",
      description: "Глубокий анализ рынка, конкурентов и целевой аудитории. Изучаем потребности пользователей и определяем ключевые функции приложения.",
      duration: "3-5 дней",
      deliverables: ["Анализ конкурентов", "Портрет пользователя", "Техническое обоснование"]
    },
    {
      id: 2,
      title: "UX/UI дизайн",
      description: "Создаем интуитивный интерфейс с современным дизайном. Проектируем пользовательский опыт от первого клика до завершения задачи.",
      duration: "7-10 дней",
      deliverables: ["Wireframes", "UI Kit", "Интерактивный прототип"]
    },
    {
      id: 3,
      title: "Архитектура и планирование",
      description: "Разрабатываем техническую архитектуру, выбираем оптимальные технологии и создаем детальный план разработки.",
      duration: "5-7 дней",
      deliverables: ["Техническая архитектура", "План разработки", "Выбор технологий"]
    },
    {
      id: 4,
      title: "Разработка MVP",
      description: "Создаем минимально жизнеспособный продукт с основным функционалом. Используем современные технологии и лучшие практики.",
      duration: "15-25 дней",
      deliverables: ["Рабочее приложение", "Основной функционал", "API интеграции"]
    },
    {
      id: 5,
      title: "Тестирование и оптимизация",
      description: "Комплексное тестирование на всех устройствах и платформах. Оптимизируем производительность и исправляем ошибки.",
      duration: "7-10 дней",
      deliverables: ["Тестирование", "Оптимизация", "Исправление багов"]
    },
    {
      id: 6,
      title: "Публикация в сторах",
      description: "Подготавливаем приложение к публикации, создаем описания и скриншоты. Размещаем в App Store и Google Play.",
      duration: "3-5 дней",
      deliverables: ["Публикация в сторах", "Оптимизация ASO", "Описание приложения"]
    },
    {
      id: 7,
      title: "Маркетинг и продвижение",
      description: "Разрабатываем стратегию продвижения, создаем рекламные кампании и привлекаем первых пользователей.",
      duration: "10-15 дней",
      deliverables: ["Маркетинговая стратегия", "Рекламные кампании", "PR активность"]
    },
    {
      id: 8,
      title: "Аналитика и улучшения",
      description: "Настраиваем аналитику, отслеживаем ключевые метрики и вносим улучшения на основе данных пользователей.",
      duration: "5-7 дней",
      deliverables: ["Настройка аналитики", "Отчеты по метрикам", "План улучшений"]
    },
    {
      id: 9,
      title: "Поддержка и развитие",
      description: "Обеспечиваем техническую поддержку, обновляем приложение и добавляем новый функционал на основе обратной связи.",
      duration: "Постоянно",
      deliverables: ["Техподдержка", "Обновления", "Новые функции"]
    }
  ];

  return (
    <section className={styles.developmentStages} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.stagesContainer}>
          <div className={styles.stagesGrid}>
            {customStages.map((stage, index) => (
              <div 
                key={stage.id} 
                className={styles.stageCard}
              >
                <div className={styles.stageBackground}>
                  <div className={styles.stageNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <div className={styles.stageGlow}></div>
                </div>
                
                <div className={styles.stageContent}>
                  <div className={styles.stageIcon}>
                    <svg viewBox="0 0 24 24" fill="none" className={styles.stageSvg}>
                      <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.5 6V10.5L13.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageDescription}>{stage.description}</p>
                  
                  <div className={styles.stageMeta}>
                    <div className={styles.stageDuration}>
                      <span className={styles.durationIcon}>⏱</span>
                      {stage.duration}
                    </div>
                    
                    <div className={styles.stageDeliverables}>
                      <h4>Результаты:</h4>
                      <ul>
                        {stage.deliverables.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.stageConnector}></div>
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