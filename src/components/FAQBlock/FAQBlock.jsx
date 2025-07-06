import React, { useState } from 'react';
import styles from './FAQBlock.module.css';

const FAQBlock = ({ data }) => {
  const [activeItem, setActiveItem] = useState(0);
  const { title, subtitle, faqItems } = data;

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? -1 : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.faqContainer}>
          {faqItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`${styles.faqItem} ${activeItem === index ? styles.active : ''}`}
            >
              <button 
                className={styles.questionButton}
                onClick={() => toggleItem(index)}
                aria-expanded={activeItem === index}
              >
                <div className={styles.questionContent}>
                  <span className={styles.questionText}>{item.question}</span>
                </div>
                <svg 
                  className={styles.arrowIcon} 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              
              <div className={styles.answerContainer}>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQBlock; 