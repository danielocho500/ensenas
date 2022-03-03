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
                <NavLink to="/ensenas/"> Inicio </NavLink>
                <NavLink to="/ensenas/productos"> Productos </NavLink>
                <NavLink to="/ensenas/contacto"> Contacto </NavLink>
            </div>

            <div className="footer__icons">
                <img src={facebook}/>
                <img src={whatsapp}/>
            </div>

            
        </footer>
    )
}
