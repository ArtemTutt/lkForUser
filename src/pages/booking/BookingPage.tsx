import { useParams } from 'react-router-dom'
import styles from './BookingPage.module.css'

export function BookingPage() {
  const { expertId, sessionId } = useParams()

  // Моковые данные - в будущем будут браться из API по ID
  const session = {
    id: sessionId || '1',
    title: 'Подробный астрологический разбор',
    price: 4000,
    format: 'Звонок',
    formatDescription: 'Откроется чат, где можно общаться по видео, голосом и письменно. Результат сессии — звонок и личное общение.'
  }

  const expert = {
    id: expertId || '1',
    name: 'Елена Семенова',
    avatar: ''
  }

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.bookingCard}>
        <div className={styles.serviceHeader}>
          <p className={styles.headerLabel}>Вы запрашиваете</p>
          <h1 className={styles.serviceTitle}>{session.title}</h1>
        </div>

        <div className={styles.expertInfo}>
          <p className={styles.label}>С экспертом</p>
          <div className={styles.expertDetails}>
            <div className={styles.expertAvatar}></div>
            <span className={styles.expertName}>{expert.name}</span>
          </div>
        </div>

        <div className={styles.formatSection}>
          <p className={styles.label}>Формат</p>
          <h2 className={styles.formatTitle}>{session.format}</h2>
          <p className={styles.formatDescription}>{session.formatDescription}</p>
        </div>

        <div className={styles.paymentSection}>
          <p className={styles.label}>Мы заморозим</p>
          <p className={styles.amount}>{session.price}₽</p>
        </div>

        <button className={styles.submitButton}>
          Добавить карту и отправить запрос
        </button>

        <p className={styles.termsText}>
          Записываясь на сессию, вы соглашаетесь<br />
          <a href="#" className={styles.termsLink}>с договором оказания услуг</a>
        </p>
      </div>
    </div>
  )
}

