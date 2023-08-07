import React, { useState } from 'react'
import './header.css'

const Header = () => {
  const [isOpem, setIdOpen] = useState(false)

  const handleToggle = (e) => {
    setIdOpen(!isOpem)
  }

  return (
    <header className='headerContainer'>
      <nav className={`navMenuContainer ${isOpem ? 'submenuActive' : ''}`}>
        <button className='navMenuButton'>
          <ion-icon name='home-outline' />
          <span>
            Home
          </span>
        </button>
        <button className='navMenuButton'>
          <ion-icon name='school-outline' />
          <span>
            Formacion
          </span>
        </button>
        <button className='navMenuButton'>
          <ion-icon name='rocket-outline' />
          <span>
            Proyectos
          </span>
        </button>
        <button className='navMenuButton'>
          <ion-icon name='briefcase-outline' />
          <span>
            Experiencia
          </span>
        </button>
        <button className='navMenuButton'>
          <ion-icon name='call-outline' />
          <span>
            Contacto
          </span>
        </button>
      </nav>

      <div className={`toggle ${isOpem ? 'active' : ''}`} onClick={handleToggle}>
        <span className='toggle-item' />
        <span className='toggle-item' />
        <span className='toggle-item' />
      </div>
    </header>
  )
}

export default Header
