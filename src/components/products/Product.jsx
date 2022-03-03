import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Products } from '../data/productos';

import backButton from './../../img/return.svg';

export const Product = () => {
    
    const navigate = useNavigate();

    const {productoId} = useParams();

    const product = Products["products"][productoId]

    const {url, categoria, Titulo, Precio, Descripcion, Medida, Color, Forma} = product

    const handleReturn = () => {
        navigate('/ensenas/productos');
    }

    return (
        <div className="product__grid container">
            <div className="backButton" onClick={handleReturn}>
                <img src={backButton}/>
            </div>
            <div className="product__image">
                <img src={url}/>
            </div>

            <div className="product__info">
                <p className='product__category'> {categoria} </p>
                <p className='product__title'> {Titulo} </p>
                <p className='product__price'> {"$"+Precio} </p>
                <p className='product__description'> {Descripcion} </p>
                {
                    (Medida) && <p className='productListItem'><span> Medida: </span> {Medida} </p>
                }
                {
                    (Color) && <p className='productListItem'><span> Color: </span> {Color} </p>
                }
                {
                    (Forma) && <p className='productListItem'><span> Forma: </span> {Forma} </p>
                }
            </div>
        </div>
    )
}
