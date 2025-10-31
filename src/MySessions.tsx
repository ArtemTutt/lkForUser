import { Link } from 'react-router-dom'
import { useState } from 'react'
import './MySessions.css'

function MySessions() {
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
        <div className="sessions-wrapper">
          {/* Левая колонка - Список сессий */}
          <aside className="sessions-sidebar">
            <h1 className="page-title">Мои сессии</h1>
            
            <div className="tabs">
              <button className="tab-button active">Активные (2)</button>
              <button className="tab-button">Завершенные</button>
            </div>

            <div className="session-list">
              <div className="session-item">
                {/* Placeholder для чата */}
              </div>
              <div className="session-item">
                {/* Placeholder для чата */}
              </div>
            </div>
          </aside>

          {/* Правая колонка - Область чата */}
          <section className="chat-area">
            <div className="chat-placeholder">
              {/* Здесь будет чат */}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default MySessions