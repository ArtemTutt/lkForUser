import { useNavigate } from 'react-router-dom'
import styles from './ExpertProfilePage.module.css'
import { ROUTES_CONFIG } from '@/shared/config/routes.config'

export function ExpertProfilePage() {
  const navigate = useNavigate()

  // Моковый ID эксперта - в будущем будет из роута или контекста
  const expertId = '1'
  return (
    <div className={styles.contentWrapper}>
        {/* Левая колонка - Информация об эксперте */}
        <aside className={styles.expertSidebar}>
          <div className={styles.expertSidebarContent}>
            <button className={styles.backButton}>
              <span className={styles.arrow}>←</span> Назад
            </button>
            
            <div className={styles.expertCard}>
              <div className={styles.expertAvatar}></div>
              
              <h1 className={styles.expertName}>Елена Семенова</h1>
              <p className={styles.expertSpecialties}>Астро, Энергопрактика, Тело</p>
              
              <div className={styles.expertStats}>
                <div className={styles.statItem}>
                  <span className={styles.star}>★</span>
                  <span className={styles.rating}>4.9</span>
                </div>
                <div className={`${styles.statItem} ${styles.statItemLevel}`}>
                  <span>3 уровень</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Правая колонка - Описание и услуги */}
        <section className={styles.expertContent}>
          <div className={styles.aboutSection}>
            <h2 className={styles.sectionTitle}>О себе</h2>
            <p className={styles.aboutText}>
              Астрология для меня — это не просто наука о звёздах, а искусство понимания души. 
              Я помогаю людям раскрыть их потенциал, найти гармонию и увидеть свой путь через 
              призму небесных карт.
            </p>
            <p className={styles.aboutText}>
              Моя цель — не давать готовые ответы, а помогать вам услышать себя. Вместе мы 
              разберёмся в вопросах любви, карьеры, предназначения и ваших уникальных талантов. 
              Давайте заглянем в ваш космос и откроем новые горизонты!
            </p>
          </div>

          <div className={styles.sessionsSection}>
            <h2 className={styles.sectionTitle}>Сессии (8)</h2>
            
            <div className={styles.sessionCard}>
              <span className={styles.sessionCategory}>Астрология</span>
              <h3 className={styles.sessionTitle}>Персональный подробный прогноз на год</h3>
              <p className={styles.sessionDescription}>
                Разбор главных астрологических тенденций и поворотов, которые ждут вас в 
                течение ближайших 12 месяцев.
              </p>
              <div className={styles.sessionFooter}>
                <button 
                  className={styles.bookButton}
                  onClick={() => navigate(ROUTES_CONFIG.BOOKING(expertId, '1'))}
                >
                  Забронировать
                </button>
                <span className={styles.sessionPrice}>1200 ₽</span>
              </div>
            </div>

            <div className={styles.sessionCard}>
              <span className={styles.sessionCategory}>Астрология</span>
              <h3 className={styles.sessionTitle}>Персональный подробный прогноз на год</h3>
              <p className={styles.sessionDescription}>
                Разбор главных астрологических тенденций и поворотов, которые ждут вас в 
                течение ближайших 12 месяцев.
              </p>
              <div className={styles.sessionFooter}>
                <button 
                  className={styles.bookButton}
                  onClick={() => navigate(ROUTES_CONFIG.BOOKING(expertId, '1'))}
                >
                  Забронировать
                </button>
                <span className={styles.sessionPrice}>1200 ₽</span>
              </div>
            </div>

            <div className={styles.sessionCard}>
              <span className={styles.sessionCategory}>Астрология</span>
              <h3 className={styles.sessionTitle}>Персональный подробный прогноз на год</h3>
              <p className={styles.sessionDescription}>
                Разбор главных астрологических тенденций и поворотов, которые ждут вас в 
                течение ближайших 12 месяцев.
              </p>
              <div className={styles.sessionFooter}>
                <button 
                  className={styles.bookButton}
                  onClick={() => navigate(ROUTES_CONFIG.BOOKING(expertId, '1'))}
                >
                  Забронировать
                </button>
                <span className={styles.sessionPrice}>1200 ₽</span>
              </div>
            </div>

            <div className={styles.sessionCard}>
              <span className={styles.sessionCategory}>Астрология</span>
              <h3 className={styles.sessionTitle}>Персональный подробный прогноз на год</h3>
              <p className={styles.sessionDescription}>
                Разбор главных астрологических тенденций и поворотов, которые ждут вас в 
                течение ближайших 12 месяцев.
              </p>
              <div className={styles.sessionFooter}>
                <button 
                  className={styles.bookButton}
                  onClick={() => navigate(ROUTES_CONFIG.BOOKING(expertId, '1'))}
                >
                  Забронировать
                </button>
                <span className={styles.sessionPrice}>1200 ₽</span>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
