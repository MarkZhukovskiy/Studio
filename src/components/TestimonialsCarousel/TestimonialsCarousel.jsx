import React, { useState } from 'react';
import styles from './TestimonialsCarousel.module.css';

const TestimonialsCarousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { title, subtitle, testimonials } = data;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.avatarContainer}>
                <img 
                  src={testimonials[currentSlide].avatar} 
                  alt={testimonials[currentSlide].name}
                  className={styles.avatar}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentSlide].name)}&background=1e1b3a&color=fff&size=80`;
                  }}
                />
              </div>
              <div className={styles.clientInfo}>
                <h3 className={styles.clientName}>{testimonials[currentSlide].name}</h3>
                <p className={styles.clientPosition}>{testimonials[currentSlide].position}</p>
                <p className={styles.clientCompany}>{testimonials[currentSlide].company}</p>
                <div className={styles.rating}>
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>"{testimonials[currentSlide].text}"</p>
            </div>
            
            <div className={styles.projectInfo}>
              <span className={styles.projectLabel}>Проект:</span>
              <span className={styles.projectName}>{testimonials[currentSlide].project}</span>
            </div>
          </div>

          <div className={styles.navigation}>
            <button className={styles.navButton} onClick={prevSlide}>
              ←
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button className={styles.navButton} onClick={nextSlide}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel; 