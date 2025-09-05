import React, { useState, useEffect } from 'react';
import styles from './BriefModal.module.css';

const BriefModal = ({ isOpen, onClose, onSubmit, initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    contactMethod: 'phone',
    appType: '',
    budget: '',
    deadline: '',
    description: ''
  });

  // Устанавливаем начальный тип приложения при открытии модального окна
  useEffect(() => {
    if (isOpen && initialService) {
      const serviceMap = {
        'mobile': 'Мобильное приложение',
        'web': 'Веб-сайт',
        'telegram': 'Telegram Web App'
      };
      
      setFormData(prev => ({
        ...prev,
        appType: serviceMap[initialService] || ''
      }));
    }
  }, [isOpen, initialService]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = formData.contactMethod === 'email' ? 'Email обязателен' : 'Телефон обязателен';
    } else {
      if (formData.contactMethod === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.contact)) {
          newErrors.contact = 'Введите корректный email';
        }
      } else {
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
        const cleanPhone = formData.contact.replace(/[\s\-()]/g, '');
        if (!phoneRegex.test(cleanPhone)) {
          newErrors.contact = 'Введите корректный номер телефона';
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Сбросить контакт при смене способа связи
    if (name === 'contactMethod') {
      setFormData(prev => ({ ...prev, contact: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Имитация отправки данных
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Здесь будет реальная отправка на сервер
      // await fetch('/api/brief', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus('success');
      
      // Очищаем форму после успешной отправки
      setTimeout(() => {
        setFormData({
          name: '',
          contact: '',
          contactMethod: 'phone',
          appType: '',
          budget: '',
          deadline: '',
          description: ''
        });
        setSubmitStatus(null);
        onClose();
      }, 3000);

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>
              Заполните бриф — мы свяжемся с вами в ближайшее время
            </h2>
          </div>

          {submitStatus === 'success' ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
              </div>
              <h3>Спасибо!</h3>
              <p>Мы получили ваш бриф и свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Ваше имя <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Введите ваше имя"
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contactMethod" className={styles.label}>
                  Как хотите связаться?
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="phone">Телефон</option>
                  <option value="email">Email</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact" className={styles.label}>
                  {formData.contactMethod === 'email' ? 'Email' : 'Телефон'} <span className={styles.required}>*</span>
                </label>
                <input
                  type={formData.contactMethod === 'email' ? 'email' : 'text'}
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.contact ? styles.inputError : ''}`}
                  placeholder={formData.contactMethod === 'email' ? 'example@email.com' : '+7 (999) 123-45-67'}
                />
                {errors.contact && <span className={styles.errorText}>{errors.contact}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="appType" className={styles.label}>
                  Тип проекта
                </label>
                <select
                  id="appType"
                  name="appType"
                  value={formData.appType}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">Выберите тип проекта (необязательно)</option>
                  <option value="ios">iOS</option>
                  <option value="android">Android</option>
                  <option value="cross-platform">Кроссплатформенное</option>
                  <option value="undecided">Не определился</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="budget" className={styles.label}>
                  Ориентировочный бюджет
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">Выберите бюджет (необязательно)</option>
                  <option value="under-500k">до 500 000 ₽</option>
                  <option value="500k-1m">500 000 – 1 000 000 ₽</option>
                  <option value="1m-3m">1 000 000 – 3 000 000 ₽</option>
                  <option value="over-3m">более 3 000 000 ₽</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="deadline" className={styles.label}>
                  Желаемые сроки запуска
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className={styles.input}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="description" className={styles.label}>
                  Комментарий / описание проекта
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  placeholder="Расскажите о вашем проекте, целях и пожеланиях..."
                  rows="4"
                />
              </div>
              <div className={styles.formNote} style={{marginBottom: 16, color: '#888', fontSize: '14px'}}>
                Вы можете оставить только имя и контакт, остальное обсудим при созвоне.
              </div>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className={styles.loader}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                  </div>
                ) : (
                  'Отправить бриф'
                )}
              </button>
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  Произошла ошибка при отправке. Попробуйте еще раз.
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BriefModal; 