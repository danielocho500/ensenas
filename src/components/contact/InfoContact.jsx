import React from 'react'

import placeImg from './../../img/place.svg';
import phoneImg from './../../img/phone.svg';
import mailImg from './../../img/mail.svg';
import facebook from './../../img/facebook.svg';

export const InfoContact = () => {
    return (
        <div className="contact__media">
            <div className="info-flex">
                <div className="item-flex">
                    <img src={placeImg} />
                    <p> Guadalupe Victoria #88 Col. Centro </p>
                </div>

                <div className="item-flex">
                    <img src={phoneImg} />
                    <p> 01-800-0000-000 </p>
                </div>

                <div className="item-flex">
                    <img src={mailImg} />
                    <p> correo@correo.com </p>
                </div>
                <div className="item-flex">
                    <img src={facebook} />
                    <p> Nombre de página </p>
                </div>
            </div>
        </div>
    )
}
