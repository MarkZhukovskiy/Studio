import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../ui/InputField';
import FormSection from '../../ui/FormSection';
import styles from './ConsultForm.module.css';

// Константы для повторно используемых значений
const FILE_SIZE_LIMIT = 50 * 1024 * 1024; // 50MB
const ALLOWED_EXTENSIONS = /\.(txt|pdf|docx?|xlsx?|pptx?|bmp|gif|jpe?g|png|zip|rar)$/i;

const servicesList = [
  'Аудит', 'Консалтинг', 'Разработка', 'Дизайн', 
  'Прототип', 'Voice App', 'Тех. задание', 'Аналитика', 'Другое'
];
const platformsList = [
  'iOS', 'Android', 'Web-сайт', 'Voice App',
  'IoT-решение', 'Backend', 'Админ-панель'
];
const budgetOptions = [
  'до 1 млн.', '1-3 млн.', '3-5 млн.', 
  '5-10 млн.', '10-30 млн.', 'от 30 млн.'
];

const ConsultForm = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors, watch } = useForm();
  const file = watch('file');

  const onSubmit = (data) => {
    // Проверка файла
    const fileObj = data.file?.[0];
    if (fileObj) {
      if (fileObj.size > FILE_SIZE_LIMIT) {
        setError('file', { type: 'manual', message: 'Файл слишком большой! Максимальный размер - 50МБ' });
        return;
      }
      if (!ALLOWED_EXTENSIONS.test(fileObj.name)) {
        setError('file', { type: 'manual', message: 'Недопустимый формат файла!' });
        return;
      }
    }
    // Здесь отправка данных
    console.log('Form submission data:', data);
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Закрыть форму"
        >
          ×
        </button>
        <h3>Получить консультацию</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
          <FormSection>
            <InputField
              name="name"
              label="Ваше имя"
              placeholder="Введите ваше имя"
              required
              error={errors.name?.message}
              {...register('name', { required: 'Имя обязательно' })}
            />
            <InputField
              name="company"
              label="Компания"
              placeholder="Название компании"
              {...register('company')}
            />
            <InputField
              name="email"
              label="Email"
              type="email"
              placeholder="example@domain.com"
              error={errors.email?.message}
              {...register('email', {
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: 'Некорректный email',
                },
              })}
            />
            <InputField
              name="phone"
              label="Телефон"
              type="tel"
              placeholder="+7 (XXX) XXX-XX-XX"
              required
              error={errors.phone?.message}
              {...register('phone', { required: 'Телефон обязателен' })}
            />
          </FormSection>

          <FormSection title="Описание проекта">
            <label className={styles.textareaGroup}>
              <textarea
                className={styles.textarea}
                placeholder="Опишите детали вашего проекта"
                {...register('description', { required: 'Описание обязательно' })}
                aria-invalid={!!errors.description}
                aria-describedby={errors.description ? 'description-error' : undefined}
              />
              {errors.description && <span className={styles.inputError} id="description-error">{errors.description.message}</span>}
            </label>
          </FormSection>

          <FormSection title="Прикрепить файл">
            <label className={styles.fileUpload}>
              <input
                type="file"
                {...register('file')}
                className={styles.fileInput}
                accept=".txt,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.bmp,.gif,.jpg,.jpeg,.png,.zip,.rar"
                onChange={e => {
                  clearErrors('file');
                }}
              />
              <span className={styles.fileButton}>Выбрать файл</span>
              {file && file.length > 0 && (
                <span className={styles.fileName}>{file[0].name}</span>
              )}
            </label>
            {errors.file && <span className={styles.inputError}>{errors.file.message}</span>}
            <div className={styles.fileHint}>
              Максимальный размер файла: 50МБ. Допустимые форматы: 
              TXT, PDF, DOC/DOCX, XLS/XLSX, PPT/PPTX, изображения, архивы.
            </div>
          </FormSection>

          <FormSection title="Выберите услуги">
            <div className={styles.checkboxGroup}>
              {servicesList.map(service => (
                <label key={service} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value={service}
                    {...register('services')}
                  />
                  {service}
                </label>
              ))}
            </div>
          </FormSection>

          <FormSection title="Планируемые платформы">
            <div className={styles.checkboxGroup}>
              {platformsList.map(platform => (
                <label key={platform} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value={platform}
                    {...register('platforms')}
                  />
                  {platform}
                </label>
              ))}
            </div>
          </FormSection>

          <FormSection title="Бюджет проекта">
            <div className={styles.radioGroup}>
              {budgetOptions.map(option => (
                <label key={option} className={styles.radioLabel}>
                  <input
                    type="radio"
                    value={option}
                    {...register('budget', { required: 'Выберите бюджет' })}
                  />
                  {option}
                </label>
              ))}
            </div>
            {errors.budget && <span className={styles.inputError}>{errors.budget.message}</span>}
          </FormSection>

          <button type="submit" className={styles.submitButton}>
            Отправить запрос
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(ConsultForm);