import React, { useState } from 'react';
import Header from '../components/Header/header.jsx';
import Footer from '../components/Footer/footer.jsx';
import styles from './PortfolioPage.module.css';
import { Link } from 'react-router-dom';

// Данные фильтров
const typeFilters = [
  { id: 'all', label: 'Все' },
  { id: 'mobile', label: 'Мобильное приложение' },
  { id: 'web', label: 'Веб-сервис' },
  { id: 'telegram', label: 'Телеграм WebApp' },
  { id: 'b2b', label: 'B2B' },
  { id: 'b2c', label: 'B2C' },
];
const categoryFilters = [
  'Финансы', 'Образование', 'Маркетинг', 'E-commerce', 'Медицина', 'Другое'
];
const techIcons = {
  Flutter: <svg width="20" height="20" viewBox="0 0 20 20"><path d="M3 15l7-7-2-2-7 7v2h2zm7-7l7 7v2h-2l-7-7z" fill="#2563EB"/></svg>,
  Kotlin: <svg width="20" height="20" viewBox="0 0 20 20"><rect width="20" height="20" rx="4" fill="#7F52FF"/><path d="M4 16L16 4H4v12z" fill="#fff"/></svg>,
  Swift: <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#FA7343"/><path d="M5 7c2 2 6 6 10 6-2-2-6-6-10-6z" fill="#fff"/></svg>,
  React: <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="2" fill="#61DAFB"/><ellipse cx="10" cy="10" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/><ellipse cx="10" cy="10" rx="4" ry="9" stroke="#61DAFB" strokeWidth="1.5" fill="none"/></svg>,
  'Node.js': <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#8CC84B"/><text x="5" y="15" fontSize="7" fill="#fff">JS</text></svg>,
};

// Кейсы (пример)
const cases = [
  {
    id: 'tmmate',
    title: 'TMmate',
    description: 'Платформа для спортивной аналитики',
    type: 'b2b',
    category: 'Маркетинг',
    tech: ['Flutter', 'Node.js'],
    image: '/images/tmmate.webp',
    featured: true,
  },
  {
    id: 'retailbot',
    title: 'RetailBot',
    description: 'Telegram-бот для ритейла',
    type: 'telegram',
    category: 'E-commerce',
    tech: ['Node.js'],
    image: '/images/retailbot.webp',
  },
  {
    id: 'finapp',
    title: 'FinApp',
    description: 'Мобильный банк',
    type: 'mobile',
    category: 'Финансы',
    tech: ['Swift'],
    image: '/images/finapp.webp',
  },
  // ... другие кейсы
];

// Hero-блок с фильтрами
function PortfolioHero({ type, setType, category, setCategory }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Наши проекты</h1>
        <p className={styles.heroSubtitle}>Мы разрабатываем кастомные решения под задачи клиента — от стартапов до крупных корпоративных продуктов.</p>
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            {typeFilters.map(f => (
              <button key={f.id} className={`${styles.filterBtn} ${type === f.id ? styles.active : ''}`} onClick={() => setType(f.id)}>{f.label}</button>
            ))}
          </div>
          <div className={styles.filterGroup}>
            <select value={category} onChange={e => setCategory(e.target.value)} className={styles.filterSelect}>
              <option value="">Все категории</option>
              {categoryFilters.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

// Сетка кейсов
function CasesGrid({ cases }) {
  return (
    <section className={styles.casesSection}>
      <div className={styles.casesGrid}>
        {cases.map(c => (
          <Link to={`/portfolio/${c.id}`} className={styles.caseCard} key={c.id} aria-label={c.title}>
            <div className={styles.caseImage} style={{ backgroundImage: `url(${c.image})` }} />
            <div className={styles.caseContent}>
              <h3 className={styles.caseTitle}>{c.title}</h3>
              <p className={styles.caseDesc}>{c.description}</p>
              <div className={styles.caseTechs}>
                {c.tech.map(t => <span key={t} className={styles.caseTech}>{techIcons[t] || t}</span>)}
              </div>
              <button className={styles.caseBtn}>Смотреть кейс</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Кейс недели (опционально)
function FeaturedCase({ caseData }) {
  if (!caseData) return null;
  return (
    <section className={styles.featuredSection}>
      <div className={styles.featuredContent}>
        <div className={styles.featuredImage} style={{ backgroundImage: `url(${caseData.image})` }} />
        <div className={styles.featuredInfo}>
          <h2 className={styles.featuredTitle}>{caseData.title}</h2>
          <p className={styles.featuredDesc}>{caseData.description}</p>
          <div className={styles.featuredTechs}>
            {caseData.tech.map(t => <span key={t} className={styles.featuredTech}>{techIcons[t] || t}</span>)}
          </div>
          <Link to={`/portfolio/${caseData.id}`} className={styles.featuredBtn}>Подробнее</Link>
        </div>
      </div>
    </section>
  );
}

// Отзывы (заглушка)
const reviews = [
  { project: 'RetailBot', name: 'Алексей', text: 'Быстро, качественно, с пониманием задачи!', avatar: '🧑‍💼' },
  { project: 'FinApp', name: 'Мария', text: 'Отличная коммуникация и результат!', avatar: '👩‍💼' },
];
function ReviewsBlock() {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsGrid}>
        {reviews.map((r, i) => (
          <div className={styles.reviewCard} key={i}>
            <div className={styles.reviewAvatar}>{r.avatar}</div>
            <div className={styles.reviewText}>{r.text}</div>
            <div className={styles.reviewAuthor}>{r.name} о проекте {r.project}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PortfolioCTA() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>Хотите похожий результат?</h2>
      <p className={styles.ctaSubtitle}>Расскажите нам о вашей задаче, и мы предложим решение</p>
      <button className={styles.ctaButton}>Обсудить проект</button>
    </section>
  );
}

function PortfolioPage() {
  const [type, setType] = useState('all');
  const [category, setCategory] = useState('');
  const filteredCases = cases.filter(c =>
    (type === 'all' || c.type === type) &&
    (!category || c.category === category)
  );
  const featured = cases.find(c => c.featured);
  return (
    <div className={styles.portfolioPage}>
      <Header />
      <main>
        <PortfolioHero type={type} setType={setType} category={category} setCategory={setCategory} />
        <FeaturedCase caseData={featured} />
        <CasesGrid cases={filteredCases} />
        <ReviewsBlock />
        <PortfolioCTA />
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioPage; 