import React from 'react'

const Header = () => {
  return (
    <header className='headerContainer'>
      <nav className='navMenuContainer'>
        <button className='navMenuButton'>home</button>
        <button className='navMenuButton'>about</button>
        <button className='navMenuButton'>contact</button>
        <button className='navMenuButton'>github</button>
      </nav>

      <div className='toggle'>
        <span className='toggle-item' />
        <span className='toggle-item' />
        <span className='toggle-item' />
      </div>
    </header>
  )
}

export default Header
