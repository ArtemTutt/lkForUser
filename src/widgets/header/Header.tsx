import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { ROUTES_CONFIG } from '@/shared/config/routes.config'
import styles from './Header.module.css'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
          menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className={`${styles.header} ${isDropdownOpen ? styles.headerExpanded : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Alma" className={styles.logoImage} />

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>Об Alma</Link>
            <Link to={ROUTES_CONFIG.EXPERTS} className={styles.navLink}>Эксперты</Link>
            <Link to={ROUTES_CONFIG.BECOME_EXPERT} className={styles.navLink}>Стать экспертом</Link>
          </nav>
        </div>
         
        <div className={styles.headerRight}>
          <Link to={ROUTES_CONFIG.SESSIONS} className={styles.navLink}>Мои сессии</Link>
          <div 
            ref={userMenuRef}
            className={styles.userMenu}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className={styles.avatar}></div>
            <span className={styles.username}>Александр</span>
            <span className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.dropdownIconRotated : ''}`}>▾</span>
          </div>
          <button 
            ref={menuButtonRef}
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Меню
          </button>
        </div>
      </div>

      {isDropdownOpen && (
        <div className={styles.dropdownMenu}>
          <Link to={ROUTES_CONFIG.SESSIONS} className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>Мои сессии (0)</Link>
          <button className={styles.dropdownItem}>Подписка Alma Plus</button>
          <button className={styles.dropdownItem}>Поддержка</button>
          <button className={`${styles.dropdownItem} ${styles.logoutItem}`}>Выйти</button>
        </div>
      )}

      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className={styles.mobileMenu}>
          <Link to={ROUTES_CONFIG.SESSIONS} className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>Мои сессии (0)</Link>
          <button className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>Подписка Alma Plus</button>
          <button className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>Поддержка</button>
          <button className={`${styles.mobileMenuItem} ${styles.logoutItem}`} onClick={() => setIsMobileMenuOpen(false)}>Выйти</button>
        </div>
      )}
    </header>
  )
}

export default Header