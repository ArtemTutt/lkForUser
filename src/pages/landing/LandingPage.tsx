import { Link } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/shared/config/routes.config';
import styles from './LandingPage.module.css';

export function LandingPage() {
  return (
    <div className={styles.landing}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Ежедневные подсказки и проверенные<br />
            эксперты — всё для внутреннего<br />
            роста, в одном месте.
          </h1>
          <div className={styles.heroButtons}>
            <Link to={ROUTES_CONFIG.EXPERTS} className={styles.buttonPrimary}>
              Выбрать эксперта
            </Link>
            <button className={styles.buttonSecondary}>
              Скачать Alma
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p className={styles.bottomText}>
          Alma подстраивается под вашу<br />
          натальную карту и даёт<br />
          персональные и точные<br />
          подсказки
        </p>
      </div>

      <div className={styles.featuresGridFirst}>
        <div className={`${styles.featureBlock} ${styles.featureBlockBlue} ${styles.featureBlockWide}`}>
          <h3 className={styles.featureTitle}>
            Личные рекомендации каждый день подсказывают лучшее время для действий, отдыха и фокуса.
          </h3>
          <div className={styles.featureContent}>
            <p className={styles.featureSubtitle}>Внешние обстоятельства не создают давления</p>
            <p className={styles.featureText}>
              Елена, Луна проходит через знак Тельца, а это значит, что внутренние ощущения становятся особенно важными. Прислушайся к телу: возможно, оно просит больше покоя, тишины или просто чашку любимого чая.
            </p>
          </div>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockBrown} ${styles.featureBlockNarrow}`}>
          <h3 className={styles.featureTitle}>
            Обученный AI-ассистент отвечает на вопросы, даёт подсказки и мягко направляет в нужный момент.
          </h3>
          <div className={styles.featureContent}>
            <p className={styles.featureText}>
              Твой элемент личности — Янская Земля, энергия горы. Ты надёжен, устойчив и не склонен менять решения, если чувствуешь внутреннюю правоту. Тебе важно создавать фундамент — будь то отношения, работа или собственное развитие.
            </p>
          </div>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockDark} ${styles.featureBlockNarrow}`}>
          <p className={styles.featureText}>
            Практики, медитации и курсы помогают восстановить энергию, ясность и внутренний ритм.
          </p>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockGreen} ${styles.featureBlockWide}`}>
          <h3 className={styles.featureTitle}>
            Полная персональная карта личности на основе разных систем самопознания
          </h3>
          <div className={styles.featureTags}>
            <span className={styles.featureTag}>Астрология</span>
            <span className={styles.featureTag}>Джйотиш</span>
            <span className={styles.featureTag}>Ба-Цзы</span>
            <span className={styles.featureTag}>Нумерология</span>
            <span className={styles.featureTag}>Human Design</span>
            <span className={styles.featureTag}>Хиромантия</span>
            <span className={styles.featureTag}>Санкхья Шастра</span>
          </div>
        </div>
      </div>

      <div className={styles.textSection}>
        <p className={styles.textSectionContent}>
          <span className={styles.textNormal}>Получайте </span>
          <span className={styles.textHighlight}>персональные</span>
          <span className={styles.textNormal}> разборы и рекомендации от </span>
          <span className={styles.textHighlight}>проверенных экспертов</span>
          <span className={styles.textNormal}> в чате или звонке</span>
        </p>
      </div>

      <div className={styles.featuresGrid}>
        <div className={`${styles.featureBlock} ${styles.featureBlockRed}`}>
          <h3 className={styles.featureTitle}>
            В Alma можно выбрать эксперта именно под свою тему — от отношений и карьеры до самопознания.
          </h3>
          <button className={styles.featureButton}>Выбрать эксперта</button>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockPurple}`}>
          <h3 className={styles.featureTitle}>
            Каждый эксперт проходит проверку, а рейтинги и отзывы помогают выбрать самых надёжных.
          </h3>
          <div className={styles.reviewCard}>
            <p className={styles.reviewName}>Елена Викулова</p>
            <p className={styles.reviewText}>
              Консультация была просто волшебной! Эксперт очень тонко и глубоко прочитал мою натальную карту, объяснил мои сильные стороны, страхи и потенциал.
            </p>
            <p className={styles.reviewRating}>⭐ 5</p>
          </div>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockBlue}`}>
          <h3 className={styles.featureTitle}>
            Общайся с экспертом прямо в приложении или на сайте, удобно и без лишних шагов.
          </h3>
          <div className={styles.chatPreview}>
            <div className={styles.chatHeader}>
              <span>Арина Семенова</span>
              <span>Онлайн</span>
            </div>
            <div className={styles.chatMessage}>
              <p>Елена, добрый день! Возвращаюсь к вам с полным разбором вашей натальной карты...</p>
              <span className={styles.chatTime}>12:24</span>
            </div>
          </div>
        </div>

        <div className={`${styles.featureBlock} ${styles.featureBlockGray}`}>
          <h3 className={styles.featureTitle}>
            Оплата проходит через систему Alma, средства сохраняются до завершения сессии для вашей безопасности.
          </h3>
        </div>
      </div>
    </div>
  );
}

