import { Link } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/shared/config/routes.config';
import styles from './BecomeExpertPage.module.css';

export function BecomeExpertPage() {
  return (
    <div className={styles.landing}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Alma помогает находить клиентов,<br />
            проводить сессии и развивать<br />
            свою практику без лишней<br />
            нагрузки.
          </h1>
          <div className={styles.heroButtons}>
            <Link to={ROUTES_CONFIG.BECOME_EXPERT_FORM} className={styles.buttonPrimary}>
              Стать экспертом
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.textSection}>
        <p className={styles.textSectionContent}>
          <span className={styles.textHighlight}>Находите клиентов,</span>
          <span className={styles.textNormal}> проводите<br />сессии в удобном формате<br />и получайте </span>
          <span className={styles.textHighlight}>стабильный доход</span>
          <span className={styles.textNormal}><br />от своего опыта.</span>
        </p>
      </div>

      <div className={styles.featuresGrid}>
        <div className={`${styles.featureBlock} ${styles.featureBlockPurple}`}>
          <div className={styles.featureBackground}></div>
          <h3 className={styles.featureTitle}>
            Новые клиенты приходят благодаря внутренним алгоритмам и механикам продвижения.
          </h3>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockBlue} ${styles.featureBlockTall}`}>
          <h3 className={styles.featureTitle}>
            Сессии удобно вести через онлайн-записи, расписание, напоминания и мгновенные оплаты с эскроу и чеком.
          </h3>
          <div className={styles.phoneMockup}>
            <div className={styles.phoneHeader}>
              <span>Сессии</span>
              <div className={styles.phoneIcons}>
                <span>🔍</span>
                <span>📅</span>
              </div>
            </div>
            <div className={styles.phoneTabs}>
              <span className={styles.phoneTabActive}>Активные</span>
              <span className={styles.phoneTab}>Завершенные</span>
            </div>
            <div className={styles.phoneSessions}>
              <div className={styles.phoneSession}>
                <div className={styles.phoneSessionAvatar}></div>
                <div className={styles.phoneSessionInfo}>
                  <p className={styles.phoneSessionTitle}>Астрологический разбор</p>
                  <p className={styles.phoneSessionExpert}>Елена Семенова</p>
                  <p className={styles.phoneSessionDate}>2 дня (До 24 сентября)</p>
                </div>
              </div>
              <div className={styles.phoneSession}>
                <div className={styles.phoneSessionAvatar}></div>
                <div className={styles.phoneSessionInfo}>
                  <p className={styles.phoneSessionTitle}>Натальная карта</p>
                  <p className={styles.phoneSessionExpert}>Валентина Петрова</p>
                  <p className={styles.phoneSessionDate}>4 дня (До 28 сентября)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockOrange}`}>
          <div className={styles.featureBackgroundHands}></div>
          <h3 className={styles.featureTitle}>
            Сообщество помогает обмениваться опытом, находить партнёров и запускать совместные проекты.
          </h3>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockBlue}`}>
          <h3 className={styles.featureTitle}>
            Отзывы, уровни и бейджи усиливают доверие, повышают статус и видимость на платформе.
          </h3>
          <div className={styles.reviewCard}>
            <div className={styles.reviewDecorations}>
              <div className={styles.decorationSphere1}></div>
              <div className={styles.decorationSphere2}></div>
              <div className={styles.decorationShape}></div>
            </div>
            <div className={styles.reviewHeader}>
              <p className={styles.reviewName}>Елена Викулова</p>
              <span className={styles.reviewBadge}>🏆</span>
            </div>
            <p className={styles.reviewRating}>⭐ 5</p>
            <p className={styles.reviewDate}>12.02.25</p>
            <p className={styles.reviewText}>
              Консультация была просто волшебной! Эксперт очень тонко и глубоко прочитал мою натальную карту, объяснил мои сильные стороны, страхи и потенциал.
            </p>
          </div>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockGray}`}>
          <h3 className={styles.featureTitle}>
            Юридическая прозрачность обеспечивается договором-офертой, арбитражем и защитой сделки.
          </h3>
        </div>
      </div>
    </div>
  );
}