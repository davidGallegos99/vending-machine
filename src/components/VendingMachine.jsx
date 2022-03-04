import React from 'react'
import { ProductList } from './ProductList'

export const VendingMachine = ({
    productos,
    error
}) => {
  return (
    <div className='contenedor'>
        <h1>Vending machine</h1>
        <div className="linea"></div>
            <ProductList 
                error={error}
                productos={productos}
            />
    </div>
  )
}
