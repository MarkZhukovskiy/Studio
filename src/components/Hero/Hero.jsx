import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = ({ 
  title = "Разработка мобильных приложений и сервисов",
  subtitle = "Знаем, как решить вашу задачу оптимальным способом",
  description = "Подберем подходящее решение с учетом целей и возможностей",
  primaryAction = { label: 'Заказать приложение', onClick: () => {} },
  secondaryAction = { label: 'Записаться на онлайн-консультацию', onClick: () => {} },
  variant = 'default', // 'default', 'alt', 'gradient'
  onScroll 
}) => {
  const heroRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        hero.style.transition = 'all 0.6s ease-out';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      let moveX = (x - centerX) / 20;
      let moveY = (y - centerY) / 20;
      
      if (variant === 'alt') {
        moveX = (x - centerX) / 25;
        moveY = (y - centerY) / 25;
        svgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.5}deg)`;
      } else if (variant === 'gradient') {
        moveX = (x - centerX) / 30;
        moveY = (y - centerY) / 30;
        svgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      } else {
        svgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    }
  };

  const handleMouseLeave = () => {
    if (svgRef.current) {
      if (variant === 'alt') {
        svgRef.current.style.transform = 'translate(0, 0) rotate(0deg)';
      } else if (variant === 'gradient') {
        svgRef.current.style.transform = 'translate(0, 0) scale(1)';
      } else {
        svgRef.current.style.transform = 'translate(0, 0)';
      }
    }
  };

  const renderSVG = () => {
    switch (variant) {
      case 'alt':
        return (
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg}>
            <rect x="150" y="80" width="100" height="200" rx="20" stroke="#1F2937" strokeWidth="3" fill="none"/>
            <rect x="155" y="90" width="90" height="180" rx="15" fill="#F3F4F6" stroke="#1F2937" strokeWidth="1"/>
            <rect x="155" y="90" width="90" height="20" fill="#06B6D4" opacity="0.8"/>
            <circle cx="165" cy="100" r="2" fill="#FFFFFF" />
            <rect x="175" y="98" width="30" height="4" rx="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="210" y="98" width="15" height="4" rx="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="230" y="98" width="10" height="4" rx="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="165" y="120" width="70" height="8" rx="4" fill="#3B82F6" opacity="0.7" />
            <rect x="165" y="135" width="50" height="6" rx="3" fill="#6B7280" opacity="0.6" />
            <path d="M 165 160 L 175 155 L 185 158 L 195 150 L 205 153 L 215 145 L 225 148 L 235 140" stroke="#06B6D4" strokeWidth="2" fill="none"/>
            <circle cx="175" cy="155" r="2" fill="#06B6D4" />
            <circle cx="185" cy="158" r="2" fill="#06B6D4" />
            <circle cx="195" cy="150" r="2" fill="#06B6D4" />
            <circle cx="205" cy="153" r="2" fill="#06B6D4" />
            <circle cx="215" cy="145" r="2" fill="#06B6D4" />
            <circle cx="225" cy="148" r="2" fill="#06B6D4" />
            <circle cx="235" cy="140" r="2" fill="#06B6D4" />
            <rect x="165" y="180" width="25" height="12" rx="6" fill="#3B82F6" opacity="0.8" />
            <rect x="200" y="180" width="25" height="12" rx="6" fill="#06B6D4" opacity="0.8" />
            <rect x="235" y="180" width="25" height="12" rx="6" fill="#10B981" opacity="0.8" />
            <circle cx="80" cy="120" r="12" fill="#06B6D4" opacity="0.1" />
            <circle cx="320" cy="280" r="18" fill="#3B82F6" opacity="0.1" />
            <circle cx="90" cy="300" r="8" fill="#10B981" opacity="0.1" />
            <circle cx="310" cy="100" r="10" fill="#F59E0B" opacity="0.1" />
            <path d="M 50 150 Q 80 140 110 150" stroke="#06B6D4" strokeWidth="1" opacity="0.3" fill="none"/>
            <path d="M 290 200 Q 320 190 350 200" stroke="#3B82F6" strokeWidth="1" opacity="0.3" fill="none"/>
          </svg>
        );
      
      case 'gradient':
        return (
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg}>
            <defs>
              <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.1}} />
                <stop offset="100%" style={{stopColor: '#06B6D4', stopOpacity: 0.1}} />
              </linearGradient>
              <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#F8FAFC', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#F1F5F9', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <rect x="140" y="60" width="120" height="240" rx="25" fill="url(#phoneGradient)" stroke="#1F2937" strokeWidth="2"/>
            <rect x="150" y="75" width="100" height="210" rx="18" fill="url(#screenGradient)" stroke="#1F2937" strokeWidth="1"/>
            <rect x="150" y="75" width="100" height="25" fill="#06B6D4" opacity="0.9"/>
            <circle cx="165" cy="87" r="2" fill="#FFFFFF" />
            <rect x="175" y="85" width="35" height="4" rx="2" fill="#FFFFFF" opacity="0.9"/>
            <rect x="215" y="85" width="20" height="4" rx="2" fill="#FFFFFF" opacity="0.9"/>
            <rect x="240" y="85" width="5" height="4" rx="2" fill="#FFFFFF" opacity="0.9"/>
            <rect x="165" y="110" width="70" height="10" rx="5" fill="#3B82F6" opacity="0.8" />
            <rect x="165" y="125" width="55" height="8" rx="4" fill="#6B7280" opacity="0.7" />
            <path d="M 165 150 L 175 145 L 185 148 L 195 140 L 205 143 L 215 135 L 225 138 L 235 130" stroke="#06B6D4" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <circle cx="175" cy="145" r="3" fill="#06B6D4" />
            <circle cx="185" cy="148" r="3" fill="#06B6D4" />
            <circle cx="195" cy="140" r="3" fill="#06B6D4" />
            <circle cx="205" cy="143" r="3" fill="#06B6D4" />
            <circle cx="215" cy="135" r="3" fill="#06B6D4" />
            <circle cx="225" cy="138" r="3" fill="#06B6D4" />
            <circle cx="235" cy="130" r="3" fill="#06B6D4" />
            <rect x="165" y="170" width="28" height="14" rx="7" fill="#3B82F6" opacity="0.9" />
            <rect x="200" y="170" width="28" height="14" rx="7" fill="#06B6D4" opacity="0.9" />
            <rect x="235" y="170" width="28" height="14" rx="7" fill="#10B981" opacity="0.9" />
            <circle cx="70" cy="120" r="15" fill="#06B6D4" opacity="0.08" />
            <circle cx="330" cy="280" r="22" fill="#3B82F6" opacity="0.08" />
            <circle cx="80" cy="320" r="10" fill="#10B981" opacity="0.08" />
            <circle cx="320" cy="80" r="12" fill="#F59E0B" opacity="0.08" />
            <path d="M 40 160 Q 70 150 100 160" stroke="#06B6D4" strokeWidth="2" opacity="0.2" fill="none"/>
            <path d="M 300 210 Q 330 200 360 210" stroke="#3B82F6" strokeWidth="2" opacity="0.2" fill="none"/>
            <path d="M 60 240 Q 90 230 120 240" stroke="#10B981" strokeWidth="2" opacity="0.2" fill="none"/>
          </svg>
        );
      
      default:
        return (
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg}>
            <rect x="120" y="100" width="160" height="200" rx="15" stroke="#1F2937" strokeWidth="3" fill="none"/>
            <rect x="130" y="115" width="140" height="170" rx="8" fill="#F3F4F6" stroke="#1F2937" strokeWidth="1"/>
            <rect x="130" y="115" width="140" height="25" fill="#06B6D4" opacity="0.8"/>
            <circle cx="145" cy="127" r="3" fill="#FFFFFF" />
            <rect x="140" y="150" width="120" height="8" rx="4" fill="#3B82F6" opacity="0.7" />
            <path d="M 150 200 L 160 195 L 170 200 L 180 190 L 190 195 L 200 185 L 210 190 L 220 180" stroke="#06B6D4" strokeWidth="2" fill="none"/>
            <rect x="150" y="220" width="40" height="12" rx="6" fill="#3B82F6" opacity="0.8" />
            <rect x="200" y="220" width="40" height="12" rx="6" fill="#06B6D4" opacity="0.8" />
            <circle cx="80" cy="120" r="15" fill="#06B6D4" opacity="0.1" />
            <circle cx="320" cy="280" r="20" fill="#3B82F6" opacity="0.1" />
          </svg>
        );
    }
  };

  const heroClassName = variant === 'gradient' ? `${styles.hero} ${styles.gradientHero}` : styles.hero;

  return (
    <section className={heroClassName} ref={heroRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              {title}
            </h1>
            
            <h2 className={styles.subtitle}>
              {subtitle}
            </h2>
            
            <p className={styles.description}>
              {description}
            </p>
            
            <div className={styles.buttons}>
              <button 
                className={styles.primaryButton}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </button>
              <button 
                className={styles.secondaryButton}
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </button>
            </div>
          </div>
          
          <div 
            className={styles.illustration}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.svgContainer} ref={svgRef}>
              {renderSVG()}
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator} onClick={onScroll}>
        <span>Прокрутите вниз</span>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </section>
  );
};

export default React.memo(Hero);