import { useState, lazy, Suspense } from 'react';
import '../App.css';
import Header from '../components/Header/header.jsx';
import { projectsData } from '../config/projects';

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

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    title: "EAM Digital",
    subtitle: "Создаём мобильные решения, которые увеличивают прибыль",
    description: "Создадим бизнес-приложение за 6 недель — с аналитикой, дизайном и поддержкой роста. Скидка 10% до конца месяца!",
    utp: [
      "Разрабатываем MVP и проверяем идею",
      "6 недель — и вы привлекаете первых клиентов",
      "Полный цикл: от CustDev до запуска и аналитики",
      "MVP до 5 экранов"
    ],
    primaryAction: {
      label: 'Обсудить проект',
      onClick: handleOpenModal,
    },
    variant: 'gradient' // Используем градиентный вариант для более современного вида
  };

  // projectsData импортируется из config/projects

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
      },
      {
        id: 9,
        title: "Гарантия на работы",
        description: "Обеспечиваем техническую поддержку и обновления",
        duration: "1 год"
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
        duration: "Сроки: 6 недель",
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
          "ASO оптимизация"
        ],
        ctaText: "Обсудить проект"
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
        description: "SLA, обновления, развитие продукта",
        priceRange: "от 50 000 ₽/мес",
        duration: "Ежемесячная подписка",
        features: [
          "SLA гарантии и мониторинг",
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
          "Если ваш сайт недостаточно удобен на мобильных устройствах"
        ]
      },
      {
        id: 3,
        question: "Почему приложение лучше сайта?",
        answer: [
          "Высокая скорость работы (нет зависимости от браузера)",
          "Возможность интеграции с камерой, GPS, платежными системами",
          "Брендированное присутствие на устройстве пользователя"
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
        <QuizBlock onSubmit={handleQuizSubmit} />
        <PricingPackages data={pricingPackagesData} onOpenModal={handleOpenModal} />
        <WhyChooseUs 
          title={whyChooseUsData.title}
          ctaButton={whyChooseUsData.ctaButton}
        />
        <ProjectsOverview data={projectsData} />
        <DevelopmentStages data={developmentStagesData} onOpenModal={handleOpenModal} />
        <FAQBlock data={faqData} />
        <ConsultationBlock data={consultationData} onOpenModal={handleOpenModal} />
        <Footer socialLinks={footerData.socialLinks} />
        <BriefModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitBrief}
        />
      </Suspense>
    </div>
  );
}

export default HomePage;
