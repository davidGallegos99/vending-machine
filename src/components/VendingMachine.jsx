import React from 'react'
import { Order } from './Order'
import { ProductList } from './ProductList'

export const VendingMachine = ({
    productos,
    error
}) => {
  return (
    <div className='contenedor'>
        <h1>Vending machine</h1>
        <div className="linea"></div>
            <Order/>
            <p className='title-order'>Products</p>
            <ProductList 
                showDetails={true}
                error={error}
                productos={productos}
            />
    </div>
  )
}
