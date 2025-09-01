import React from 'react';
import Header from '../components/Header/header.jsx';
import Footer from '../components/Footer/footer.jsx';
import BriefModal from '../components/BriefModal/BriefModal.jsx';
import styles from './ServicesPage.module.css';
import { Link } from 'react-router-dom';
import FAQBlock from '../components/FAQBlock/FAQBlock.jsx';
import ProjectsOverview from '../components/ProjectsOverview/ProjectsOverview.jsx';

// Hero-блок
function ServicesHero({ onCtaClick }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextBlock}>
          <h1 className={styles.heroTitle}>Что мы разрабатываем</h1>
          <p className={styles.heroSubtitle}>Мобильные приложения, веб-сервисы и кастомные IT-решения под любые задачи</p>
          <button className={styles.heroButton} onClick={onCtaClick}>Обсудить проект</button>
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

// Категории услуг
const serviceCategories = [
  {
    id: 'mobile-apps',
    title: 'Мобильные приложения',
    description: 'iOS / Android / Кроссплатформенные (Flutter)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="10" y="6" width="28" height="36" rx="4" stroke="#2563EB" strokeWidth="2"/><circle cx="24" cy="38" r="2" fill="#2563EB"/></svg>
    ),
    link: '/services/mobile-apps',
  },
  {
    id: 'web-apps',
    title: 'Веб-приложения',
    description: 'Сайты, CRM, SaaS',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="12" width="36" height="24" rx="3" stroke="#2563EB" strokeWidth="2"/><rect x="10" y="16" width="28" height="16" rx="2" fill="#2563EB" opacity="0.08"/></svg>
    ),
    link: '/services/web-apps',
  },
  {
    id: 'telegram-bots',
    title: 'Телеграм-боты и Web Apps',
    description: 'Чаты, мини-приложения, автоматизация',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#2563EB" strokeWidth="2"/><path d="M14 24L22 32L36 16" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
    link: '/services/telegram-bots',
  },
];

function ServiceCategories() {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.sectionTitle}>Направления разработки</h2>
      <div className={styles.categoriesGrid}>
        {serviceCategories.map(cat => (
          <Link to={cat.link} className={styles.categoryCard} key={cat.id} aria-label={cat.title}>
            <div className={styles.categoryIcon}>{cat.icon}</div>
            <div className={styles.categoryContent}>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <p className={styles.categoryDesc}>{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Чек-лист этапов (пример для мобильной разработки)
const mobileChecklist = [
  { icon: '🔍', label: 'Анализ и аудит' },
  { icon: '📝', label: 'Прототипирование' },
  { icon: '🎨', label: 'UI/UX-дизайн' },
  { icon: '💻', label: 'Разработка' },
  { icon: '🧪', label: 'Тестирование' },
  { icon: '🚀', label: 'Публикация' },
  { icon: '🔄', label: 'Поддержка' },
];

function ServiceChecklist() {
  return (
    <section className={styles.checklistSection}>
      <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
      <div className={styles.checklistGrid}>
        {mobileChecklist.map((item, i) => (
          <div className={styles.checklistItem} key={i}>
            <span className={styles.checklistIcon}>{item.icon}</span>
            <span className={styles.checklistLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// Преимущества
const advantages = [
  { icon: '⏳', label: 'Опыт более 5 лет' },
  { icon: '👨‍💻', label: 'Команда in-house' },
  { icon: '🔎', label: 'Прозрачный процесс' },
  { icon: '💬', label: 'Объясняем сложное простым языком' },
  { icon: '🚀', label: 'От идеи до релиза' },
];

function AdvantagesBlock() {
  return (
    <section className={styles.advantagesSection}>
      <h2 className={styles.sectionTitle}>Почему мы</h2>
      <div className={styles.advantagesGrid}>
        {advantages.map((item, i) => (
          <div className={styles.advantageCard} key={i}>
            <span className={styles.advantageIcon}>{item.icon}</span>
            <span className={styles.advantageLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// FAQ/Этапы работы
const faqData = {
  title: 'Как мы работаем',
  subtitle: 'От идеи до публикации — просто и понятно',
  faqItems: [
    { id: 1, question: 'С чего начинается работа?', answer: 'С бесплатной консультации и анализа задачи.' },
    { id: 2, question: 'Какие этапы разработки?', answer: 'Анализ, прототип, дизайн, разработка, тестирование, публикация, поддержка.' },
    { id: 3, question: 'Можно ли доработать существующий проект?', answer: 'Да, мы берем проекты на развитие и аудит.' },
  ]
};

// Портфолио-превью (заглушка)
const portfolioData = {
  title: 'Наши проекты',
  subtitle: 'Реализованные кейсы',
  projects: [
    {
      id: 1,
      category: 'Мобильная разработка',
      title: 'Приложение для доставки',
      description: 'Мобильное приложение для заказа и отслеживания доставки еды.',
      stats: { 'Пользователей': '10 000+', 'Срок': '3 мес.' }
    },
    {
      id: 2,
      category: 'Веб-разработка',
      title: 'CRM для агентства',
      description: 'Веб-система для управления клиентами и задачами.',
      stats: { 'Клиентов': '500+', 'Срок': '2 мес.' }
    },
    {
      id: 3,
      category: 'Telegram Web App',
      title: 'Бот для поддержки',
      description: 'Telegram-бот для автоматизации поддержки клиентов.',
      stats: { 'Диалогов': '20 000+', 'Срок': '1.5 мес.' }
    },
  ]
};

function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.servicesPage}>
      <Header onOpenModal={handleOpenModal} />
      <main>
        <ServicesHero onCtaClick={handleOpenModal} />
        <ServiceCategories />
        <ServiceChecklist />
        <AdvantagesBlock />
        <ProjectsOverview data={portfolioData} onOpenModal={handleOpenModal} />
        <FAQBlock data={faqData} />
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Остались вопросы?</h2>
          <button className={styles.ctaButton} onClick={handleOpenModal}>Записаться на бесплатную консультацию</button>
        </section>
      </main>
      <Footer />
      <BriefModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default ServicesPage; 