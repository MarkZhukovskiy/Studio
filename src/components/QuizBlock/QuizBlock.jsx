import React, { useState, useEffect } from 'react';
import styles from './QuizBlock.module.css';

// Конфигурация квиза
const quizConfig = {
  steps: [
    {
      id: 1,
      question: 'Что вы планируете запустить?',
      answers: [
        { id: 'mobile', text: 'Мобильное приложение (iOS/Android)', icon: '📱' },
        { id: 'web', text: 'Сайт / CRM', icon: '💻' },
        { id: 'telegram', text: 'Telegram Web App (сайт в Телеграмме)', icon: '💬' },
        { id: 'unsure', text: 'Не уверен, нужна консультация', icon: '🤔' }
      ]
    },
    {
      id: 2,
      question: 'Какая главная задача проекта?',
      answers: [
        { id: 'startup', text: 'Запуск стартапа', icon: '🚀' },
        { id: 'business', text: 'Проект для действующего бизнеса', icon: '🏢' },
        { id: 'loyalty', text: 'Повысить лояльность клиентов', icon: '❤️' },
        { id: 'other', text: 'Другое', icon: '✏️', hasInput: true }
      ]
    },
    {
      id: 3,
      question: 'Когда планируете запуск?',
      answers: [
        { id: 'month', text: 'В ближайший месяц', icon: '⚡' },
        { id: 'quarter', text: 'В течение 2–3 месяцев', icon: '📅' },
        { id: 'later', text: 'Более чем через 3 месяца', icon: '⏰' },
        { id: 'research', text: 'Пока только изучаю рынок', icon: '🔍' }
      ]
    },
    {
      id: 4,
      question: 'Какой бюджет вы рассматриваете?',
      answers: [
        { id: 'mvp', text: 'До 500 000 ₽ (MVP, тест гипотезы, запуск стартапа)', icon: '💡' },
        { id: 'medium', text: '500 000 – 1 000 000 ₽', icon: '💰' },
        { id: 'enterprise', text: 'От 1 000 000 ₽ (корпоративные решения)', icon: '🏆' }
      ]
    }
  ]
};

const QuizBlock = ({ onSubmit }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [customInput, setCustomInput] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = quizConfig.steps.length;

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleAnswer = (stepId, answerId, answerText) => {
    const newAnswers = { ...answers, [stepId]: { id: answerId, text: answerText } };
    setAnswers(newAnswers);

    // Если это "Другое" - показываем поле ввода
    if (answerId === 'other') {
      return;
    }

    // Переход к следующему шагу
    setTimeout(() => {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsCompleted(true);
      }
    }, 300);
  };

  const handleCustomSubmit = () => {
    if (customInput.trim()) {
      const newAnswers = { ...answers, [currentStep]: { id: 'other', text: customInput } };
      setAnswers(newAnswers);
      setCustomInput('');
      
      setTimeout(() => {
        if (currentStep < totalSteps) {
          setCurrentStep(currentStep + 1);
        } else {
          setIsCompleted(true);
        }
      }, 300);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Валидация
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Обязательное поле';
    if (!formData.phone.trim()) newErrors.phone = 'Обязательное поле';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Собираем все данные
      const submissionData = {
        answers,
        contact: formData,
        timestamp: new Date().toISOString()
      };
      
      console.log('Quiz submitted:', submissionData);
      
      // Отправляем данные (заглушка)
      if (onSubmit) {
        await onSubmit(submissionData);
      }
      
      // Трекинг в Яндекс.Метрику (если доступна)
      // if (typeof ym !== 'undefined') {
      //   ym(window.yaCounterId, 'reachGoal', 'quiz_completed');
      // }
      
      // Показываем успешное сообщение или закрываем
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      
    } catch (error) {
      console.error('Quiz submission error:', error);
      alert('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 1) return digits;
    if (digits.length <= 4) return `+7 (${digits.slice(1)}`;
    if (digits.length <= 7) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  const currentStepData = quizConfig.steps.find(step => step.id === currentStep);

  if (!isStarted) {
    return (
      <section className={styles.quizBlock}>
        <div className={styles.container}>
          <div className={styles.startCard}>
            <div className={styles.startIcon}>🎯</div>
            <h2 className={styles.startTitle}>Узнайте стоимость вашего проекта</h2>
            <p className={styles.startDescription}>
              Пройдите короткий квиз из 4 вопросов и получите персональное предложение
            </p>
            <button className={styles.startButton} onClick={handleStart}>
              Начать квиз
              <svg className={styles.buttonArrow} viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.startNote}>⏱️ Займет всего 2 минуты</div>
          </div>
        </div>
      </section>
    );
  }

  if (isCompleted) {
    return (
      <section className={styles.quizBlock}>
        <div className={styles.container}>
          <div className={styles.finalCard}>
            <div className={styles.finalIcon}>✅</div>
            <h2 className={styles.finalTitle}>Спасибо!</h2>
            <p className={styles.finalDescription}>
              Мы уже собрали предварительные данные по вашему проекту.
              Оставьте контакты, и наш эксперт свяжется с вами в течение 15 минут.
            </p>
            
            <form className={styles.finalForm} onSubmit={handleFormSubmit}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    required
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
                
                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={(e) => handleFormChange('phone', formatPhone(e.target.value))}
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    required
                  />
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email (необязательно)"
                  value={formData.email}
                  onChange={(e) => handleFormChange('email', e.target.value)}
                  className={styles.input}
                />
              </div>
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправляем...' : 'Получить консультацию'}
              </button>
              
              <div className={styles.extraButtons}>
                <a href="https://wa.me/1234567890" className={styles.messengerButton} target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  WhatsApp
                </a>
                <a href="https://t.me/company" className={styles.messengerButton} target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.quizBlock}>
      <div className={styles.container}>
        <div className={styles.quizCard}>
          {/* Прогресс бар */}
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
          </div>
          <div className={styles.stepCounter}>Шаг {currentStep} из {totalSteps}</div>
          
          {/* Вопрос */}
          <h2 className={styles.question}>{currentStepData.question}</h2>
          
          {/* Варианты ответов */}
          <div className={styles.answers}>
            {currentStepData.answers.map((answer) => (
              <button
                key={answer.id}
                className={styles.answerButton}
                onClick={() => handleAnswer(currentStep, answer.id, answer.text)}
              >
                <span className={styles.answerIcon}>{answer.icon}</span>
                <span className={styles.answerText}>{answer.text}</span>
              </button>
            ))}
          </div>
          
          {/* Поле для свободного ввода (если выбрано "Другое") */}
          {answers[currentStep]?.id === 'other' && (
            <div className={styles.customInput}>
              <input
                type="text"
                placeholder="Опишите вашу задачу..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className={styles.input}
                onKeyPress={(e) => e.key === 'Enter' && handleCustomSubmit()}
                autoFocus
              />
              <button 
                className={styles.submitCustomButton}
                onClick={handleCustomSubmit}
                disabled={!customInput.trim()}
              >
                Далее
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizBlock; 