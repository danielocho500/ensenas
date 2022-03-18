import React from 'react'
import { useNavigate} from 'react-router-dom'

import { useGetImage } from '../../hooks/useGetImage';
import noImage from '../../img/no-image.png';

export const Card = ({image, title, description, id, precio}) => {

    const {url, loading, error} = useGetImage(image);

    const navigate = useNavigate();

    const handleProductInfo = (e) => {
        e.preventDefault()
        navigate(`${id}`);
    }

    return (
        <div className="card">
            <img className="card-img-top" src={(error) ? noImage : url} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{
                        (description.length > 80)
                            ? description.substring(0,60) + "..."
                            : description
                        }</p>
                    <p className='card__price'> {"$"+precio+ " MXN"} </p>
                    <a href="#" className="btn btn-primary btn__card" onClick={handleProductInfo}>Ver Más</a>
                </div>
        </div>
    )
}
