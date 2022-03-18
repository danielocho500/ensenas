import React from 'react'

import placeImg from './../../img/place.svg';
import phoneImg from './../../img/phone.svg';
import mailImg from './../../img/mail.svg';
import facebook from './../../img/facebook.svg';

export const InfoContact = () => {
    return (
        <div className="contact__media">
            <div className="info-flex">
                <a href="https://goo.gl/maps/2f6A3nZortn3x5Ja8" target="_blank" rel="noopener noreferrer">
                    <div className="item-flex">
                        <img src={placeImg} />
                        <p> Guadalupe Victoria #88 Col. Centro </p>
                    </div>
                </a>
                
                <a href="tel:+522282929332" target="_blank" rel="noopener noreferrer">
                    <div className="item-flex">
                        <img src={phoneImg} />
                        <p> +52 228 292 9332 </p>
                    </div>
                </a>

                <div className="item-flex">
                    <img src={mailImg} />
                    <p> correo@correo.com </p>
                </div>
                <a href="https://www.facebook.com/Ensenaz" target="_blank" rel="noopener noreferrer">
                    <div className="item-flex">
                        <img src={facebook} />
                        <p> Enseñas Oficial </p>
                    </div>
                </a>
            </div>
        </div>
    )
}
