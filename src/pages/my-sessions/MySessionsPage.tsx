import styles from './MySessionsPage.module.css'

export function MySessionsPage() {
  return (
    <div className={styles.sessionsWrapper}>
        {/* Левая колонка - Список сессий */}
        <aside className={styles.sessionsSidebar}>
          <h1 className={styles.pageTitle}>Мои сессии</h1>
          
          <div className={styles.tabs}>
            <button className={`${styles.tabButton} ${styles.tabButtonActive}`}>Активные (2)</button>
            <button className={styles.tabButton}>Завершенные</button>
          </div>

          <div className={styles.sessionList}>
            <div className={styles.sessionItem}>
              {/* Placeholder для чата */}
            </div>
            <div className={styles.sessionItem}>
              {/* Placeholder для чата */}
            </div>
          </div>
        </aside>

        {/* Правая колонка - Область чата */}
        <section className={styles.chatArea}>
          <div className={styles.chatPlaceholder}>
            {/* Здесь будет чат */}
          </div>
        </section>
      </div>
  )
}
