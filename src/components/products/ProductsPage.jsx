import React from 'react'
import { useGetProducts } from '../../hooks/useGetProducts'
import { Card } from './Card'

import './products.css'

export const ProductsPage = () => {

  const {data, loading, error} = useGetProducts();
  
  

  return (
    <>
      <h1 className='products__title'> Productos </h1>
      {
        (loading)
          ? <p> Cargando </p>
          : <div className="grid-products container">
              {
                  data.map(product => (
                    <Card
                        key={product.id}
                        {...product}
                    />       
                  ))
              }
            </div>
      }
    </>
  )
}
