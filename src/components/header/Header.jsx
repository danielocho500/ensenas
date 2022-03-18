import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

import logoSmall from './../../img/logoSmallNoLetter.png';
import './header.css'

export const Header = () => {
  
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation()
    const link = e.target.getAttribute('value');

    navigate(link)
  }

  return (
    <>

    
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom menu-flex">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src={logoSmall} alt="logo" className='header__img'/>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item" onClick={handleClick}><a className="nav-link active" value='/'> Inicio </a></li>
            <li className="nav-item" onClick={handleClick}><a value='/productos' className="nav-link">Productos</a></li>
            <li className="nav-item" onClick={handleClick}><a value='/contacto' className="nav-link">Contacto</a></li>
          </ul>
        </header>
      </div>

    </>
  )
}
