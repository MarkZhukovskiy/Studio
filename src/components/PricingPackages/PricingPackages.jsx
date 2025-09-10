import React from 'react';
import styles from './PricingPackages.module.css';

const PricingPackages = ({ data, onOpenModal }) => {
  return (
    <section className={styles.pricingPackages}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>
        
        <div className={styles.packagesGrid}>
          {data.packages.map((pkg) => (
            <div key={pkg.id} className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <h3 className={styles.packageTitle}>{pkg.name}</h3>
                <p className={styles.packageDescription}>{pkg.description}</p>
              </div>
              
              <div className={styles.packagePrice}>
                <span className={styles.priceRange}>{(pkg.priceRange && pkg.priceRange.trim().toLowerCase().startsWith('от')) ? pkg.priceRange : `от ${(pkg.priceRange || '').trim()}`}</span>
                {pkg.duration && (
                  <span className={styles.duration}>{pkg.duration}</span>
                )}
              </div>
              
              <div className={styles.packageFeatures}>
                <h4 className={styles.featuresTitle}>Что включено:</h4>
                <ul className={styles.featuresList}>
                  {pkg.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <svg 
                        className={styles.checkIcon} 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M20 6L9 17L4 12" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={`${styles.ctaButton} btn-primary`}
                onClick={onOpenModal}
              >
                {pkg.ctaText}
              </button>
            </div>
          ))}
        </div>
        
        <div className={styles.note}>
          <p>
            Стоимость зависит от сложности проекта. Мы подберём оптимальное решение под вашу задачу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
