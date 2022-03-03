import React from 'react'

import sendImg from './../../img/send.svg';

export const FormContact = () => {
    return (
        <form>

            <div className="form-group">
                <label htmlFor="inputName">Nombre</label>
                <input type="text" className="form-control" id="inputName" placeholder="Nombre" />
            </div>
            
            <div className="form-group">
                <label htmlFor="inputNumber">Número de teléfono</label>
                <input type="tel" className="form-control" id="inputNumber" placeholder="Número" />
            </div>

            <div className="form-group">
                <label htmlFor="inputEmail">Correo Electronico</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Correo Electronico" />
            </div>

            <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="4" placeholder='Mensaje'></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn__form"> Enviar </button>
        </form>
    )
}
