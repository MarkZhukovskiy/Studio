import React, { useState } from 'react';
import Header from '../components/Header/header.jsx';
import Footer from '../components/Footer/footer.jsx';
import BriefModal from '../components/BriefModal/BriefModal.jsx';
import ServicesHero from '../components/ServicesHero/ServicesHero.jsx';
import styles from './ServicesPage.module.css';

function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

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

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
    handleOpenModal();
  };

  const services = [
    {
      id: 'mobile',
      title: 'Мобильные приложения',
      description: 'Разрабатываем нативные и кроссплатформенные приложения для iOS и Android. Поможем с проектированием, дизайном, публикацией и продвижением.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="8" width="32" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="20" y="12" width="24" height="40" rx="2" fill="currentColor" opacity="0.1"/>
          <circle cx="32" cy="56" r="2" fill="currentColor"/>
          <rect x="28" y="16" width="8" height="2" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="28" y="20" width="12" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="22" width="10" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="24" width="14" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="26" width="11" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="28" width="13" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="30" width="9" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="32" width="12" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="34" width="8" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="36" width="11" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="38" width="10" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="40" width="13" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="42" width="9" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="28" y="44" width="12" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
        </svg>
      ),
      features: ['iOS & Android', 'Кроссплатформенная разработка', 'UI/UX дизайн', 'Публикация в сторах', 'Поддержка и обновления']
    },
    {
      id: 'web',
      title: 'Веб-сайты',
      description: 'Создаём адаптивные сайты, лендинги и корпоративные порталы. Современные технологии и продуманный UX.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="12" y="20" width="40" height="24" rx="1" fill="currentColor" opacity="0.1"/>
          <rect x="12" y="20" width="40" height="4" fill="currentColor" opacity="0.3"/>
          <rect x="16" y="28" width="8" height="2" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="16" y="32" width="12" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="16" y="34" width="10" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="16" y="36" width="14" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="32" y="28" width="16" height="8" rx="1" fill="currentColor" opacity="0.2"/>
          <rect x="34" y="30" width="12" height="1" rx="0.5" fill="currentColor" opacity="0.6"/>
          <rect x="34" y="32" width="8" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="34" y="34" width="10" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
          <rect x="34" y="36" width="6" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
        </svg>
      ),
      features: ['Адаптивный дизайн', 'Лендинги', 'Корпоративные сайты', 'E-commerce', 'SEO оптимизация']
    },
    {
      id: 'telegram',
      title: 'Telegram Web App',
      description: 'Проектируем и внедряем Telegram-ботов и web app для автоматизации бизнес-процессов и общения с клиентами.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M16 32L28 44L48 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 16C32 16 40 24 48 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 48C32 48 24 40 16 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ['Telegram боты', 'Web App', 'Автоматизация', 'Интеграции', 'Аналитика']
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <Header onOpenModal={handleOpenModal} />
      
      {/* Hero секция */}
      <ServicesHero />

      {/* Секция с услугами */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={styles.serviceCard}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  <div className={styles.serviceFeatures}>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={styles.featureItem}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className={styles.serviceButton}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    Подробнее
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Готовы обсудить ваш проект?</h2>
            <p className={styles.ctaDescription}>
              Оставьте заявку, и мы свяжемся с вами в течение 24 часов для обсуждения деталей
            </p>
            <button className={styles.ctaButton} onClick={handleOpenModal}>
              Обсудить проект
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer socialLinks={[
        { name: 'Telegram', url: 'https://t.me/...' },
        { name: 'Instagram', url: 'https://instagram.com/...' },
        { name: 'LinkedIn', url: 'https://linkedin.com/...' }
      ]} />
      
      <BriefModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitBrief}
        initialService={activeService}
      />
    </div>
  );
}

export default ServicesPage; 