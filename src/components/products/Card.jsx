import React from 'react'
import { useNavigate} from 'react-router-dom'

export const Card = ({url, Titulo ,Descripcion,Precio, id}) => {

    const navigate = useNavigate();

    const handleProductInfo = (e) => {
        e.preventDefault()
        navigate(`${id}`);
    }

    return (
        <div className="card">
            <img className="card-img-top" src={url} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{Titulo}</h5>
                    <p className="card-text">{
                        (Descripcion.length > 80)
                            ? Descripcion.substring(0,60) + "..."
                            : Descripcion
                        }</p>
                    <p className='card__price'> {"$"+Precio+ " MXN"} </p>
                    <a href="#" className="btn btn-primary btn__card" onClick={handleProductInfo}>Ver Más</a>
                </div>
        </div>
    )
}
