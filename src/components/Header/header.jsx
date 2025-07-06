import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('white'); // 'white' или 'blue'
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Определяем цвет шапки в зависимости от секции
      const scrollPosition = window.scrollY + 100; // Небольшой отступ
      const windowHeight = window.innerHeight;
      
      // Hero секция (синяя)
      if (scrollPosition < windowHeight) {
        setHeaderColor('white');
      }
      // ProjectsOverview секция (белая)
      else if (scrollPosition < windowHeight * 2) {
        setHeaderColor('blue');
      }
      // DevelopmentStages секция (синяя)
      else if (scrollPosition < windowHeight * 3) {
        setHeaderColor('white');
      }
      // PricingTimeline секция (белая)
      else if (scrollPosition < windowHeight * 4) {
        setHeaderColor('blue');
      }
      // TestimonialsCarousel секция (синяя)
      else if (scrollPosition < windowHeight * 5) {
        setHeaderColor('white');
      }
      // FAQBlock секция (белая)
      else if (scrollPosition < windowHeight * 6) {
        setHeaderColor('blue');
      }
      // ConsultationBlock секция (синяя)
      else if (scrollPosition < windowHeight * 7) {
        setHeaderColor('white');
      }
      // Footer секция (белая)
      else {
        setHeaderColor('blue');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      // Здесь можно добавить логику навигации по якорям
      console.log('Navigation clicked:', e.target.textContent);
    }
  };

  const navigationItems = [
    { id: 'services', label: 'Услуги', href: '/services' },
    { id: 'portfolio', label: 'Портфолио', href: '#portfolio' },
    { id: 'careers', label: 'Вакансии', href: '#careers' },
    { id: 'blog', label: 'Статьи', href: '#blog' },
    { id: 'about', label: 'О нас', href: '#about' }
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${styles[headerColor]}`}>
        <div className={styles.container}>
          {/* Логотип */}
          <div className={styles.logo}>
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8L20 16L10 24" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="30" y="20" fill="#1F2937" fontSize="16" fontWeight="600" fontFamily="system-ui">A&M Create</text>
            </svg>
          </div>

          {/* Навигация */}
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              {navigationItems.map((item) => (
                <li key={item.id} className={styles.navItem}>
                  {item.href.startsWith('/') ? (
                    <Link 
                      to={item.href} 
                      className={`${styles.navLink} ${location.pathname === item.href ? styles.active : ''}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className={styles.navLink}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакты и CTA */}
          <div className={styles.actions}>
            {/* Email */}
            <a href="mailto:hello@company.ru" className={styles.email}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>hello@company.ru</span>
            </a>

            {/* Мессенджеры */}
            <div className={styles.messengers}>
              <a href="https://t.me/company" target="_blank" rel="noopener noreferrer" className={styles.messengerLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.messengerLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* CTA кнопка */}
            <button className={styles.ctaButton} onClick={onOpenModal}>
              Обсудить проект
            </button>
          </div>

          {/* Бургер меню для мобильных */}
          <button 
            className={styles.burgerMenu} 
            onClick={handleMobileMenuToggle}
            aria-label="Открыть меню"
          >
            <span className={`${styles.burgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.burgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.burgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <>
          <div className={styles.mobileOverlay} onClick={handleMobileMenuClose}></div>
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuHeader}>
              <div className={styles.logo}>
                <svg width="100" height="26" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8L20 16L10 24" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="30" y="20" fill="#1F2937" fontSize="16" fontWeight="600" fontFamily="system-ui">A&M Create</text>
                </svg>
              </div>
              <button 
                className={styles.closeButton} 
                onClick={handleMobileMenuClose}
                aria-label="Закрыть меню"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <nav className={styles.mobileNavigation}>
              <ul className={styles.mobileNavList}>
                {navigationItems.map((item) => (
                  <li key={item.id} className={styles.mobileNavItem}>
                    <a 
                      href={item.href} 
                      className={styles.mobileNavLink}
                      onClick={handleMobileMenuClose}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.mobileContacts}>
              <a href="mailto:hello@company.ru" className={styles.mobileEmail}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>hello@company.ru</span>
              </a>
              
              <div className={styles.mobileMessengers}>
                <a href="https://t.me/company" target="_blank" rel="noopener noreferrer" className={styles.mobileMessengerLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Telegram</span>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.mobileMessengerLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <button className={styles.mobileCtaButton} onClick={() => { onOpenModal(); handleMobileMenuClose(); }}>
              Обсудить проект
            </button>
          </div>
        </>
      )}
    </>
  );
};

Header.propTypes = {
  onOpenModal: PropTypes.func.isRequired
};

export default Header;