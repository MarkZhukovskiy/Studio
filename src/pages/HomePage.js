import { useState } from 'react';
import '../App.css';
import Header from '../components/Header/header.jsx';
import Hero from '../components/Hero/Hero.jsx';
import ProjectsOverview from '../components/ProjectsOverview/ProjectsOverview.jsx';
import DevelopmentStages from '../components/DevelopmentStages/DevelopmentStages.jsx';
import PricingTimeline from '../components/PricingTimeline/PricingTimeline.jsx';
import FAQBlock from '../components/FAQBlock/FAQBlock.jsx';
import ConsultationBlock from '../components/ConsultationBlock/ConsultationBlock.jsx';
import BriefModal from '../components/BriefModal/BriefModal.jsx';
import Footer from '../components/Footer/footer.jsx';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitBrief = (formData) => {
    console.log('Brief submitted:', formData);
    // Здесь будет логика отправки данных на сервер
  };

  // ===== ВСЕ ДАННЫЕ САЙТА В ОДНОМ МЕСТЕ =====
  
  // Данные для Hero секции
  const heroData = {
    title: "EAM Digital",
    subtitle: "Создаём мобильные решения, которые увеличивают прибыль",
    description: "Подберем подходящее решение с учетом целей и возможностей вашего бизнеса. Разрабатываем приложения для iOS и Android с использованием современных технологий.",
    primaryAction: {
      label: 'Обсудить проект',
      onClick: handleOpenModal,
    },
    secondaryAction: {
      label: 'Посмотреть портфолио',
      onClick: () => console.log('Portfolio clicked'),
    },
    variant: 'gradient' // Используем градиентный вариант для более современного вида
  };

  // Данные для проектов
  const projectsData = {
    title: "Наши проекты",
    subtitle: "Создаём решения, которые помогают бизнесу расти и развиваться",
    projects: [
      {
        id: 1,
        title: "Мобильное приложение для доставки",
        description: "Разработали iOS и Android приложение для крупной сети ресторанов",
        category: "Мобильная разработка",
        image: "/images/project-delivery.jpg",
        stats: {
          users: "50K+",
          rating: "4.8",
          downloads: "100K+"
        }
      },
      {
        id: 2,
        title: "CRM система для B2B",
        description: "Веб-платформа для управления клиентами и продажами",
        category: "Веб-разработка",
        image: "/images/project-crm.jpg",
        stats: {
          companies: "200+",
          efficiency: "+40%",
          users: "5K+"
        }
      },
      {
        id: 3,
        title: "Финтех решение",
        description: "Мобильное приложение для управления инвестициями",
        category: "Финтех",
        image: "/images/project-fintech.jpg",
        stats: {
          volume: "$10M+",
          users: "25K+",
          growth: "+150%"
        }
      }
    ]
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
      },
      {
        id: 9,
        title: "Гарантия на работы",
        description: "Обеспечиваем техническую поддержку и обновления",
        duration: "1 год"
      }
    ]
  };

  // Данные для сроков и стоимости
  const pricingData = {
    title: "Сколько стоит создать мобильное приложение?",
    subtitle: "Прозрачное ценообразование и четкие сроки разработки. От идеи до публикации в App Store и Google Play.",
    timelineStages: [
      {
        id: 1,
        stage: "Анализ и исследование",
        duration: "5–7 дней"
      },
      {
        id: 2,
        stage: "UX/UI дизайн",
        duration: "10–15 дней"
      },
      {
        id: 3,
        stage: "Архитектура и планирование",
        duration: "7–10 дней"
      },
      {
        id: 4,
        stage: "Разработка MVP",
        duration: "25–35 дней"
      },
      {
        id: 5,
        stage: "Тестирование и оптимизация",
        duration: "10–15 дней"
      },
      {
        id: 6,
        stage: "Публикация в сторах",
        duration: "5–7 дней"
      },
      {
        id: 7,
        stage: "Поддержка",
        duration: "в течение месяца"
      }
    ],
    pricingRange: "от 500 000 ₽ до 3 000 000 ₽",
    pricingNote: "Стоимость зависит от сложности функционала и платформ (iOS/Android).",
    includedFeatures: [
      "Анализ рынка и конкурентов",
      "UX/UI дизайн для iOS и Android",
      "Нативная разработка на Swift/Kotlin",
      "Интеграция с API и сервисами",
      "Публикация в App Store и Google Play",
      "Техническая поддержка 6 месяцев",
      "ASO оптимизация и продвижение",
      "Аналитика и отчеты по метрикам"
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

  // Данные для консультации
  const consultationData = {
    title: "Запросите консультацию!",
    description: "Оставьте заявку, и наш эксперт ответит на все вопросы",
    buttonText: "Бесплатная консультация"
  };

  // Данные для футера
  const footerData = {
    socialLinks: [
      { name: 'Telegram', url: 'https://t.me/...' },
      { name: 'Instagram', url: 'https://instagram.com/...' },
      { name: 'LinkedIn', url: 'https://linkedin.com/...' }
    ]
  };

  return (
    <div className="App">
      <Header onOpenModal={handleOpenModal} />
      <Hero 
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        primaryAction={heroData.primaryAction}
        secondaryAction={heroData.secondaryAction}
        variant={heroData.variant}
        onScroll={() => console.log('Scroll indicator clicked')}
      />
      <ProjectsOverview data={projectsData} onOpenModal={handleOpenModal} />
      <DevelopmentStages data={developmentStagesData} onOpenModal={handleOpenModal} />
      <PricingTimeline data={pricingData} onOpenModal={handleOpenModal} />
      <FAQBlock data={faqData} />
      <ConsultationBlock data={consultationData} onOpenModal={handleOpenModal} />
      <Footer socialLinks={footerData.socialLinks} />
      <BriefModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitBrief}
      />
    </div>
  );
}

export default HomePage; 