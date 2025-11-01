import { useNavigate } from 'react-router-dom'
import styles from './ExpertsCategoryPage.module.css'

export function ExpertsCategoryPage() {
  const navigate = useNavigate()
  // Моковые данные
  const category = {
    id: 1,
    name: 'Астрология',
    expertsCount: 98,
    description: [
      'Изучает, как планеты влияют на судьбу. Планеты подскажут, какие силы вами движут и какие возможности даны.',
      'В Alma — мастера восточной и западной астрологии. Найдите своего астролога, и вы получите карту жизни, с которой легче понять себя и сделать верный шаг.'
    ],
    color: '#8B4513'
  }

  const experts = [
    {
      id: 1,
      name: 'Елена Семенова',
      rating: 4.9,
      description: 'Астрология для меня — это не просто наука о звездах, а искусство понимания души. Я помогаю людям раскрыть их потенциал, найти гармонию и увидеть свой путь через призму—',
      sessions: [
        { title: 'Персональный прогноз год', price: 1200, isTop: true },
        { title: 'Персональный астрологический прогноз', price: 1200, isTop: false }
      ]
    },
    {
      id: 2,
      name: 'Елена Семенова',
      rating: 4.9,
      description: 'Астрология для меня — это не просто наука о звездах, а искусство понимания души. Я помогаю людям раскрыть их потенциал, найти гармонию и увидеть свой путь через призму—',
      sessions: [
        { title: 'Персональный прогноз год', price: 1200, isTop: true },
        { title: 'Персональный астрологический прогноз', price: 1200, isTop: false }
      ]
    },
    {
      id: 3,
      name: 'Елена Семенова',
      rating: 4.9,
      description: 'Астрология для меня — это не просто наука о звездах, а искусство понимания души. Я помогаю людям раскрыть их потенциал, найти гармонию и увидеть свой путь через призму—',
      sessions: [
        { title: 'Персональный прогноз год', price: 1200, isTop: true },
        { title: 'Персональный астрологический прогноз', price: 1200, isTop: false }
      ]
    }
  ]

  return (
    <div className={styles.contentWrapper}>
      {/* Левая колонка - Описание категории */}
      <aside className={styles.categorySidebar}>
        <div className={styles.categoryCard} style={{ backgroundColor: category.color }}>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            <span className={styles.arrow}>←</span> Назад
          </button>
          
          <h1 className={styles.categoryTitle}>{category.name}</h1>
          <p className={styles.categoryCount}>{category.expertsCount} Экспертов</p>
          
          <div className={styles.categoryDescription}>
            {category.description.map((text, index) => (
              <p key={index} className={styles.descriptionText}>{text}</p>
            ))}
          </div>
        </div>
      </aside>

      {/* Правая колонка - Список экспертов */}
      <section className={styles.expertsList}>
        {experts.map((expert) => (
          <div key={expert.id} className={styles.expertCard}>
            {/* Левая часть - Информация об эксперте */}
            <div className={styles.expertInfoSection}>
              <div className={styles.expertHeader}>
                <div className={styles.expertAvatar}></div>
                <div className={styles.expertInfo}>
                  <h2 className={styles.expertName}>{expert.name}</h2>
                  <div className={styles.expertRating}>
                    <span className={styles.star}>★</span>
                    <span className={styles.rating}>{expert.rating}</span>
                  </div>
                </div>
              </div>
              
              <p className={styles.expertDescription}>{expert.description}</p>
            </div>
            
            {/* Правая часть - Сессии */}
            <div className={styles.sessionsSection}>
              <h3 className={styles.sessionsTitle}>Сессии ({expert.sessions.length})</h3>
              {expert.sessions.map((session, index) => (
                <div key={index} className={styles.sessionRow}>
                  <span className={styles.sessionTitle}>{session.title}</span>
                  <div className={styles.sessionPriceWrapper}>
                    {session.isTop && <span className={styles.topBadge}>Топ</span>}
                    <button className={styles.priceButton}>{session.price} Р</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

