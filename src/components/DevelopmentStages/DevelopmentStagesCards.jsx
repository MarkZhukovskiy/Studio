import React, { useState } from 'react';
import { stages } from '../../config/stages';
import styles from './DevelopmentStagesCards.module.css';

const DevelopmentStagesCards = ({ onSubmit }) => {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(checked);
  };

  return (
    <section className={styles.stagesSection}>
      <div className={styles.stagesGrid}>
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={styles.stageCard}
          >
            <div className={styles.iconWrap}>{stage.icon}</div>
            <h3 className={styles.stageTitle}>{stage.title}</h3>
            <p className={styles.stageDesc}>{stage.description}</p>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={checked.includes(stage.id)}
                onChange={() => handleCheck(stage.id)}
              />
              <span className={styles.customCheckbox}></span>
              <span className={styles.checkboxText}>Выбрать этап</span>
            </label>
          </div>
        ))}
      </div>
      {checked.length > 0 && (
        <button className={styles.submitButton} onClick={handleSubmit}>
          Отправить заявку
        </button>
      )}
    </section>
  );
};

export default DevelopmentStagesCards; 