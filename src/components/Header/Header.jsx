import React, { useState } from 'react'
import './header.css'

const Header = () => {
  const [isOpem, setIdOpen] = useState(false)

  const handleToggle = (e) => {
    setIdOpen(!isOpem)
  }

  return (
    <header className='headerContainer'>
      <nav className='navMenuContainer'>
        <button className='navMenuButton'>Home</button>
        <button className='navMenuButton'>Formacion</button>
        <button className='navMenuButton'>Proyectos</button>
        <button className='navMenuButton'>Experiencia</button>
        <button className='navMenuButton'>Contacto</button>
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
