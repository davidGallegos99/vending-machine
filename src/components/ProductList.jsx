import React, { useEffect, useState } from 'react'
import { Product } from './Product'

export const ProductList = ({
    error,
    productos
}) => {

    

  return (
    <div className="product-container">
        {
            productos.map(producto => (
                <Product
                    key={producto.id}
                    {...producto}
                />
            ))
        }
    </div>
  )
}
