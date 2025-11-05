import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/shared/config/routes.config';
import styles from './BecomeExpertFormPage.module.css';

export function BecomeExpertFormPage() {
  const [formData, setFormData] = useState({
    phone: '',
    lastName: '',
    firstName: '',
    patronymic: '',
    expertiseArea: '',
    socialNetwork: '',
    invitationCode: '',
    workExperience: '',
    additionalMessage: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhoneChange = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Format as +7 000 000-00-00
    let formatted = '';
    if (digits.length > 0) {
      formatted = '+7';
      if (digits.length > 1) {
        formatted += ' ' + digits.slice(1, 4);
        if (digits.length > 4) {
          formatted += ' ' + digits.slice(4, 7);
          if (digits.length > 7) {
            formatted += '-' + digits.slice(7, 9);
            if (digits.length > 9) {
              formatted += '-' + digits.slice(9, 11);
            }
          }
        }
      }
    }
    handleChange('phone', formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add form submission logic
  };

  return (
    <div className={styles.landing}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Link to={ROUTES_CONFIG.BECOME_EXPERT} className={styles.backButton}>
            ← Назад
          </Link>
          <h1 className={styles.heroTitle}>
            <span className={styles.textWhite}>Расскажите о себе, чтобы</span><br />
            <span className={styles.textGray}>мы могли</span> <span className={styles.textWhite}>пригласить вас</span><br />
            <span className={styles.textWhite}>в сообщество</span>
          </h1>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Phone Number */}
          <div className={styles.formField}>
            <label className={styles.label}>Номер телефона</label>
            <p className={styles.helperText}>На него откроется доступ к личному кабинету.</p>
            <input
              type="tel"
              className={styles.input}
              placeholder="+7 000 000-00-00"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
          </div>

          {/* Full Name */}
          <div className={styles.formField}>
            <label className={styles.label}>ФИО</label>
            <p className={styles.helperText}>Будет необходимо для подписания документов и договора.</p>
            <div className={styles.nameFields}>
              <input
                type="text"
                className={styles.input}
                placeholder="Фамилия"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Имя"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Отчество"
                value={formData.patronymic}
                onChange={(e) => handleChange('patronymic', e.target.value)}
              />
            </div>
          </div>

          {/* Expertise Area */}
          <div className={styles.formField}>
            <label className={styles.label}>Экспертная область</label>
            <p className={styles.helperText}>Чтобы мы понимали, в какой сфере вы работаете.</p>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={formData.expertiseArea}
                onChange={(e) => handleChange('expertiseArea', e.target.value)}
              >
                <option value="">Выберите самую близкую</option>
                <option value="psychology">Психология</option>
                <option value="coaching">Коучинг</option>
                <option value="therapy">Терапия</option>
                <option value="consulting">Консультирование</option>
              </select>
              <span className={styles.selectIcon}>+</span>
            </div>
          </div>

          {/* Social Network */}
          <div className={styles.formField}>
            <label className={styles.label}>Социальная сеть</label>
            <p className={styles.helperText}>Для знакомства с вашим стилем работы и контентом.</p>
            <input
              type="url"
              className={styles.input}
              placeholder="instagram.com/link"
              value={formData.socialNetwork}
              onChange={(e) => handleChange('socialNetwork', e.target.value)}
            />
          </div>

          {/* Invitation Code */}
          <div className={styles.formField}>
            <label className={styles.label}>Код приглашения</label>
            <p className={styles.helperText}>Если вас пригласил другой эксперт, введите код приглашения для получения бонусов</p>
            <input
              type="text"
              className={styles.input}
              placeholder="EXP-000000"
              value={formData.invitationCode}
              onChange={(e) => handleChange('invitationCode', e.target.value)}
            />
          </div>

          {/* Work Experience */}
          <div className={styles.formField}>
            <label className={styles.label}>Опыт работы</label>
            <p className={styles.helperText}>Сколько лет вы практикуете</p>
            <div className={styles.segmentedControl}>
              <button
                type="button"
                className={`${styles.segmentButton} ${formData.workExperience === '0-3' ? styles.segmentButtonActive : ''}`}
                onClick={() => handleChange('workExperience', '0-3')}
              >
                до 3х лет
              </button>
              <button
                type="button"
                className={`${styles.segmentButton} ${formData.workExperience === '3-10' ? styles.segmentButtonActive : ''}`}
                onClick={() => handleChange('workExperience', '3-10')}
              >
                3-10 лет
              </button>
              <button
                type="button"
                className={`${styles.segmentButton} ${formData.workExperience === '10+' ? styles.segmentButtonActive : ''}`}
                onClick={() => handleChange('workExperience', '10+')}
              >
                10+ лет
              </button>
            </div>
          </div>

          {/* Additional Message */}
          <div className={styles.formField}>
            <label className={styles.label}>Хотите что-то добавить?</label>
            <p className={styles.helperText}>Мы открыты для вашей истории.</p>
            <textarea
              className={styles.textarea}
              placeholder="Сообщение"
              value={formData.additionalMessage}
              onChange={(e) => handleChange('additionalMessage', e.target.value)}
              rows={5}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

