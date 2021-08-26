import React, { useContext } from 'react'
import { ProductContext } from '../../context/product'

export default function ProductList() {
    const products = useContext(ProductContext)
    console.log(products);
    return (
        <div>
            {products.map( product => {
                return (
                    <h1>{product.product_name}</h1>
                )
            })}
        </div>
    )
}
