import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.css'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Alma</span>

          <nav className={styles.nav}>
            <a href="#about" className={styles.navLink}>Об Alma</a>
            <Link to="/experts" className={styles.navLink}>Эксперты</Link>
            <a href="#become-expert" className={styles.navLink}>Стать экспертом</a>
          </nav>
        </div>
         
        <div className={styles.headerRight}>
          <Link to="/sessions" className={styles.navLink}>Мои сессии</Link>
          <div 
            className={styles.userMenu}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className={styles.avatar}></div>
            <span className={styles.username}>Александр</span>
            <span className={styles.dropdownIcon}>▾</span>
            
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <button className={styles.dropdownItem}>Подписка Alma Plus</button>
                <button className={styles.dropdownItem}>Поддержка</button>
                <button className={styles.dropdownItem}>Выйти</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header