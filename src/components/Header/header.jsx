import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import headerConfig from '../../config/header';

const Header = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Плавный скролл по якорям
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} role="banner">
        <div className={styles.container}>
          {/* Логотип */}
          <div className={styles.logo} onClick={handleLogoClick} style={{ cursor: 'pointer' }} tabIndex={0} aria-label="На главную" role="button" onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleLogoClick()}>
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8L20 16L10 24" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="30" y="20" fill="#1F2937" fontSize="16" fontWeight="600" fontFamily="system-ui">Mobile First</text>
            </svg>
          </div>

          {/* Навигация */}
          <nav className={styles.navigation} aria-label="Основная навигация">
            <ul className={styles.navList}>
              {headerConfig.navigationItems.map((item) => (
                <li key={item.id} className={styles.navItem}>
                  {item.href.startsWith('/') ? (
                    <Link 
                      to={item.href} 
                      className={`${styles.navLink} ${location.pathname === item.href ? styles.active : ''}`}
                      aria-current={location.pathname === item.href ? 'page' : undefined}
                      tabIndex={0}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className={styles.navLink}
                      onClick={e => handleNavClick(e, item.href)}
                      tabIndex={0}
                      aria-label={item.label}
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
            <a href={`mailto:${headerConfig.email}`} className={styles.email} aria-label={`Написать на ${headerConfig.email}`} tabIndex={0}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{headerConfig.email}</span>
            </a>
            {/* Мессенджеры */}
            <div className={styles.messengers}>
              {headerConfig.messengers.map(m => (
                <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer" className={styles.messengerLink} aria-label={m.label} tabIndex={0}>
                  {m.icon}
                </a>
              ))}
            </div>
            {/* CTA кнопка */}
            <button className="btn-primary" onClick={onOpenModal} aria-label="Обсудить проект" tabIndex={0}>
              Обсудить проект
            </button>
          </div>

          {/* Бургер меню для мобильных */}
          <button 
            className={styles.burgerMenu} 
            onClick={handleMobileMenuToggle}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMobileMenuOpen}
            tabIndex={0}
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
          <div className={styles.mobileOverlay} onClick={handleMobileMenuClose} aria-label="Закрыть меню" tabIndex={0}></div>
          <div className={styles.mobileMenu} role="dialog" aria-modal="true">
            <div className={styles.mobileMenuHeader}>
              <div className={styles.logo} onClick={handleLogoClick} style={{ cursor: 'pointer' }} tabIndex={0} aria-label="На главную" role="button" onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleLogoClick()}>
                <svg width="100" height="26" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8L20 16L10 24" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="30" y="20" fill="#1F2937" fontSize="16" fontWeight="600" fontFamily="system-ui">Mobile First</text>
                </svg>
              </div>
              <button 
                className={styles.closeButton} 
                onClick={handleMobileMenuClose}
                aria-label="Закрыть меню"
                tabIndex={0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <nav className={styles.mobileNavigation} aria-label="Мобильная навигация">
              <ul className={styles.mobileNavList}>
                {headerConfig.navigationItems.map((item) => (
                  <li key={item.id} className={styles.mobileNavItem}>
                    <a 
                      href={item.href} 
                      className={styles.mobileNavLink}
                      onClick={e => handleNavClick(e, item.href)}
                      tabIndex={0}
                      aria-label={item.label}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.mobileContacts}>
              <a href={`mailto:${headerConfig.email}`} className={styles.mobileEmail} aria-label={`Написать на ${headerConfig.email}`} tabIndex={0}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {headerConfig.email}
              </a>
              <div className={styles.mobileMessengers}>
                {headerConfig.messengers.map(m => (
                  <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer" className={styles.mobileMessengerLink} aria-label={m.label} tabIndex={0}>
                    {m.icon}
                  </a>
                ))}
              </div>
              <button className="btn-primary" onClick={() => { onOpenModal(); handleMobileMenuClose(); }} aria-label="Обсудить проект" tabIndex={0}>
                Обсудить проект
              </button>
            </div>
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