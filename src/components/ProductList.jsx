import React, { useEffect, useState } from 'react'
import { Product } from './Product'

export const ProductList = ({
    error,
    productos,
    showDetails,
    preparationCondition
}) => {

    

  return (
    <div className="product-container">
        {
            !preparationCondition ? ( 

                productos.map((producto,i) => (
                    <Product
                        key={`${producto.id}${i}`}
                        {...producto}
                        showDetails={showDetails}
                    />
                ))
            ):(
                productos.map((producto,i) => (
                    producto.preparation_time > -1 && (
                        <Product
                        key={`${producto.id}${i}`}
                        {...producto}
                        showDetails={showDetails}
                    />
                    )
                ))
            )
        }
    </div>
  )
}
