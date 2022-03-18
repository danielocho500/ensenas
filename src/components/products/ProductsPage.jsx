import React from 'react'
import { useGetProducts } from '../../hooks/useGetProducts'
import { Loading } from '../basics/Loading'
import { Card } from './Card'
import 'animate.css';

import './products.css'

export const ProductsPage = () => {

  const {data, loading, error} = useGetProducts();
  
  

  return (
    <>
      <h1 className='products__title'> Productos </h1>
      {
        (loading)
          ? <Loading/>
          : <div className="grid-products container animate__fadeIn animate__animated">
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
