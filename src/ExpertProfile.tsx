import { Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function ExpertProfile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Alma</span>

            <nav className="nav">
              <a href="#about" className="nav-link">Об Alma</a>
              <a href="#experts" className="nav-link">Эксперты</a>
              <a href="#become-expert" className="nav-link">Стать экспертом</a>
            </nav>
          </div>
           
          <div className="header-right">
            <Link to="/sessions" className="nav-link">Мои сессии</Link>
            <div 
              className="user-menu"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="avatar"></div>
              <span className="username">Александр</span>
              <span className="dropdown-icon">▾</span>
              
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <button className="dropdown-item">Подписка Alma Plus</button>
                  <button className="dropdown-item">Поддержка</button>
                  <button className="dropdown-item">Выйти</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        <div className="content-wrapper">
          {/* Левая колонка - Информация об эксперте */}
          <aside className="expert-sidebar">
            <button className="back-button">
              <span className="arrow">←</span> Назад
            </button>
            
            <div className="expert-card">
              <div className="expert-avatar"></div>
              
              <h1 className="expert-name">Елена Семенова</h1>
              <p className="expert-specialties">Астро, Энергопрактика, Тело</p>
              
              <div className="expert-stats">
                <div className="stat-item">
                  <span className="star">★</span>
                  <span className="rating">4.9</span>
                </div>
                <div className="stat-item level">
                  <span>3 уровень</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Правая колонка - Описание и услуги */}
          <section className="expert-content">
            <div className="about-section">
              <h2 className="section-title">О себе</h2>
              <p className="about-text">
                Астрология для меня — это не просто наука о звёздах, а искусство понимания души. 
                Я помогаю людям раскрыть их потенциал, найти гармонию и увидеть свой путь через 
                призму небесных карт.
              </p>
              <p className="about-text">
                Моя цель — не давать готовые ответы, а помогать вам услышать себя. Вместе мы 
                разберёмся в вопросах любви, карьеры, предназначения и ваших уникальных талантов. 
                Давайте заглянем в ваш космос и откроем новые горизонты!
              </p>
            </div>

            <div className="sessions-section">
              <h2 className="section-title">Сессии (8)</h2>
              
              <div className="session-card">
                <span className="session-category">Астрология</span>
                <h3 className="session-title">Персональный подробный прогноз на год</h3>
                <p className="session-description">
                  Разбор главных астрологических тенденций и поворотов, которые ждут вас в 
                  течение ближайших 12 месяцев.
                </p>
                <div className="session-footer">
                  <button className="book-button">Забронировать</button>
                  <span className="session-price">1200 ₽</span>
                </div>
              </div>

              <div className="session-card">
                <span className="session-category">Астрология</span>
                <h3 className="session-title">Персональный подробный прогноз на год</h3>
                <p className="session-description">
                  Разбор главных астрологических тенденций и поворотов, которые ждут вас в 
                  течение ближайших 12 месяцев.
                </p>
                <div className="session-footer">
                  <button className="book-button">Забронировать</button>
                  <span className="session-price">1200 ₽</span>
                </div>
              </div>

              <div className="session-card">
                <span className="session-category">Астрология</span>
                <h3 className="session-title">Персональный подробный прогноз на год</h3>
                <p className="session-description">
                  Разбор главных астрологических тенденций и поворотов, которые ждут вас в 
                  течение ближайших 12 месяцев.
                </p>
                <div className="session-footer">
                  <button className="book-button">Забронировать</button>
                  <span className="session-price">1200 ₽</span>
                </div>
              </div>

              <div className="session-card">
                <span className="session-category">Астрология</span>
                <h3 className="session-title">Персональный подробный прогноз на год</h3>
                <p className="session-description">
                  Разбор главных астрологических тенденций и поворотов, которые ждут вас в 
                  течение ближайших 12 месяцев.
                </p>
                <div className="session-footer">
                  <button className="book-button">Забронировать</button>
                  <span className="session-price">1200 ₽</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default ExpertProfile