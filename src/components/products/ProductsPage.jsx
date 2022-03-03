import React from 'react'
import { Products } from '../data/productos'
import { Card } from './Card'

import './products.css'

export const ProductsPage = () => {
  return (
    <>
      <h1 className='products__title'> Productos </h1>
      
      <div className="grid-products container">
        {
            Products["products"].map(product => (
              <Card
                  key={product.id}
                  {...product}
              />
                  
          ))
        }
      </div>
    </>
  )
}
