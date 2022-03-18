import React from 'react'

import logolarge from './../../img/logoLarge.png';
import facebook from './../../img/facebook.svg';
import whatsapp from './../../img/whatsapp.svg';
import { Navigate, NavLink } from 'react-router-dom';

import './footer.css';

export const Footer = () => {
    return(
        <footer className='footer'>
            <div className="footer__logo">
                <img src={logolarge}/>
            </div>

            <div className="footer__links">
                <NavLink to="/"> Inicio </NavLink>
                <NavLink to="productos"> Productos </NavLink>
                <NavLink to="contacto"> Contacto </NavLink>
            </div>

            <div className="footer__icons">
                
                <a href="https://wa.me/+522282929332" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp}/>
                </a>
                
                <a href="https://www.facebook.com/Ensenaz" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} />
                </a>

            </div>
        </footer>
    )
}
