import React from 'react';
import styles from './ProjectPricingBlock.module.css';

const ProjectPricingBlock = ({ onMoreClick }) => (
  <section className={styles.pricingSection}>
    <div className={styles.pricingContent}>
      <h2 className={styles.title}>Сроки и стоимость</h2>
      <p className={styles.text}>
        Оценка зависит от типа проекта, целей, технологий и подходов. Ниже приведены усредненные значения, на которые можно ориентироваться. Точную стоимость мы рассчитаем после обсуждения деталей.
      </p>
      <button className={styles.button} onClick={onMoreClick}>
        Подробнее о стоимости приложений
      </button>
    </div>
  </section>
);

export default ProjectPricingBlock; 