import { Link } from 'react-router-dom'
import { ROUTES_CONFIG } from '@/shared/config/routes.config'
import styles from './ExpertsPage.module.css'

export function ExpertsPage() {
  const experts = [
    {
      id: 1,
      name: 'Астро',
      description: 'Про планеты, звезды, рождение и путь',
      experts: '240 Экспертов',
      color: '#8B4513'
    },
    {
      id: 2,
      name: 'Нумеро',
      description: 'Про числа, магнетизм и судьбы на судьбах',
      experts: '97 Экспертов',
      color: '#9370DB'
    },
    {
      id: 3,
      name: 'Коучинг',
      description: 'Про цели с огнём и фордж активная форма',
      experts: '194 Эксперта',
      color: '#A0522D'
    },
    {
      id: 4,
      name: 'Пространства',
      description: 'Про токов, чакра и частоту здоровь',
      experts: '95 Экспертов',
      color: '#DAA520'
    },
    {
      id: 5,
      name: 'Энергопрактика',
      description: 'Так, подпитать энергию свою тут тебе',
      experts: '130 Экспертов',
      color: '#2F4F4F'
    },
    {
      id: 6,
      name: 'Тело',
      description: 'Про раскопыа, душины и массажи тела',
      experts: '76 Экспертов',
      color: '#1C1C1C'
    },
    {
      id: 7,
      name: 'Human Design',
      description: 'Про дизайн, авторитет, кару и статистов и цели',
      experts: '75 Экспертов',
      color: '#800020'
    },
    {
      id: 8,
      name: 'Психология',
      description: 'Психологи, сбыт и агрорские проверки',
      experts: '54 Эксперта',
      color: '#8B4513'
    },
    {
      id: 9,
      name: 'Мантика',
      description: 'Про развязать знаки и горизные ответы',
      experts: '104 Эксперта',
      color: '#CD853F'
    },
    {
      id: 10,
      name: 'Предметы-силы',
      description: 'Про артефакты, амулеты и талисманы',
      experts: '90 Экспертов',
      color: '#3B3B3B'
    }
  ]

  return (
    <div className={styles.expertsContainer}>
        <div className={styles.expertsHeader}>
          <span className={styles.expertsTitle}>Эксперты</span>
          <p className={styles.expertsSubtitle}>Присоединяйся к себе через тело, энерги тки и звездах</p>
        </div>

        <div className={styles.expertsGrid}>
          {experts.map((expert) => (
            <div key={expert.id} className={styles.expertItem}>
              <Link 
                to={ROUTES_CONFIG.EXPERTS_CATEGORY_BY_ID(expert.id.toString())} 
                className={styles.expertCard}
                style={{ backgroundColor: expert.color }}
              >
                <div className={styles.expertCardInner}>
                  <h3 className={styles.expertCardTitle}>{expert.name}</h3>
                </div>
              </Link>
              <p className={styles.expertDescription}>{expert.description}</p>
              <p className={styles.expertCount}>
                <span className={styles.expertAvatars}></span>
                {expert.experts}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.infoText}>
            <span className={styles.infoTextLight}>В Alma вы выбираете </span>
            <span className={styles.infoTextHighlight}>проверенных экспертов</span>
            <span className={styles.infoTextLight}> с подтверждённым опытом, ⭐ рейтингом и отзывами.</span>
          </p>
          <p className={styles.infoText}>
            <span className={styles.infoTextLight}>Общение проходит </span>
            <span className={styles.infoTextHighlight}>прямо в приложении</span>
            <span className={styles.infoTextLight}> 💬, а оплата через систему Alma обеспечивает </span>
            <span className={styles.infoTextHighlight}>безопасность и удобство</span>
            <span className={styles.infoTextLight}> каждой сессии.</span>
          </p>
        </div>

        <div className={styles.testimonialBlock}>
          <div className={styles.testimonialBubble}>
            <p className={styles.testimonialText}>«Нашла через Alma эксперта, который помог разобраться с важным выбором»</p>
            <p className={styles.testimonialSource}>Отзыв из ВК</p>
          </div>
          <p className={styles.testimonialAuthor}>Елена С.</p>
        </div>
      </div>
  )
}
