import React from 'react';
import Header from '../components/Header/header.jsx';
import Footer from '../components/Footer/footer.jsx';
import styles from './AboutPage.module.css';
import { Link } from 'react-router-dom';

// Hero-блок
function AboutHero({ onCtaClick }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextBlock}>
          <h1 className={styles.heroTitle}>Создаем digital-решения, которые работают на результат</h1>
          <p className={styles.heroSubtitle}>Мы проектируем и разрабатываем мобильные приложения и веб-сервисы, которые масштабируют бизнес наших клиентов.</p>
          <button className={styles.heroButton} onClick={onCtaClick}>Посмотреть проекты</button>
        </div>
        <div className={styles.heroVisual}>
          {/* SVG-анимация */}
          <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="130" cy="130" r="120" stroke="#2563EB" strokeWidth="4" fill="none" opacity="0.15"/>
            <rect x="80" y="60" width="100" height="140" rx="18" fill="#2563EB" opacity="0.08"/>
            <rect x="100" y="80" width="60" height="100" rx="10" fill="#2563EB" opacity="0.15"/>
            <circle cx="130" cy="200" r="8" fill="#2563EB" opacity="0.3"/>
            <circle cx="200" cy="80" r="5" fill="#2563EB" opacity="0.2"/>
            <circle cx="60" cy="180" r="4" fill="#2563EB" opacity="0.2"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

// Факты о студии
const facts = [
  { value: 5, label: 'лет на рынке', suffix: '+' },
  { value: 14, label: 'сотрудников' },
  { value: 100, label: 'in-house команда', suffix: '%' },
  { value: 8, label: 'стран — клиенты' },
];
function FactsBlock() {
  return (
    <section className={styles.factsSection}>
      <div className={styles.factsGrid}>
        {facts.map((fact, i) => (
          <div className={styles.factCard} key={i}>
            <span className={styles.factValue} data-animate>{fact.value}{fact.suffix || ''}</span>
            <span className={styles.factLabel}>{fact.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// О нас / подход
function AboutApproach() {
  return (
    <section className={styles.approachSection}>
      <div className={styles.approachContent}>
        <div className={styles.approachText}>
          <h2 className={styles.sectionTitle}>О нас</h2>
          <p>Мы не просто пишем код — мы решаем задачи. Погружаемся в бизнес клиента, предлагаем подходящие технологии и реализуем под ключ. Наш подход — это честность, адаптивность и долгосрочное партнёрство.</p>
          <ul className={styles.approachList}>
            <li>Вовлеченность в проект</li>
            <li>Кастомные решения</li>
            <li>Прозрачность процессов</li>
            <li>Современные технологии: React, Node.js, Flutter, Telegram Web Apps</li>
          </ul>
        </div>
        <div className={styles.approachVisual}>
          {/* SVG-анимация */}
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none"><circle cx="90" cy="90" r="80" stroke="#2563EB" strokeWidth="3" opacity="0.12"/><rect x="50" y="40" width="80" height="100" rx="16" fill="#2563EB" opacity="0.08"/></svg>
        </div>
      </div>
    </section>
  );
}

// Команда (core team)
const team = [
  { name: 'Анна', role: 'Project Manager', avatar: '👩‍💼', tg: '', li: '' },
  { name: 'Иван', role: 'Tech Lead', avatar: '👨‍💻', tg: '', li: '' },
  { name: 'Мария', role: 'UI/UX Designer', avatar: '🎨', tg: '', li: '' },
  { name: 'Дмитрий', role: 'QA Engineer', avatar: '🧪', tg: '', li: '' },
  { name: 'Алексей', role: 'Backend Dev', avatar: '💻', tg: '', li: '' },
];
function TeamBlock() {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>Наша команда</h2>
      <div className={styles.teamGrid}>
        {team.map((member, i) => (
          <div className={styles.teamCard} key={i}>
            <div className={styles.teamAvatar}>{member.avatar}</div>
            <div className={styles.teamInfo}>
              <span className={styles.teamName}>{member.name}</span>
              <span className={styles.teamRole}>{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Отзывы (заглушка)
const reviews = [
  { name: 'Александр', company: 'ООО "Бизнес"', text: 'Команда быстро погрузилась в задачу и предложила оптимальное решение. Результат превзошёл ожидания!', avatar: '🧑‍💼' },
  { name: 'Екатерина', company: 'Startup', text: 'Очень довольны коммуникацией и качеством работы. Будем обращаться ещё!', avatar: '👩‍💼' },
];
function ReviewsBlock() {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.sectionTitle}>Что о нас говорят</h2>
      <div className={styles.reviewsGrid}>
        {reviews.map((r, i) => (
          <div className={styles.reviewCard} key={i}>
            <div className={styles.reviewAvatar}>{r.avatar}</div>
            <div className={styles.reviewText}>{r.text}</div>
            <div className={styles.reviewAuthor}>{r.name}, {r.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Подход к работе (опционально)
const workApproach = [
  { icon: '🤝', title: 'Вовлеченность', desc: 'Погружаемся в задачи клиента и работаем как часть его команды.' },
  { icon: '🔄', title: 'Гибкость', desc: 'Быстро адаптируемся под изменения и новые требования.' },
  { icon: '⚡️', title: 'Скорость', desc: 'Оптимизируем процессы ради быстрого результата.' },
  { icon: '🛡️', title: 'Ответственность', desc: 'Держим слово и отвечаем за результат.' },
];
function WorkApproachBlock() {
  return (
    <section className={styles.workApproachSection}>
      <div className={styles.workApproachGrid}>
        {workApproach.map((item, i) => (
          <div className={styles.workApproachCard} key={i}>
            <div className={styles.workApproachIcon}>{item.icon}</div>
            <div className={styles.workApproachTitle}>{item.title}</div>
            <div className={styles.workApproachDesc}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  const handleCtaClick = () => {
    // Здесь можно реализовать переход к форме или модалке
  };
  return (
    <div className={styles.aboutPage}>
      <Header />
      <main>
        <AboutHero onCtaClick={handleCtaClick} />
        <FactsBlock />
        <AboutApproach />
        <TeamBlock />
        <ReviewsBlock />
        <WorkApproachBlock />
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Есть идея — обсудим за 15 минут</h2>
          <button className={styles.ctaButton} onClick={handleCtaClick}>Записаться на консультацию</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage; 