import React from 'react'
import logo from '../../assets/devSpoonIcon.png'
import "./Header.css"


const Header = () => {
  return (    
        <header className="header">
            <h1 className='logoTitle'>Daily DevSpoon<img src={logo} className='logo'/></h1>
        <ul className="headerMenu">
            <li className="menuItem">Home</li>
            <li className="menuItem">Contato</li>
            <li className="menuItem">Inscreva-se!</li>
        </ul>
      </header>
    
  )
}

export default Header
