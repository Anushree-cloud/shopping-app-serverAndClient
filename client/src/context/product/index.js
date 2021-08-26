import React, { useState, useEffect, createContext } from 'react'

export const ProductContext = createContext()

export const ProductContextProvider = (props) => {
    

    return (
        <ProductContext.Provider>
            {props.children}
        </ProductContext.Provider>
    )
}