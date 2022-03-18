import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProduct } from '../../hooks/useGetProuct';

import backButton from './../../img/return.svg';

export const Product = () => {
    
    const navigate = useNavigate();

    const {productoId} = useParams();

    const {data , loading, error, url} = useGetProduct(productoId)

    console.log(data)

    const handleReturn = () => {
        navigate('/productos');
    }

    return (
        <div className="product__grid container">
            <div className="backButton" onClick={handleReturn}>
                <img src={backButton}/>
            </div>

            {
                (loading)
                ? <p>Loading...</p>
                : <>
                        <div className="product__image">
                            <img src={url}/>
                        </div>

                        <div className="product__info">
                        <p className='product__category'> {data.categoria} </p>
                        <p className='product__title'> {data.title} </p>
                        <p className='product__price'> {"$"+data.precio} </p>
                        <p className='product__description'> {data.description} </p>
                        {
                            (data.medida) && <p className='productListItem'><span> Medida: </span> {data.medida} </p>
                        }
                        {
                            (data.color) && <p className='productListItem'><span> Color: </span> {data.color} </p>
                        }
                        {
                            (data.forma) && <p className='productListItem'><span> Forma: </span> {data.forma} </p>
                        }
                        </div>

                </>
            }     
            
        </div>
    )
}
