import axios from 'axios'
import React, { useState, useEffect, createContext } from 'react'

export const ProductContext = createContext()

export const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/products').then(response =>{
            console.log(response);
            setProducts(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    )
}