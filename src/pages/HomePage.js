import { useState } from 'react';
import '../App.css';
import Header from '../components/Header/header.jsx';
import Hero from '../components/Hero/Hero.jsx';
import ProjectsOverview from '../components/ProjectsOverview/ProjectsOverview.jsx';
import DevelopmentStages from '../components/DevelopmentStages/DevelopmentStages.jsx';
import PricingTimeline from '../components/PricingTimeline/PricingTimeline.jsx';
import TestimonialsCarousel from '../components/TestimonialsCarousel/TestimonialsCarousel.jsx';
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
    title: "A&M Create",
    subtitle: "Создаём мобильные решения, которые увеличивают прибыль",
    description: "Подберем подходящее решение с учетом целей и возможностей вашего бизнеса",
    primaryAction: {
      label: 'Обсудить проект',
      onClick: handleOpenModal,
    },
    secondaryAction: {
      label: 'Узнать больше',
      onClick: () => console.log('Learn more clicked'),
    }
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
    title: "Сколько стоит вывести ваше приложение на рынок?",
    subtitle: "Каждый проект уникален, но мы заранее озвучиваем сроки и бюджет. Вы понимаете, сколько времени и ресурсов потребуется, чтобы запустить продукт.",
    timelineStages: [
      {
        id: 1,
        stage: "Сбор информации и аналитика",
        duration: "3–5 рабочих дней"
      },
      {
        id: 2,
        stage: "Техническое задание",
        duration: "5–10 рабочих дней"
      },
      {
        id: 3,
        stage: "Прототипирование",
        duration: "7–14 рабочих дней"
      },
      {
        id: 4,
        stage: "UX/UI дизайн",
        duration: "10–20 рабочих дней"
      },
      {
        id: 5,
        stage: "Разработка",
        duration: "1–3 месяца"
      },
      {
        id: 6,
        stage: "Тестирование",
        duration: "2–4 недели"
      },
      {
        id: 7,
        stage: "Публикация и релиз",
        duration: "3–5 рабочих дней"
      }
    ],
    pricingRange: "В среднем проекты стоят от 500 000 ₽ до 3 000 000 ₽.",
    pricingNote: "Мы подберем решение под ваш бюджет и цели бизнеса.",
    includedFeatures: [
      "Персональный менеджер",
      "Проработка бизнес-логики",
      "Уникальный UX/UI-дизайн",
      "Адаптация под App Store и Google Play",
      "Техническая поддержка после запуска"
    ]
  };

  // Данные для отзывов
  const testimonialsData = {
    title: "Отзывы наших клиентов",
    subtitle: "Реальные истории успеха от компаний, которые доверили нам разработку своих приложений",
    testimonials: [
      {
        id: 1,
        name: "Александр Петров",
        position: "CEO, TechStart",
        company: "Стартап в сфере финтеха",
        avatar: "/images/testimonial-1.jpg",
        text: "A&M Create разработали для нас мобильное приложение, которое превзошло все ожидания. Команда проявила профессионализм на каждом этапе разработки, от анализа требований до запуска в продакшн. Приложение получило высокие оценки пользователей и помогло нам привлечь инвестиции.",
        rating: 5,
        project: "Мобильное приложение для управления инвестициями"
      },
      {
        id: 2,
        name: "Мария Сидорова",
        position: "Маркетинг-директор",
        company: "FoodDelivery Pro",
        avatar: "/images/testimonial-2.jpg",
        text: "Работа с A&M Create была настоящим удовольствием. Они не только создали качественное приложение для доставки еды, но и помогли нам оптимизировать бизнес-процессы. Результат превзошел ожидания — рост заказов на 40% в первый месяц после запуска.",
        rating: 5,
        project: "Приложение для доставки еды"
      },
      {
        id: 3,
        name: "Дмитрий Козлов",
        position: "Основатель",
        company: "EduTech Solutions",
        avatar: "/images/testimonial-3.jpg",
        text: "A&M Create создали для нас образовательную платформу с нуля. Команда показала глубокое понимание наших потребностей и реализовала все функции точно в срок. Пользователи в восторге от удобства и функциональности приложения.",
        rating: 5,
        project: "Образовательная платформа"
      },
      {
        id: 4,
        name: "Елена Воробьева",
        position: "Product Manager",
        company: "HealthTech",
        avatar: "/images/testimonial-4.jpg",
        text: "Разработка медицинского приложения требует особого подхода и внимания к деталям. A&M Create справились с этой задачей блестяще. Приложение соответствует всем стандартам безопасности и получило одобрение медицинского сообщества.",
        rating: 5,
        project: "Медицинское приложение"
      },
      {
        id: 5,
        name: "Сергей Морозов",
        position: "CTO",
        company: "Retail Innovations",
        avatar: "/images/testimonial-5.jpg",
        text: "Сотрудничество с A&M Create помогло нам создать инновационное решение для ритейла. Команда проявила креативность в решении сложных технических задач и создала продукт, который выделяется на рынке.",
        rating: 5,
        project: "CRM система для ритейла"
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
      <main>
        <Hero 
          title={heroData.title}
          subtitle={heroData.subtitle}
          description={heroData.description}
          primaryAction={heroData.primaryAction}
          secondaryAction={heroData.secondaryAction}
          onScroll={() => console.log('Scroll indicator clicked')}
        />
        <ProjectsOverview data={projectsData} onOpenModal={handleOpenModal} />
        <DevelopmentStages data={developmentStagesData} onOpenModal={handleOpenModal} />
        <PricingTimeline data={pricingData} onOpenModal={handleOpenModal} />
        <TestimonialsCarousel data={testimonialsData} />
        <FAQBlock data={faqData} />
        <ConsultationBlock data={consultationData} onOpenModal={handleOpenModal} />
      </main>
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