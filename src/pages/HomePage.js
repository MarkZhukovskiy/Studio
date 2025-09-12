import { useState, lazy, Suspense } from 'react';
import '../App.css';
import Header from '../components/Header/header.jsx';

const Hero = lazy(() => import('../components/Hero/Hero.jsx'));
const QuizBlock = lazy(() => import('../components/QuizBlock/QuizBlock.jsx'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs/WhyChooseUs.jsx'));
const DevelopmentStages = lazy(() => import('../components/DevelopmentStages/DevelopmentStages.jsx'));
const PricingPackages = lazy(() => import('../components/PricingPackages/PricingPackages.jsx'));
const FAQBlock = lazy(() => import('../components/FAQBlock/FAQBlock.jsx'));
const ConsultationBlock = lazy(() => import('../components/ConsultationBlock/ConsultationBlock.jsx'));
const BriefModal = lazy(() => import('../components/BriefModal/BriefModal.jsx'));
const Footer = lazy(() => import('../components/Footer/footer.jsx'));
const ProjectsOverview = lazy(() => import('../components/ProjectsOverview/ProjectsOverview.jsx'));
const AioChatModal = lazy(() => import('../components/AioChatModal/AioChatModal.jsx'));
const FabulaModal = lazy(() => import('../components/FabulaModal/FabulaModal.jsx'));
const ThankYouModal = lazy(() => import('../components/ThankYouModal/ThankYouModal.jsx'));
const AuraModal = lazy(() => import('../components/AuraModal/AuraModal.jsx'));
const UrModal = lazy(() => import('../components/UrModal/UrModal.jsx'));

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAioCaseOpen, setIsAioCaseOpen] = useState(false);
  const [isFabulaOpen, setIsFabulaOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [isAuraOpen, setIsAuraOpen] = useState(false);
  const [isUrOpen, setIsUrOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitBrief = (formData) => {
    // Здесь будет логика отправки данных на сервер
  };

  const handleQuizSubmit = (quizData) => {
    // Здесь будет логика отправки данных квиза
    // Можно интегрировать с CRM или отправлять на email
  };

  // ===== ВСЕ ДАННЫЕ САЙТА В ОДНОМ МЕСТЕ =====
  
  // Данные для Hero секции
  const heroData = {
    title: "Mobile First",
    subtitle: "Создаём мобильные решения, которые увеличивают прибыль",
    description: "Создадим бизнес-приложение за 5–6 недель — с аналитикой, дизайном и поддержкой роста. Скидка 10% до конца месяца!",
    utp: [
      "MVP за 5–6 недель",
                "5–6 недель — и вы привлекаете первых клиентов",
      "Полный цикл: от исследования идеи до запуска и аналитики",
      "MVP от 3 экранов"
    ],
    primaryAction: {
      label: 'Обсудить проект',
      onClick: handleOpenModal,
    },
    variant: 'gradient' // Используем градиентный вариант для более современного вида
  };

  // Данные для этапов разработки
  const developmentStagesData = {
    title: "Этапы разработки приложений",
    subtitle: "Как мы создаем приложения для iOS и Android",
    description: "Разработка приложения — это не только программирование, но и целый спектр задач, которые важно реализовать для создания успешного продукта.",
    stages: [
      {
        id: 1,
        title: "Сбор информации и аналитика",
        description: "Изучаем рынок, конкурентов и потребности пользователей",
        duration: "3-5 дней"
      },
      {
        id: 2,
        title: "Техническое задание",
        description: "Детально описываем функционал и требования к приложению",
        duration: "5-10 дней"
      },
      {
        id: 3,
        title: "Прототип приложения",
        description: "Создаем интерактивную модель для демонстрации логики",
        duration: "7-14 дней"
      },
      {
        id: 4,
        title: "UX/UI дизайн интерфейса",
        description: "Разрабатываем удобный и красивый интерфейс",
        duration: "10-20 дней"
      },
      {
        id: 5,
        title: "Разработка",
        description: "Программируем приложение с использованием современных технологий",
        duration: "1-3 месяца"
      },
      {
        id: 6,
        title: "Тестирование продукта",
        description: "Проводим комплексное тестирование функционала и производительности",
        duration: "2-4 недели"
      },
      {
        id: 7,
        title: "Публикация в сторах",
        description: "Размещаем приложение в App Store и Google Play",
        duration: "3-5 дней"
      },
      {
        id: 8,
        title: "Продвижение приложения",
        description: "Запускаем маркетинговые кампании для привлечения пользователей",
        duration: "Постоянно"
      }
    ]
  };

  // Данные для тарифных пакетов
  const pricingPackagesData = {
    title: "Тарифные пакеты",
    subtitle: "Выберите подходящий формат сотрудничества для вашего проекта",
    packages: [
      {
        id: 1,
        name: "MVP",
        description: "Проверка гипотезы и запуск в сторы",
        priceRange: "300 000 ₽",
        duration: "MVP за 5–6 недель",
        features: [
          "Базовый функционал приложения",
          "UX/UI дизайн для iOS и Android",
          "Публикация в App Store и Google Play",
          "Техническая поддержка 3 месяца",
          "Аналитика и базовые метрики"
        ],
        ctaText: "Обсудить MVP"
      },
      {
        id: 2,
        name: "Business",
        description: "Интеграции (CRM, API), расширенный функционал",
        priceRange: "600 000 ₽",
        duration: "Сроки от 8 недель",
        features: [
          "Расширенный функционал и интеграции",
          "UX/UI дизайн под задачи бизнеса",
          "Интеграция с CRM и внешними API",
          "Продвинутая аналитика и отчеты",
          "Техническая поддержка 6 месяцев",
          "Оптимизация карточек в сторах"
        ],
        ctaText: "Обсудить Business"
      },
      {
        id: 3,
        name: "Premium",
        description: "Сложные проекты с AI, BI, ML",
        priceRange: "от 1 000 000 ₽",
        duration: "Сроки от 12 недель",
        features: [
          "Сложные проекты с AI, BI, ML",
          "Индивидуальная команда под проект",
          "Масштабируемая архитектура",
          "Интеграция с корпоративными системами",
          "Техническая поддержка 12 месяцев",
          "Персональный менеджер проекта"
        ],
        ctaText: "Обсудить Premium"
      },
      {
        id: 4,
        name: "Поддержка",
        description: "Гарантии, обновления и развитие продукта",
        priceRange: "от 50 000 ₽/мес",
        duration: "Ежемесячная подписка",
        features: [
          "Гарантии и мониторинг",
          "Регулярные обновления и фичи",
          "Развитие продукта по метрикам",
          "Техническая поддержка 24/7",
          "Аналитика и оптимизация",
          "Гибкие условия сотрудничества"
        ],
        ctaText: "Обсудить поддержку"
      }
    ]
  };

  // Данные для блока проектов
  const projectsData = {
    title: "Наши проекты",
    subtitle: "Мы создаём мобильные приложения для стартапов и компаний — от MVP до масштабных решений",
    tags: ["Web", "Mobile", "CRM", "AI", "E-commerce", "MVP"],
    projects: [
      {
        id: 'aio-chat',
        name: 'AIO Chat',
        category: 'Мобильная разработка / AI',
        description: 'Мобильное и десктопное приложение с ИИ: чат, генерация графики, аудио и контента.',
        icon: '/images/projects/aio_images/aio_logo.png',
        platforms: [
          { name: 'iOS', url: 'https://apps.apple.com/ru' },
          { name: 'Android', url: 'https://apps.rustore.ru' },
          { name: 'Web', url: 'https://aiochat.ru' }
        ],
        features: [
          'Проектирование (прототип, без VPN)',
          'ChatGPT + голосовой помощник',
          'Генерация графики, текста, аудио',
          'История запросов и безопасное хранение'
        ],
        tags: ['AI', 'Mobile', 'Web', 'Content'],
        caseUrl: '/cases/aio-chat'
      },
      {
        id: 'fabula',
        name: 'Fabula',
        category: 'Мобильная разработка',
        description: 'Напиши свой первый роман',
        icon: '/images/projects/fabula_images/fabula_logo.webp',
        platforms: [
          { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.fabula.app&pli=1' }
        ],
        features: [
          'Планирование структуры и сюжета книги',
          'Работа с персонажами и их линиями',
          'Подсказки и советы для авторов',
          'Удобный интерфейс для заметок и идей',
          'Поддержка пошагового написания романа',
          'Синхронизация прогресса и сохранение данных'
        ],
        tags: ['Mobile', 'Productivity'],
        caseUrl: '/cases/fabula'
      },
      // Новый проект: Aura Wallet (после Fabula)
      {
        id: 'aura-wallet',
        name: 'Aura Wallet',
        category: 'Мобильная разработка / Финтех',
        description: 'Ваш цифровой кошелёк в смартфоне',
        icon: '/images/projects/aura/Aura_Logo.webp',
        platforms: [
          { name: 'Android', url: 'https://www.rustore.ru/catalog/app/ms.aura.walletapp.release' }
        ],
        features: [
          'Быстрые и безопасные платежи',
          'Управление банковскими картами и счетами',
          'Контроль расходов и аналитика трат',
          'Удобные переводы между пользователями',
          'Хранение истории операций',
          'Защита данных и многоуровневая безопасность'
        ],
        tags: ['Mobile', 'Fintech'],
        caseUrl: '/cases/aura-wallet'
      },
      // Новый проект: Юропыт — помощь юриста (после Aura Wallet)
      {
        id: 'ur',
        name: 'Юропыт — помощь юриста',
        category: 'Мобильная разработка / LegalTech',
        description: 'Быстрая юридическая поддержка в вашем телефоне',
        icon: '/images/projects/ur/ur_logo.svg',
        platforms: [
          { name: 'iOS', url: 'https://apps.apple.com/ru/app/%D1%8E%D1%80%D0%BE%D0%BF%D1%8B%D1%82-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C-%D1%8E%D1%80%D0%B8%D1%81%D1%82%D0%B0/id1659015560' },
          { name: 'Android', url: 'https://play.google.com/store/apps/details?id=ru.uropit.urp_client' },
          { name: 'Web', url: 'https://uropit.ru/' }
        ],
        features: [
          'Онлайн-консультации с юристом',
          'Шаблоны договоров и юридических документов',
          'Справочные материалы и инструкции по законам',
          'Уведомления о сроках исковой давности и важных юридических датах',
          'Обмен сообщениями и чат с поддержкой',
          'Защита персональных данных и конфиденциальность'
        ],
        tags: ['Mobile', 'Legal'],
        caseUrl: '/cases/ur'
      }
    ],
    viewAllUrl: null,
    viewAllLabel: null
  };

  const aioProject = projectsData.projects.find(p => p.id === 'aio-chat');
  const aioPlatformLinks = {
    ios: aioProject?.platforms.find(x => x.name === 'iOS')?.url,
    ru: aioProject?.platforms.find(x => x.name === 'Android')?.url,
    web: aioProject?.platforms.find(x => x.name === 'Web')?.url,
  };

  // Данные для FAQ
  const faqData = {
    title: "Часто задаваемые вопросы о мобильных приложениях",
    subtitle: "Узнайте, как мобильное приложение может решить ваши бизнес-задачи и увеличить прибыль",
    faqItems: [
      {
        id: 1,
        question: "Какие задачи решит мобильное приложение?",
        answer: [
          "Увеличение вовлеченности пользователей (push-уведомления)",
          "Автоматизация процессов (например, онлайн-заказы)",
          "Персонализация (личный кабинет, рекомендации)",
          "Оффлайн-доступ к базовым функциям"
        ]
      },
      {
        id: 2,
        question: "Как понять, что вам нужно приложение?",
        answer: [
          "Если у вас повторяющиеся транзакции (например, доставка еды)",
          "Если важна лояльность клиентов (программа лояльности в приложении)",
          "Если ваш сайт недостаточно удобен на мобильных устройствах",
          "Персонализация и рекомендации",
          "Сохранение пользовательских сессий (без постоянных разлогиниваний)",
          "Быстрые способы авторизации",
          "Работа с геолокацией (магазины, клиенты)"
        ]
      },
      {
        id: 3,
        question: "Почему приложение лучше сайта?",
        answer: [
          "Высокая скорость работы (нет зависимости от браузера)",
          "Возможность интеграции с камерой, GPS, платежными системами",
          "Брендированное присутствие на устройстве пользователя",
          "Push-уведомления",
          "Использование AR/VR технологий",
          "Расширенные способы оплаты (Apple Pay, Google Pay и др.)"
        ]
      }
    ],
    seoTitle: "Нужна помощь в выборе между мобильным приложением и сайтом?",
    seoText: "Наши эксперты помогут определить оптимальное решение для вашего бизнеса. Заказать приложение или узнать стоимость разработки приложения можно, оставив заявку на бесплатную консультацию.",
    keywords: ["мобильное приложение vs сайт", "заказать приложение", "стоимость разработки приложения"]
  };

  // Данные для блока "Почему выбирают нас"
  const whyChooseUsData = {
    title: "Почему выбирают нас",
    ctaButton: {
      label: "Связаться с нами",
      onClick: handleOpenModal
    }
  };

  // Данные для консультации
  const consultationData = {
    title: "Запросите консультацию!",
    description: "Оставьте заявку, и наш эксперт ответит на все вопросы",
    buttonText: "Бесплатная консультация"
  };

  // Данные для футера
  const footerData = {
    socialLinks: [
      { name: 'Telegram', url: 'https://t.me/Mark_Zhukovskiy' },
      { name: 'Instagram', url: 'https://instagram.com/...' },
      { name: 'LinkedIn', url: 'https://linkedin.com/...' }
    ]
  };

  const handleProjectMoreClick = (project) => {
    if (project?.id === 'aio-chat') {
      setIsAioCaseOpen(true);
      return true; // предотвращаем переход по ссылке
    }
    if (project?.id === 'fabula') {
      setIsFabulaOpen(true);
      return true;
    }
    if (project?.id === 'aura-wallet') {
      setIsAuraOpen(true);
      return true;
    }
    if (project?.id === 'ur') {
      setIsUrOpen(true);
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      <Header onOpenModal={handleOpenModal} />
      <Suspense fallback={<div />}> 
        <Hero 
          title={heroData.title}
          subtitle={heroData.subtitle}
          description={heroData.description}
          utp={heroData.utp}
          primaryAction={heroData.primaryAction}
          variant={heroData.variant}
        />
        <QuizBlock onSubmit={handleQuizSubmit} onOpenThankYou={() => setIsThankYouOpen(true)} />
        <div id="pricing">
          <PricingPackages data={pricingPackagesData} onOpenModal={handleOpenModal} />
        </div>
        <div id="projects">
          <ProjectsOverview data={projectsData} onOpenCase={handleProjectMoreClick} />
        </div>
        <div id="why">
          <WhyChooseUs 
            title={whyChooseUsData.title}
            ctaButton={whyChooseUsData.ctaButton}
          />
        </div>
        <div id="stages">
          <DevelopmentStages data={developmentStagesData} onOpenModal={handleOpenModal} />
        </div>
        <div id="faq">
          <FAQBlock data={faqData} variant="blue" />
        </div>
        <div id="contact">
          <ConsultationBlock data={consultationData} onOpenModal={handleOpenModal} />
        </div>
        <Footer socialLinks={footerData.socialLinks} />
        <BriefModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitBrief}
        />
        <AioChatModal 
          isOpen={isAioCaseOpen}
          onClose={() => setIsAioCaseOpen(false)}
          platformLinks={aioPlatformLinks}
        />
        <FabulaModal 
          isOpen={isFabulaOpen}
          onClose={() => setIsFabulaOpen(false)}
          googlePlayUrl={'https://play.google.com/store/apps/details?id=com.fabula.app&pli=1'}
        />
        {/* Новый модал: Aura Wallet */}
        <AuraModal 
          isOpen={isAuraOpen}
          onClose={() => setIsAuraOpen(false)}
          ruStoreUrl={'https://www.rustore.ru/catalog/app/ms.aura.walletapp.release'}
        />
        <ThankYouModal 
          isOpen={isThankYouOpen}
          onClose={() => setIsThankYouOpen(false)}
        />
        <UrModal 
          isOpen={isUrOpen}
          onClose={() => setIsUrOpen(false)}
          appStoreUrl={'https://apps.apple.com/ru/app/%D1%8E%D1%80%D0%BE%D0%BF%D1%8B%D1%82-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C-%D1%8E%D1%80%D0%B8%D1%81%D1%82%D0%B0/id1659015560'}
        />
      </Suspense>
    </div>
  );
}

export default HomePage;
