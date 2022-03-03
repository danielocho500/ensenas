import React, { useEffect } from 'react'

import './home.css';

export const CardProduct = ({ urlImg, text }) => {

    return (
        <div className="element">
            <div className="mask"> <p>{text} </p> </div>
            <img src={urlImg} className="grid-img" />
        </div>
    )
}
